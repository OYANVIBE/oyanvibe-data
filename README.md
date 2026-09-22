# oyanvibe-data

Data, sources and chart code behind every [OYANVIBE](https://www.youtube.com/@OYANVIBE) video — technology and the economy in measured numbers.

## How to use this repository

Every video has its own folder under `videos/`. Inside you will find:

- `README.md` — what was measured, where the data comes from (with links to the official source pages), how each number was computed, and a table of every number used in the video;
- the raw snapshot of the source data exactly as it was retrieved, with the capture time;
- `facts.json` — every derived number with its source and capture time;
- `script.md` — the narration, with a reference on every number;
- `chart/` — the code that draws the charts from the raw snapshot.

If you find a number in a video that you cannot reproduce from these files, open an issue.

## Videos

| # | Video | Folder |
|---|---|---|
| 006 | Two Economies: The Prices That Forked | [videos/006-two-economies](videos/006-two-economies) |

## Licence

Source data: public domain or as licensed by the publishing agency (see each folder). Chart code: MIT. Narration texts: © OYANVIBE.
