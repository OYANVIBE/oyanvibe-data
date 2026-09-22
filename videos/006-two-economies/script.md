```json
{ "title": "Two Economies: The Prices That Forked", "structure": "history-in-data", "disclosure": "description",
  "sources": { "facts": "runs/20260920-215632-facts/facts.json", "owner_notes": "videos/two-economies/owner_notes.json" },
  "allow": ["y1947: 1947 — first full year of CPI-U (sa0_first_year)", "y1967: 1967 — base year of the long-arc chart (televisions start, sera01_first_year)", "y1998: 1998 — base year of the modern basket (computers start, seee01_first_year)", "y2025: 2025 — last full year (end_year)", "base100: 100 — every index line is set to 100 in its base year by construction", "m11: 11 — months in the 2025 annual average: the Bureau published no October 2025 CPI (api.bls.gov, period M10 = \"-\", checked 2026-09-20)"] }
```
<!-- alternative titles: One Basket, Two Economies | Two Economies: What Got Cheaper and What Got Pricier Since 1947 -->
<!-- Final script · built on draft-fork («The fork», chronological, museum-guide tone) with the judges' fixes: the quality-adjustment scene from draft-doubt as the mid-video turn, the dashed-line reading rule and the textbooks/shelter counter-evidence from draft-hands. Production notes live in HTML comments; the narration is everything outside them. -->
<!-- TTS pass: «Baumol» = BOW-mol (rhymes with «towel»), set an alias in SSML. «C P I U» is spelled out on purpose; «the Bureau» replaces «BLS» in speech. No «%», «×», «→» or dashes in narration lines; every percentage is the word «percent» after the digit. -->

## [scene:cold-open] One number
<!-- Card 1: dark field, one large figure «×14.4», small caption beneath: «U.S. consumer prices, 1947 → 2025». Source stamp bottom-left from the first frame. On «two economies» the figure splits into two cards of identical size, weight and color: «Televisions −99% since 1967» (left) and «Medical care ×20.6 since 1967» (right). Neutral styling on both; the words carry the contrast. -->
Here is the story in one number. Since 1947{y1947}, the average price of what an urban American household buys has risen 14.4{sa0_1947_2025_x} times. One basket. One line.

And that number hides almost everything. Inside it, two economies have been pulling apart.

In one of them, the television index is down 99{sera01_1967_2025_drop} percent since 1967{y1967}, the first full year of that series. Down to about one percent of where it started. Nobody who has bought a television believes that. That is a quality-adjusted index, not a price tag, and we will come back to it.

In the other economy, medical care is up 20.6{sam_1967_2025_x} times over the same years.

Same country. Same basket. Opposite worlds.

Today we watch them fork.

## [scene:method] How to read the chart
<!-- Card 2: a blank logarithmic grid with a dashed horizontal line at 100. Two labels fade in: «above the dashed line = more expensive than average», «below = cheaper than average». Then two equal-height steps drawn at different heights, captioned «log scale». Fine print at the bottom: «CPI-U · U.S. city average · not seasonally adjusted · annual averages of monthly values». -->
Every line here is a price index. In its base year, each line is set to 100{base100}, and from there it shows how far prices in that category have traveled. Not dollars, not a bill, just distance.

The dashed line is All items, the average of everything urban households buy. Above the dashed line, more expensive than average. Below it, cheaper.

The vertical scale is logarithmic, so a doubling looks the same near the floor as near the ceiling.

## [scene:chart-sweep] Two Economies: U.S. prices since 1967
<!-- Remotion scene, already built: base 1967 = 100, ~40 s sweep + 6 s hold. Lines: All items (dashed benchmark), Medical care, Shelter, Food at home, Electricity, New vehicles, Apparel, Televisions. Year counter top-right. Pacing: the motion sentences run with the counter through the 1970s–2000s; «By the far right edge» lands as the counter reaches 2025; «Hold that picture» falls inside the 6 s hold. ~122 words. -->
We begin in 1967{y1967}. Every line starts from the same point.

The lines rise together, almost braided. Then the braid loosens. Televisions never join the climb; they hold level while everything else rises. New vehicles and apparel slip under the benchmark. Medical care lifts off the top, and shelter follows. Then the television line breaks downward, faster every year.

By the far right edge, in 2025{y2025}, the whole basket sits at 9.7{sa0_1967_2025_x} times its start. Food at home and electricity are right beside it. Above them, shelter at 14.4{sah1_1967_2025_x} times, and alone at the top, medical care at 20.6{sam_1967_2025_x}. Below, new vehicles at 3.6{seta01_1967_2025_x}, apparel at 2.6{saa_1967_2025_x}. And at the very bottom, televisions, down 99{sera01_1967_2025_drop} percent.

Hold that picture. One chart, two directions.

## [scene:chart-sweep-modern] The modern basket, 1998–2025
<!-- Remotion scene, already built: base 1998 = 100, ~30 s sweep + 6 s hold. Lines: All items, Hospital services, College tuition, Textbooks & supplies, Child care, Shelter, Food at home, New vehicles, Apparel, Toys, Televisions, Computers, Software, Wireless phone service. Rising group read top to bottom, then the middle, then the falling group quickly, in one breath, as the counter reaches 2025. Textbooks and food at home are named without numbers; the chart carries them. ~98 words. -->
Now we move the base year to 1998{y1998}, the first full year for computers, software and wireless service. The fork happens again, faster.

The basket itself doubles, to 2{sa0_1998_2025_x} times. Above it, hospital services climb to 4.1{semd01_1998_2025_x}. College tuition to 3.1{seeb01_1998_2025_x}, with textbooks level beside it. Child care to 2.7{seeb03_1998_2025_x}. Shelter to 2.3{sah1_1998_2025_x}. Food at home hugs the average.

Below it, new vehicles rise only 24{seta01_1998_2025_pct} percent. Apparel slips 1{saa_1998_2025_drop} percent, flat for a generation.

Then the plunge. Wireless service, down 51{seed03_1998_2025_drop} percent. Software, down 75{seee02_1998_2025_drop}. Toys, down 77{sere01_1998_2025_drop}. Computers, down 96{seee01_1998_2025_drop}. Televisions, down 98{sera01_1998_2025_drop} percent.

## [scene:how-bls-counts] How the Bureau counts a television
<!-- Card 3, the turn: three plain lines revealed in order: «Old model leaves the sample → new model enters» · «Price difference = price change + quality change» · «The Bureau estimates the quality part and removes it». Then «−99%» returns with the caption «price of a fixed amount of television, not the price tag». The closing question stands alone on a dark card. -->
So, how does a line fall 99{sera01_1967_2025_drop} percent?

The Bureau does not track a television. It tracks the price of a fixed amount of television. When a different model replaces an old one, the two prices are not compared directly. The new set is bigger, sharper, thinner. Today the Bureau estimates how much of the price difference pays for those new features, and removes that part. Only the remainder counts as a price change.

So the line says the same amount of television costs about one percent of what it did in 1967{y1967}. It does not say any store sold a set for one percent of the old tag. The direction is real.

Which raises the harder question. If quality adjustment can pull a line down this far, what is it doing to the lines going up?

## [scene:pattern] What the two economies have in common
<!-- Card 4: two columns. Left: «Televisions · Computers · Software · Toys · Wireless · Apparel». Right: «Medical care · Hospital services · College tuition · Child care». A thin middle column: «New vehicles». Then a small card: «Baumol's cost disease — an explanation economists offer», one sentence. Then a card with a question mark: «Textbooks ×3 · Shelter 1.5× the average». -->
The falling lines share a resemblance. Televisions, computers, software, toys, wireless service, and apparel, which barely moved. Things made in a factory, shipped across an ocean, or turned into code.

The rising lines share a different one. Medical care, hospital services, college, child care. Things delivered by a person standing next to you. An hour of a person's attention is still an hour.

Economists have a name for part of this. Baumol's cost disease. Factories build more per hour every year, and prices follow them down. Wages in the labor-heavy services rise with the whole economy, because employers must compete for the same workers. But their productivity does not rise at the same pace, so their prices climb faster than the average. It is an explanation economists offer, not a proven cause, and it does not explain every line.

On the modern chart, the hospital services multiple is 2.1{hospital_vs_all_1998_2025_x} times the basket's own multiple. College tuition, 1.6{tuition_vs_all_1998_2025_x} times.

And two lines that break the pattern. Textbooks. Printed on a machine, shipped in a box. By the story it belongs at the bottom. It sits near the top, 3{seea_1998_2025_x} times, level with tuition. Shelter. A house is built once and stands for decades, yet its multiple runs 1.5{shelter_vs_all_1967_2025_x} times the average on the long chart. Something other than labor moves that line. Economists usually point to land and location. The Bureau also changed how it measures owners' shelter partway through this chart, so that line carries two methods.

And there is a middle. New vehicles rose 3.6{seta01_1967_2025_x} times over the long arc, below the basket, above the electronics. A car is built in a factory, but a car today carries airbags and cameras a 1967{y1967} car never had, and the Bureau counts that as more car, not more price.

## [scene:caveats] What this chart does not say
<!-- Card 5: five lines, revealed one by one: «The Bureau adjusts for quality: a 2025 TV is not a 1967 TV» · «A national average, not anyone's bill» · «CPI-U, U.S. city average, not seasonally adjusted, annual averages of monthly values» · «2025 is the last full year (11 months: no October data)» · «Category names are the Bureau's». -->
A few honest limits.

First, quality. The Bureau adjusts these indexes for quality. A 2025{y2025} television is not a 1967{y1967} television. The same adjustment applies to cars. For medical care it barely exists. The Bureau lists no quality adjustment for physicians' services or prescription drugs. So economists argue over how much of that rise is better service and how much is simply a higher price.

Second, this is a national average of urban households. It is not your bill, or anyone's bill.

Third, the series. Everything here is the Consumer Price Index for All Urban Consumers, C P I U, United States city average, not seasonally adjusted, annual averages of the monthly values.

Fourth, 2025{y2025} is the last full year in the data. The Bureau published no October figures that year, so 2025{y2025} here is an average of eleven months.

And last, the category names are the Bureau's: medical care and hospital services mean what the Bureau defines, not what anyone paid.

## [scene:owner-take] The author's view
<!-- GATE passed 2026-09-20: owner read script.ru.md and replied «ок»; owner_notes.json approvedByOwner=true. If a note is edited later, re-copy the Russian verbatim into «> original:», flip the flag back to false until re-approved, and re-run the linter. -->
<!-- Card 6: quote cards, one per note, plain typography, the author's name line beneath each. Label on screen: «The author of this channel writes». Russian original in smaller type beneath the English. The card style must read as opinion, not as data. -->
The numbers end here. What follows is not data. I read the numbers; the author of this channel wrote down what they thought of them.

On medical care, the line at the top:

> [owner-note: Медицина 1947→2025] This is the thing you cannot decline, and cannot order cheaper from another country. Where the buyer has no choice, the price rises fastest.
> original: Это то, от чего нельзя отказаться и что нельзя заказать дешевле из другой страны. Там, где у покупателя нет выбора, цена растёт быстрее всего.

On the middle of the chart:

> [owner-note: Одежда и новые машины] A car at three and a half times its 1967{y1967} price is a completely different car. The middle of the chart is more honest than its edges. This is where factory savings and human labor meet.
> original: Машина за три с половиной цены 1967 года — это совсем другая машина. Середина графика честнее краёв: здесь заводская экономия и человеческий труд встречаются.

And on the line at the bottom:

> [owner-note: Телевизоры 1967→2025] I don't take this literally. A television at one percent of the price is about quality for the money, not the sticker in the store. The direction is right, but the viewer deserves an honest account of how the Bureau counts it.
> original: Я не верю в это буквально: телевизор за один процент цены — это про качество на доллар, а не про ценник в магазине. Направление верное, но зрителю надо честно сказать, как BLS это считает.

Those are the author's opinions. The chart does not confirm or deny them. The data does not say why the lines fork. Only that they do.

## [scene:verdict] The fork
<!-- Card 7: the long-arc chart frozen on 2025, all lines dimmed except Medical care and Televisions. Two figures in equal styling: «×42.8 since 1947» and «−99% since 1967». Then two lines of type: «As a direction, yes. As a law, no.» Then «One basket. Two economies.» -->
Here is what the data says.

Since 1947{y1947}, the whole basket rose 14.4{sa0_1947_2025_x} times. Medical care rose 42.8{sam_1947_2025_x} times, three times the multiple of the whole basket. Televisions, over their shorter record, fell 99{sera01_1967_2025_drop} percent.

Those are not three separate facts. They are one fact seen from three sides. The basket is an average of two economies moving apart. One is made of things from factories, and those got cheaper than the average. The other is made of people's time, and time ran ahead of it.

Does the story hold? As a direction, yes. As a law, no. Textbooks and shelter break it, and the middle of the chart is a negotiation, not a verdict.

The next time you hear one number for prices, picture the fork. The average is real. It is also the least interesting line on the chart.

## [scene:outro] Sources
<!-- Card 8: source stamp large: «U.S. Bureau of Labor Statistics, CPI-U, captured 2026-09-20 UTC», then «Data, sources and chart code: link in the description». Channel mark. -->
Data, sources and the chart code are linked in the description. Every line you saw can be redrawn from the Bureau's public series.

Next time: another dataset, measured the same way. Thank you for watching.
