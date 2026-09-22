# Two Economies: The Prices That Forked

Every number spoken or shown in this video comes from the files in this folder. Nothing was typed in by hand.

## Where the data comes from

**Source:** U.S. Bureau of Labor Statistics, Consumer Price Index for All Urban Consumers (CPI-U), U.S. city average, not seasonally adjusted.
**Retrieved:** 2026-09-20 16:56 UTC from the BLS Public Data API (https://api.bls.gov/publicAPI/v1/timeseries/data/). The raw response, exactly as received, is in [`bls.json`](bls.json).
**Series used** (each link opens the official BLS page for that series):

- [CUUR0000SA0](https://data.bls.gov/timeseries/CUUR0000SA0) — All items
- [CUUR0000SAM](https://data.bls.gov/timeseries/CUUR0000SAM) — Medical care
- [CUUR0000SEMD01](https://data.bls.gov/timeseries/CUUR0000SEMD01) — Hospital services
- [CUUR0000SEEB01](https://data.bls.gov/timeseries/CUUR0000SEEB01) — College tuition and fees
- [CUUR0000SEEA](https://data.bls.gov/timeseries/CUUR0000SEEA) — Educational books and supplies
- [CUUR0000SEEB03](https://data.bls.gov/timeseries/CUUR0000SEEB03) — Child care and nursery school
- [CUUR0000SAH1](https://data.bls.gov/timeseries/CUUR0000SAH1) — Shelter
- [CUUR0000SAF11](https://data.bls.gov/timeseries/CUUR0000SAF11) — Food at home
- [CUUR0000SETA01](https://data.bls.gov/timeseries/CUUR0000SETA01) — New vehicles
- [CUUR0000SEHF01](https://data.bls.gov/timeseries/CUUR0000SEHF01) — Electricity
- [CUUR0000SAA](https://data.bls.gov/timeseries/CUUR0000SAA) — Apparel
- [CUUR0000SERA01](https://data.bls.gov/timeseries/CUUR0000SERA01) — Televisions
- [CUUR0000SERE01](https://data.bls.gov/timeseries/CUUR0000SERE01) — Toys
- [CUUR0000SEEE01](https://data.bls.gov/timeseries/CUUR0000SEEE01) — Computers, peripherals, and smart home assistants
- [CUUR0000SEEE02](https://data.bls.gov/timeseries/CUUR0000SEEE02) — Computer software and accessories
- [CUUR0000SEED03](https://data.bls.gov/timeseries/CUUR0000SEED03) — Wireless telephone services
- [CUUR0000SERA02](https://data.bls.gov/timeseries/CUUR0000SERA02) — Other video equipment
- [CUUR0000SEHJ](https://data.bls.gov/timeseries/CUUR0000SEHJ) — Household furnishings and operations

## How the numbers were computed

- Monthly index values were averaged into **annual averages**; a year counts as complete with at least 11 published months (the Bureau published no October 2025 index, so 2025 is an average of 11 months).
- For the charts every series is **rebased to 100 in its base year** (1967 for the long chart, 1998 for the modern basket) and drawn on a **log scale**, so equal vertical distances mean equal percentage changes.
- Multiples such as ×14.4 are the ratio of the 2025 annual average to the base-year annual average; percentages are the same ratio minus one. "Times the basket" figures divide one series' multiple by the All-items multiple.
- The Bureau adjusts many categories for quality (a 2025 television is not a 1967 television); see the video's caveats scene and the BLS page on [quality adjustment](https://www.bls.gov/cpi/quality-adjustment/).

## Numbers used in the video

| id | value | meaning | series |
|---|---|---|---|
| `y1947` | **1947** | first full year of CPI-U (sa0_first_year) | — |
| `sa0_1947_2025_x` | **14.4** | multiple, 1947→2025 | [All items](https://data.bls.gov/timeseries/CUUR0000SA0) |
| `sera01_1967_2025_drop` | **99** | % decline, 1967→2025 | [Televisions](https://data.bls.gov/timeseries/CUUR0000SERA01) |
| `y1967` | **1967** | base year of the long-arc chart (televisions start, sera01_first_year) | — |
| `sam_1967_2025_x` | **20.6** | multiple, 1967→2025 | [Medical care](https://data.bls.gov/timeseries/CUUR0000SAM) |
| `base100` | **100** | every index line is set to 100 in its base year by construction | — |
| `y2025` | **2025** | last full year (end_year) | — |
| `sa0_1967_2025_x` | **9.7** | multiple, 1967→2025 | [All items](https://data.bls.gov/timeseries/CUUR0000SA0) |
| `sah1_1967_2025_x` | **14.4** | multiple, 1967→2025 | [Shelter](https://data.bls.gov/timeseries/CUUR0000SAH1) |
| `seta01_1967_2025_x` | **3.6** | multiple, 1967→2025 | [New vehicles](https://data.bls.gov/timeseries/CUUR0000SETA01) |
| `saa_1967_2025_x` | **2.6** | multiple, 1967→2025 | [Apparel](https://data.bls.gov/timeseries/CUUR0000SAA) |
| `y1998` | **1998** | base year of the modern basket (computers start, seee01_first_year) | — |
| `sa0_1998_2025_x` | **2** | multiple, 1998→2025 | [All items](https://data.bls.gov/timeseries/CUUR0000SA0) |
| `semd01_1998_2025_x` | **4.1** | multiple, 1998→2025 | [Hospital services](https://data.bls.gov/timeseries/CUUR0000SEMD01) |
| `seeb01_1998_2025_x` | **3.1** | multiple, 1998→2025 | [College tuition and fees](https://data.bls.gov/timeseries/CUUR0000SEEB01) |
| `seeb03_1998_2025_x` | **2.7** | multiple, 1998→2025 | [Child care and nursery school](https://data.bls.gov/timeseries/CUUR0000SEEB03) |
| `sah1_1998_2025_x` | **2.3** | multiple, 1998→2025 | [Shelter](https://data.bls.gov/timeseries/CUUR0000SAH1) |
| `seta01_1998_2025_pct` | **24** | % change, 1998→2025 | [New vehicles](https://data.bls.gov/timeseries/CUUR0000SETA01) |
| `saa_1998_2025_drop` | **1** | % decline, 1998→2025 | [Apparel](https://data.bls.gov/timeseries/CUUR0000SAA) |
| `seed03_1998_2025_drop` | **51** | % decline, 1998→2025 | [Wireless telephone services](https://data.bls.gov/timeseries/CUUR0000SEED03) |
| `seee02_1998_2025_drop` | **75** | % decline, 1998→2025 | [Computer software and accessories](https://data.bls.gov/timeseries/CUUR0000SEEE02) |
| `sere01_1998_2025_drop` | **77** | % decline, 1998→2025 | [Toys](https://data.bls.gov/timeseries/CUUR0000SERE01) |
| `seee01_1998_2025_drop` | **96** | % decline, 1998→2025 | [Computers, peripherals, and smart home assistants](https://data.bls.gov/timeseries/CUUR0000SEEE01) |
| `sera01_1998_2025_drop` | **98** | % decline, 1998→2025 | [Televisions](https://data.bls.gov/timeseries/CUUR0000SERA01) |
| `hospital_vs_all_1998_2025_x` | **2.1** | ratio of multiples (series ÷ all items), 1998→2025 | derived from the series above |
| `tuition_vs_all_1998_2025_x` | **1.6** | ratio of multiples (series ÷ all items), 1998→2025 | derived from the series above |
| `seea_1998_2025_x` | **3** | multiple, 1998→2025 | [Educational books and supplies](https://data.bls.gov/timeseries/CUUR0000SEEA) |
| `shelter_vs_all_1967_2025_x` | **1.5** | ratio of multiples (series ÷ all items), 1967→2025 | derived from the series above |
| `sam_1947_2025_x` | **42.8** | multiple, 1947→2025 | [Medical care](https://data.bls.gov/timeseries/CUUR0000SAM) |

Ids match the `{ref}` markers in [`script.md`](script.md) and the entries in [`facts.json`](facts.json), which records the capture time for each value.

## Files

- [`cpi-annual.csv`](cpi-annual.csv) — annual averages of every series (blank = fewer than 11 months published that year)
- [`bls.json`](bls.json) — raw API snapshot with capture time
- [`facts.json`](facts.json) — every derived number with its source and capture time
- [`script.md`](script.md) — the narration with a reference on every number
- [`chart/`](chart/) — the chart code ([Remotion](https://www.remotion.dev/), React) that draws the lines from `bls.json`

Narration: synthetic voice. Data: public domain (U.S. federal statistics). Chart code: MIT.
