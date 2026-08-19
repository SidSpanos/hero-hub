# Hero Hub

An interactive hero planner for Fate War — tier board, radar comparison,
pairings, a fortnightly timeline and a roster, all in **one HTML file** with no
build step, no backend and no dependencies.

**Live:** https://sidspanos.github.io/hero-hub/

---

## What's in it

| Tab | What it's for |
|---|---|
| **Tier board** | Every hero ranked S+ → D. Drag cards between tiers, filter by mode, troop type, skin or how the hero is obtained. |
| **Radar** | Six-axis webs — small multiples per tier, plus a three-hero overlay comparison. |
| **Pairings** | Known hero combos grouped by situation, drag-and-drop, same cards as the board. |
| **Timeline** | Fortnightly windows showing who to invest in and when. Past windows collapse as time moves. |
| **Roster** | The source of truth. Add heroes, set tiers, modes, troops, skins, skill order and talent builds. |

Each hero card carries their portrait, troop type, whether they have a skin,
how they're obtained, three talent-tree slots and their skill training order —
four levels plus the ultimate, which lights up at 5 / 5 / 5 / 5.

## Running it

Nothing to install. Open `index.html` in any browser, or visit the live link.
Works offline once loaded.

## The data

`hero-data.js` is the **published version** — the baseline everyone starts
from, and the only file that needs editing. It's plain JavaScript, commented
section by section:

- `TIERS` — `"hero": "S+"` … `"D"`
- `ROSTER` — add or change heroes
- `TROOPS` — primary troop type and lieutenants
- `SKINS`, `OBTAIN`, `OBTAIN_TYPES` — skin and acquisition
- `SKILLS` — `"hero": [5,1,3,2]`, the training order
- `BUILDS`, `BUILD_IMAGES` — talent trees and their screenshots
- `PAIRINGS`, `PAIR_LINKS` — the combo list
- `SIZES` — portrait size per view
- `PORTRAITS`, `TROOP_ICONS` — images as data URLs, written by the app

`hero-names.js` is just names: `id -> display name`, one per line. The left
side is a stable id that never changes, so renaming a hero never breaks
anything pointing at them.

## Talent trees

Every hero runs three of the eleven trees. Click one of the three slots at the
bottom of a card and the **talent wheel** opens: three colour-coded branches
radiating from the hero, laid out the way the game draws them.

Set the three branches once, then click nodes to take them. Everything leading
to a node comes with it, and clicking it again drops whatever was only
reachable through it — so a build is a few clicks rather than fourteen.

The three tabs are three situations. Tag one Arena, one Rally, and the card
slot lights up when you filter to that mode. *Copy from…* starts a build from
one you already mapped.

Stored as `TREE_SET` (a hero's three branches) and an `alloc` of node numbers
inside each entry in `BUILDS`.

## Visitors keep their own version

Anyone using the site can move heroes around, set skill orders, resize
portraits — and it's **theirs**. Their edits are stored privately in their own
browser as a layer *on top of* `hero-data.js`, never uploaded anywhere.

The layer is a diff, not a copy, which is what makes republishing safe: push a
new `hero-data.js` and a visitor who had moved three heroes still has those
three moves, while everything they never touched picks up the new version.

**My changes** in the toolbar is where they manage it:

- **Save my changes** — a small `my-hero-hub.json` of just their edits
- **Load my changes** — moves that setup to another browser or machine
- **Back to the published version** — drops the layer

## Publishing an update

Edit `hero-data.js` (by hand, or let the app write it via **Auto-save…** when
running locally), then:

```
git add -A
git commit -m "data update"
git push
```

GitHub Pages redeploys in under a minute. On Windows there's `publish.cmd` in
the parent folder that does all three for you.

Browsers cache `hero-data.js` hard. If an update doesn't show up, bump the
version on the tag in `index.html` — `<script src="hero-data.js?v=2">`.

## Licence

MIT for the code. Hero artwork belongs to the game's publisher and is included
here only for personal reference.
