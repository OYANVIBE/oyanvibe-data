import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import bls from "./data/bls.json";

// Сцена трека A: индексированные линии (базовый год = 100), логарифмическая шкала, линии прорисовываются по годам.
// Данные — src/data/bls.json из npm run data:bls (BLS CPI-U, годовые средние, с временем захвата).

type Annual = { year: number; value: number; months: number; partial: boolean; full: boolean };
type Series = { id: string; label: string; short?: string; group: string; annual: Annual[] };

export type IndexedLinesProps = {
  title: string;
  seriesIds: string[];
  baseYear: number;
  endYear: number;
  /** секунды на «проживание» всех лет; хвост сцены — линии стоят */
  sweepSeconds: number;
  /** стоп-кадр на endYear с первого кадра (вердикт) */
  frozen?: boolean;
  /** если задано — остальные линии и подписи приглушены */
  highlightIds?: string[];
};

const COLORS: Record<string, string> = {
  benchmark: "#F5F5F5",
  rose: "#FF6B4A",
  fell: "#4FC3F7",
  middle: "#FFD166",
};
const ROSE_SHADES = ["#FF6B4A", "#FF8F6B", "#E8533A", "#FFB39A", "#D94A2B", "#FFA07A"];
const FELL_SHADES = ["#4FC3F7", "#7FDBFF", "#29B6F6", "#A5E8FF", "#0288D1", "#80DEEA"];

const W = 1920, H = 1080;
const PAD = { left: 140, right: 560, top: 190, bottom: 140 }; // справа место под подписи линий

export const IndexedLines: React.FC<IndexedLinesProps> = ({ title, seriesIds, baseYear, endYear, sweepSeconds, frozen = false, highlightIds }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const series = (bls.series as Series[]).filter((s) => seriesIds.includes(s.id)).map((s) => {
    const pts = s.annual.filter((a) => a.year >= baseYear && a.year <= endYear && a.full); // full ставит data-bls.mjs
    const base = pts.find((a) => a.year === baseYear) ?? pts[0];
    return { ...s, points: pts.map((a) => ({ year: a.year, idx: (a.value / base.value) * 100 })) };
  });

  const allIdx = series.flatMap((s) => s.points.map((p) => p.idx));
  const logMin = Math.floor(Math.log10(Math.min(...allIdx)) * 2) / 2;
  const logMax = Math.ceil(Math.log10(Math.max(...allIdx)) * 2) / 2;

  // Текущий год «проживания»: за sweepSeconds проходим от baseYear до endYear, дальше стоим.
  const dimmed = (id: string) => !!highlightIds && !highlightIds.includes(id);
  const currentYear = frozen ? endYear : interpolate(frame, [0, Math.max(1, sweepSeconds * fps)], [baseYear, endYear], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  const x = (year: number) => PAD.left + ((year - baseYear) / (endYear - baseYear)) * (W - PAD.left - PAD.right);
  const y = (idx: number) => PAD.top + (1 - (Math.log10(idx) - logMin) / (logMax - logMin)) * (H - PAD.top - PAD.bottom);

  const gridTicks: number[] = [];
  for (let e = logMin; e <= logMax + 1e-9; e += 0.5) gridTicks.push(Math.pow(10, e));

  const shade = (s: Series, i: number) => (s.group === "rose" ? ROSE_SHADES : s.group === "fell" ? FELL_SHADES : [COLORS[s.group] ?? "#ccc"])[i % 6];
  let roseI = 0, fellI = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0F14", color: "#F5F5F5", fontFamily: "Inter, Segoe UI, Arial, sans-serif" }}>
      <div style={{ position: "absolute", left: PAD.left, top: 70, fontSize: 56, fontWeight: 700, letterSpacing: -0.5 }}>{title}</div>
      <div style={{ position: "absolute", left: PAD.left, top: 140, fontSize: 30, color: "#9AA4B2" }}>
        Price index, {baseYear} = 100 · log scale · annual averages
      </div>

      {/* Счётчик года */}
      <div style={{ position: "absolute", right: 80, top: 60, fontSize: 120, fontWeight: 800, fontVariantNumeric: "tabular-nums", color: "#F5F5F5", opacity: 0.95 }}>
        {Math.floor(currentYear)}
      </div>

      <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0 }}>
        {/* Сетка по логарифмическим делениям */}
        {gridTicks.map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="#1F2933" strokeWidth={1} />
            <text x={PAD.left - 16} y={y(t) + 10} fill="#6B7785" fontSize={26} textAnchor="end" fontFamily="inherit">
              {t >= 100 ? Math.round(t).toLocaleString("en-US") : t.toFixed(t < 10 ? 1 : 0)}
            </text>
          </g>
        ))}
        {/* Ось лет */}
        {Array.from({ length: Math.floor((endYear - baseYear) / 10) + 1 }, (_, i) => baseYear + i * 10).map((yr) => (
          <text key={yr} x={x(yr)} y={H - PAD.bottom + 44} fill="#6B7785" fontSize={26} textAnchor="middle" fontFamily="inherit">{yr}</text>
        ))}
        {/* Линии до текущего года; подписи справа разведены по вертикали, чтобы не налезали */}
        {(() => {
          const heads = series.map((s) => {
            const visible = s.points.filter((p) => p.year <= currentYear);
            const last = s.points.find((p) => p.year >= currentYear) ?? s.points.at(-1)!;
            const prev = [...s.points].reverse().find((p) => p.year <= currentYear) ?? s.points[0];
            const t = last.year === prev.year ? 0 : (currentYear - prev.year) / (last.year - prev.year);
            const headIdx = prev.idx + (last.idx - prev.idx) * t;
            const color = shade(s, s.group === "rose" ? roseI++ : s.group === "fell" ? fellI++ : 0);
            return { s, visible, headIdx, headX: x(Math.min(currentYear, endYear)), headY: y(headIdx), color };
          });
          // Разводка подписей: сортируем по Y и раздвигаем сверху вниз с минимальным зазором.
          const GAP = 34;
          const sorted = [...heads].sort((a, b) => a.headY - b.headY);
          let prevY = -Infinity;
          for (const h of sorted) { (h as typeof h & { labelY: number }).labelY = Math.max(h.headY, prevY + GAP); prevY = (h as typeof h & { labelY: number }).labelY; }
          const labelX = W - PAD.right + 40;
          return heads.map((h) => {
            const isBench = h.s.group === "benchmark";
            const labelY = (h as typeof h & { labelY: number }).labelY;
            const d = [...h.visible.map((p) => `${x(p.year)},${y(p.idx)}`), `${h.headX},${h.headY}`].join(" ");
            return (
              <g key={h.s.id} opacity={dimmed(h.s.id) ? 0.18 : 1}>
                <polyline points={d} fill="none" stroke={h.color} strokeWidth={isBench ? 5 : 3.5} strokeLinejoin="round" strokeLinecap="round" strokeDasharray={isBench ? "10 8" : undefined} />
                <circle cx={h.headX} cy={h.headY} r={6} fill={h.color} />
                <line x1={h.headX + 8} y1={h.headY} x2={labelX - 8} y2={labelY} stroke={h.color} strokeWidth={1} opacity={0.6} />
                <text x={labelX} y={labelY + 9} fill={h.color} fontSize={26} fontFamily="inherit" fontWeight={isBench ? 700 : 500}>
                  {h.s.short ?? h.s.label} · {Math.round(h.headIdx).toLocaleString("en-US")}
                </text>
              </g>
            );
          });
        })()}
      </svg>

      {/* Штамп источника — правило канала: каждая цифра с источником и датой */}
      <div style={{ position: "absolute", left: PAD.left, bottom: 44, fontSize: 24, color: "#9AA4B2" }}>
        Source: U.S. Bureau of Labor Statistics, CPI-U (U.S. city average, NSA) · api.bls.gov · captured {bls.capturedAt.slice(0, 10)} UTC
      </div>
    </AbsoluteFill>
  );
};
