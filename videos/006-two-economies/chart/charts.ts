// Пропсы двух графиков ролика #6 — используются и как отдельные композиции (Root), и внутри сборки (two-economies/Video).
import type { IndexedLinesProps } from "./IndexedLines";

export const longArc: IndexedLinesProps = {
  title: "Two Economies: U.S. prices since 1967",
  seriesIds: ["CUUR0000SA0", "CUUR0000SAM", "CUUR0000SAH1", "CUUR0000SAF11", "CUUR0000SEHF01", "CUUR0000SETA01", "CUUR0000SAA", "CUUR0000SERA01"],
  baseYear: 1967,
  endYear: 2025,
  sweepSeconds: 40,
};

export const modern: IndexedLinesProps = {
  title: "The modern basket, 1998–2025",
  seriesIds: ["CUUR0000SA0", "CUUR0000SEMD01", "CUUR0000SEEB01", "CUUR0000SEEB03", "CUUR0000SEEA", "CUUR0000SAH1", "CUUR0000SAF11", "CUUR0000SETA01", "CUUR0000SAA", "CUUR0000SERE01", "CUUR0000SERA01", "CUUR0000SEEE01", "CUUR0000SEEE02", "CUUR0000SEED03"],
  baseYear: 1998,
  endYear: 2025,
  sweepSeconds: 30,
};
