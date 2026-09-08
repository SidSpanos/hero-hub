/* core-skills.js — THE hero authority.

   Everything the app knows about a hero that is a FACT rather than an opinion
   lives here, in one file, in two halves.

   ---------------------------------------------------------------------------
   HALF ONE — the sheet. One line per hero, hand-edited, exactly the format
   hero-sheet.js used, because these are the columns you maintain by hand:

     troop   the troop they march
     trees   their three talent trees, read LEFT TO RIGHT — the 10 o'clock,
             12 o'clock and 2 o'clock branches, in that order. THE ORDER IS
             NOT RECOVERABLE FROM A SCREENSHOT: the character panel does not
             draw them in wheel order. It is yours, read off the wheel, and
             nothing in the other half is allowed to rearrange it.
             "vers" (Versatile) carries bonuses under any commander, which is
             what makes a hero good in the lieutenant seat. They still march
             their own troop. Versatile and Balanced ("bal") are DIFFERENT
             trees and a hero can have both.
     skin    yes / no
     obtain  how you get them

   Spelling is forgiving: Cavalry, BZ, seige, cheif and p2w all land correctly.
   Lines starting with # are ignored, a # anywhere starts a comment, and a
   blank or "-" means "not recorded". A line the app can't read is skipped and
   named on the Roster tab — one bad row never blanks the rest.

   ---------------------------------------------------------------------------
   HALF TWO — the skills. Five slots per hero, read off the game or off the
   guide mirror, keyed by the same internal hero id as the sheet above, so the
   two halves join on that id and can never drift apart into two opinions.

     "1".."4"   the four normal slots, in the order the game draws them
     "U"        the awakened slot

   Each skill carries its name, type, rage cost, the conditions in words, and
   one effects[] entry per numbered line of the Upgrade Preview — five levels,
   low to high, null where a level was not visible. Every skill is read AT MAX
   in the app: the level-5 figure is the one that counts, because what a hero
   is worth is what they are worth fully trained.

   The awakened slot is deliberately half-empty. "toFill": true marks the ones
   still waiting on the account to awaken that hero. Fill them as you go.

   ---------------------------------------------------------------------------
   WHY ONE FILE. The two used to be separate and both claimed to know a hero's
   talents, which is how they came to disagree on 31 of 35 rows without anyone
   noticing. Now the trees have exactly one home — the table below — and the
   skills half carries no competing copy. This file is loaded AFTER
   hero-sheet.js, so if that older file is still on disk its rows are read
   first and then replaced by these. It can be deleted.

   Your own edits in the browser still sit on top of all of it and still win.
*/

/* ---- HALF ONE: the sheet -------------------------------------------------
   troop   axe   bers   cav   beast
   trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr
           siege  hunt  gath  skill
   obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any                  */
window.HERO_SHEET = `
# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- S+ ----
Arthur       | bers  | siege bal def     | yes  | chief
Farad        | cav   | axe skill vers    | yes  | wheel   # Farhad
Freya        | axe   | beast siege def   | yes  | p2p   # Freyja
Irin         | beast | cav skill hunt    | yes  | wheel   # Erin
Odaunaga     | axe   | cav vers atk      | yes  | chief   # Oda Nobunaga
Shan         | cav   | vers bal skill    | yes  | chief   # Joan
Shisunin     | bers  | bal garr def      | yes  | wheel   # Yi Sun-sin

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- S ----
Amaterasu    | axe   | siege skill bal   | yes  | wheel
Asuka        | cav   | cav vers field    | yes  | boxes   # Aska
Rot          | beast | axe vers field    | yes  | wheel   # Roro
Wukong       | bers  | cav skill vers    | yes  | p2p   # Wukon
# hero         | troop | trees             | skin | obtain | tier | modes
#   the last two columns are only read for a hero the app has never seen -
#   they introduce them. On an existing hero they are ignored, because where
#   a hero sits is yours to drag.
Ganglot      | bers  | bers vers skill   | -    | -      | -    | -   # trees are PANEL order not wheel order - check on the wheel. Skin, obtain, tier and modes not yet known.

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- A ----
Carl         | cav   | bers vers def     | no   | wheel   # Karl
Held         | beast | axe siege skill   | no   | shift   # Helda
Morgan Lefe  | axe   | axe hunt atk      | no   | p2p
Petra        | bers  | bers def vers     | no   | boxes
Reald        | cav   | bers garr def     | no   | shift   # Reid
Reinhardt    | axe   | cav hunt field    | no   | shift
Silvin       | beast | vers skill bal    | no   | f2p   # Sylvan

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- B ----
Balder       | bers  | bers hunt def     | no   | f2p   # Baldur
Elfwine      | cav   | hunt supp bal     | no   | f2p   # Aelfwine
Iris         | axe   | beast garr supp   | no   | f2p
Kaira        | axe   | vers axe field    | no   | boxes
Kiana        | cav   | beast vers supp   | no   | vip
Kus          | bers  | axe hunt atk      | no   | any   # Kalthas
Reynald      | axe   | cav hunt field    | no   | f2p
Sara         | beast | hunt supp bal     | no   | f2p
Selena       | cav   | cav hunt field    | no   | f2p
Voll         | bers  | hunt bers skill   | no   | f2p

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- C ----
Linda        | axe   | cav vers skill    | no   | f2p
Rex          | cav   | bers garr def     | no   | f2p
Vista        | beast | vers bal supp     | no   | f2p

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- D ----
Elina        | axe   | gath bal supp     | no   | any   # Elena
Ilia         | cav   | axe hunt supp     | no   | any   # Elia
Scarnet      | bers  | gath bal supp     | no   | any   # Skerne
Sigrid       | beast | gath bal supp     | no   | any
`;

/* ---- HALF TWO: the skills ---------------------------------------------- */
window.CORE_SKILLS = {

  "Amaterasu": {
    name: "Amaterasu",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, amaterasu/index.html",
    skills: {
      "1": {
        name: "Judgement",
        type: "Burst",
        notes: "Deal a 1-time damage to the current target (DMG Factor 4,050), and ignore 3% of the enemy's DEF and DMG reduction.",
        effects: [
          { what: "DMG Factor", values: [4050, 5350, 6700, 9400, 13500] },
          { what: "Ignore DEF and DMG Reduction", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "2": {
        name: "Holy Radiance",
        type: "Passive",
        notes: "This Hero and 5 allied Troops receive a blessing in battle, reducing DMG taken by their Troops by 2.5%. This effect cannot be stacked.",
        effects: [
          { what: "Reduce DMG received by", unit: "%", values: [2.5, 3, 3.5, 5, 7] }
        ]
      },
      "3": {
        name: "God's Blessing",
        type: "Passive",
        notes: "If Troop is in a Rally unit, there is a 50% chance to receive healing (Heal Factor 1,440) when taking DMG from Burst skills.",
        effects: [
          { what: "Healing Factor", values: [1440, 1920, 2400, 3360, 4800] }
        ]
      },
      "4": {
        name: "Reflective Light",
        type: "Passive",
        notes: "There is a 7.5% chance to ignore the current DMG and transfer it to the target when receiving DMG (DMG cannot exceed 45% of Troop ATK. This effect can only trigger once every 8 seconds.",
        effects: [
          { what: "Chance", unit: "%", values: [7.5, 10, 12.5, 17.5, 25] },
          { what: "Reflected DMG ATK Limit", unit: "%", values: [45, 60, 75, 105, 150] }
        ]
      },
      "U": {
        name: "Final Judgment",
        type: "Awakened",
        subtype: "Passive",
        notes: "Deal a 1-time damage to the current target (DMG Factor 14,000), and ignore 15% of the enemy's DEF and DMG reduction. If the enemy's HP is below 50%, increases CRIT Rate of this damage by 35%.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] }
        ]
      }
    }
  },

  "Arthur": {
    name: "Arthur",
    warband: "Eternal King",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 340810,
    soldierLimit: 197800,
    source: "game screenshots IMG_1962,1964-1968",
    skills: {
      "1": {
        name: "King's Dignity",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        effects: [
          { what: "DMG Factor", values: [3900, 5200, 6500, 9000, 13000] },
          { what: "Shield Factor", values: [3000], note: "shown at current level only" },
          { what: "damage taken reduced", unit: "%", values: [10], note: "shown at current level only" },
          { what: "skill dmg and shield bonus per 100,000 soldiers", unit: "%", values: [1], note: "caps at 2,000,000 soldiers" }
        ]
      },
      "2": {
        name: "Redemption",
        type: "Passive",
        trigger: "HP below 70%, heals self every 6 seconds",
        myLevel: 2,
        effects: [
          { what: "Healing Factor", values: [750, 1000, 1250, 1750, 2500] }
        ]
      },
      "3": {
        name: "United Forces",
        type: "Passive",
        trigger: "when initiating a Rally",
        myLevel: 1,
        effects: [
          { what: "Increase DEF by", unit: "%", values: [4, 5.5, 6.5, 9.5, 13] },
          { what: "Ignore target's DEF", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "4": {
        name: "Elite Royal Army",
        type: "Passive",
        trigger: "Troop consists only of Berserkers",
        myLevel: 2,
        effects: [
          { what: "Increase counterattack DMG by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Increase HP of Berserker-type soldiers by", unit: "%", values: [5, 6, 8, 11, 15] }
        ]
      },
      "U": {
        name: "Rule the World",
        type: "Awakened",
        buffs: "King's Dignity",
        myLevel: null,
        notes: "before awakening it is King's Dignity at level 5 - damage to the target, plus a shield and resistance effect on self absorbing damage for the Troop over 3s, plus a damage-taken reduction; skill damage and shield bonus rise 1% per 100,000 soldiers commanded, capped at 2,000,000",
        incomplete: "After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [13000] },
          { what: "Shield Factor before awakening", values: [3000] },
          { what: "damage taken reduced, before awakening", unit: "%", values: [10] },
          { what: "skill dmg and shield bonus per 100,000 soldiers, before awakening", unit: "%", values: [1], note: "caps at 2,000,000 soldiers" }
        ]
      }
    }
  },

  "Asuka": {
    name: "Aska",
    warband: "Blade of Judgment",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 340810,
    soldierLimit: 197800,
    stars: "5 of 6",
    myLevels: [5,2,1,2,null],
    source: "game screenshots IMG_1995-1999, 2001",
    skills: {
      "1": {
        name: "Tempestuous Charge",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        notes: "charges a target ahead, single hit; also grants own Troop 1 stack of Guard (blocks 1 instance of DMG exceeding 3% of own Max HP) for 2s, cannot stack",
        effects: [
          { what: "DMG Factor", values: [4250, 5650, 7100, 10000, 14000] },
          { what: "Guard threshold, share of own Max HP", unit: "%", values: [3], note: "current-level value only, curve not shown" }
        ]
      },
      "2": {
        name: "Strength Through Valor",
        type: "Passive",
        myLevel: 2,
        notes: "every N normal attacks by the Troop grants a DMG increase for 15s, stacking up to 3 times; separately a chance to gain 1 stack of Guard (blocks 1 instance of DMG exceeding 3% of own Max HP) for 2s, cannot stack. The Basic Attack count goes DOWN as the skill levels.",
        effects: [
          { what: "Basic Attack count", values: [16, 14, 12, 10, 7] },
          { what: "Increase DMG dealt by", unit: "%", values: [1, 1.3, 1.6, 2.3, 3.5] },
          { what: "Guard chance", unit: "%", values: [18, 24, 30, 42, 60] }
        ]
      },
      "3": {
        name: "Graceful Blade Dance",
        type: "Passive",
        myLevel: 1,
        notes: "buffs Cavalry-type soldiers in this Hero's Troop",
        effects: [
          { what: "Increase ATK of Cavalry-type soldiers by", unit: "%", values: [10.5, 13.5, 17, 24, 35] },
          { what: "Increase MOV SPD of Cavalry-type soldiers by", unit: "%", values: [4, 5, 6, 8.5, 12] }
        ]
      },
      "4": {
        name: "Calm Under Pressure",
        type: "Passive",
        myLevel: 2,
        notes: "fires when a buff on this Hero's Troop expires; once every 5s",
        effects: [
          { what: "Healing Factor", values: [630, 840, 1050, 1470, 2100] }
        ]
      },
      "U": {
        name: "Blade of Judgment",
        type: "Awakened",
        buffs: "Tempestuous Charge",
        myLevel: null,
        incomplete: "rest of the After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] },
          { what: "DMG Factor after awakening", values: [15000] }
        ]
      }
    }
  },

  "Balder": {
    name: "Baldur",
    warband: "Ironshield",
    basePower: null,
    rarityNote: "not asserted - Baldur starts blue and progresses to gold, so rarity is a per-account fact, not a hero fact",
    sourceKind: "game",
    level: 60,
    power: 677530,
    soldierLimit: 195500,
    stars: "4 of 6",
    myLevels: [5,5,5,5,5],
    note: "all five slots read 5 in the game, including the awakened slot",
    incomplete: "only the base screen and the awakened tooltip were captured - slots 1-4 need re-shooting",
    source: "game screenshots IMG_2057-2058",
    skills: {
      "1": {
        name: "Seize the Initiative",
        type: "Burst",
        myLevel: 5,
        missing: "tooltip not captured; name read from the awakened skill's buff target"
      },
      "2": {
        name: null,
        myLevel: 5,
        missing: "tooltip not captured"
      },
      "3": {
        name: null,
        myLevel: 5,
        missing: "tooltip not captured"
      },
      "4": {
        name: null,
        myLevel: 5,
        missing: "tooltip not captured"
      },
      "U": {
        name: "Wargod Slash",
        type: "Awakened",
        buffs: "Seize the Initiative",
        myLevel: 5,
        notes: "after awakening, for each nearby allied Troop the DMG and Shield Factors of this effect increase by 5%, up to a cap the tooltip cuts off",
        incomplete: "the cap on the per-allied-Troop bonus needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [10500] },
          { what: "DMG Factor after awakening", values: [11500] },
          { what: "Shield Factor before awakening", values: [2250] },
          { what: "Shield Factor after awakening", values: [2250] },
          { what: "Per-allied-Troop increase to DMG and Shield Factors, after awakening", unit: "%", values: [5], note: "cap not visible" }
        ]
      }
    }
  },

  "Carl": {
    name: "Karl",
    warband: "Eternal Flame",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 53,
    power: 284540,
    soldierLimit: 187450,
    stars: "4 of 6",
    myLevels: [5,1,1,2,null],
    source: "game screenshots IMG_2037-2042",
    skills: {
      "1": {
        name: "Fire & Brimstone",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        notes: "single-target hit plus an HP Reduction debuff for 2s",
        effects: [
          { what: "Direct DMG Factor", values: [3800, 5000, 6300, 8800, 12500] },
          { what: "Reduce HP by", unit: "%", values: [8, 10, 15, 20, 25] }
        ]
      },
      "2": {
        name: "Glory of War",
        type: "Passive",
        myLevel: 1,
        notes: "also reflects a share of the DMG absorbed by Shields back at the enemy",
        effects: [
          { what: "Increase ATK of Berserker-type soldiers by", unit: "%", values: [6, 8, 10, 14, 20] },
          { what: "DMG conversion rate, Shield absorption dealt to enemy", unit: "%", values: [5.5, 6.5, 8, 12, 16] }
        ]
      },
      "3": {
        name: "Flame's Blessing",
        type: "Passive",
        myLevel: 1,
        notes: "20% chance on normal attacks to Shield you and an allied Troop for 2s; once every 6s",
        effects: [
          { what: "Shield Factor", values: [720, 960, 1200, 1680, 2400] }
        ]
      },
      "4": {
        name: "Backfire",
        type: "Passive",
        myLevel: 2,
        notes: "20% chance on counterattack to inflict Burning for 3s, ticking each second; once every 6s per target",
        effects: [
          { what: "Additional DMG Factor", values: [400, 500, 600, 850, 1200] }
        ]
      },
      "U": {
        name: "Bonedusting Inferno",
        type: "Awakened",
        subtype: "Passive",
        buffs: null,
        newSkill: true,
        myLevel: null,
        notes: "a new passive rather than a buff on an existing skill; pairs with his own Fire & Brimstone HP Reduction",
        toFill: true,
        effects: [
          { what: "Increase continuous DMG dealt to Troops with the HP Reduction debuff by", unit: "%", values: [15], note: "current-level value only, curve not shown" }
        ]
      }
    }
  },

  "Elfwine": {
    name: "Aelfwine",
    warband: "Peace Ambassador",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 352810,
    soldierLimit: 195500,
    stars: "4 of 6",
    myLevels: [5,4,2,1,null],
    source: "game screenshots IMG_2031-2036",
    skills: {
      "1": {
        name: "Sustained Battle",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        notes: "single-target hit that heals lightly-wounded soldiers for a share of the DMG dealt",
        effects: [
          { what: "Direct DMG", values: [2100, 2800, 3500, 4900, 7000] },
          { what: "DMG conversion rate", unit: "%", values: [20, 25, 30, 35, 40] }
        ]
      },
      "2": {
        name: "Prayer",
        type: "Passive",
        myLevel: 4,
        effects: [
          { what: "Increase healing received by", unit: "%", values: [12, 15, 19, 26, 38] }
        ]
      },
      "3": {
        name: "Blessing",
        type: "Passive",
        myLevel: 2,
        notes: "buffs the Commander and Lieutenant Heroes of the Troop",
        effects: [
          { what: "Increase EXP Troops earn by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Increase Max HP by", unit: "%", values: [4, 5, 6, 8, 12] }
        ]
      },
      "4": {
        name: "Strong Support",
        type: "Passive",
        myLevel: 1,
        notes: "fires each time the Troop receives healing; lasts 3s, once every 6s",
        effects: [
          { what: "Increase DEF by", unit: "%", values: [15, 20, 24, 34, 48] }
        ]
      },
      "U": {
        name: "Valhalla's Grace",
        type: "Awakened",
        buffs: "Sustained Battle",
        myLevel: null,
        effects: [
          { what: "Direct DMG before awakening", values: [7000] },
          { what: "Direct DMG after awakening", values: [8400] },
          { what: "DMG conversion rate before awakening", unit: "%", values: [40] },
          { what: "DMG conversion rate after awakening", unit: "%", values: [48] }
        ]
      }
    }
  },

  "Elina": {
    name: "Elena",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, elena/index.html",
    skills: {
      "1": {
        name: "Battle Mastery",
        type: "Burst",
        notes: "Heal 2 random allied Troops within a cone area in front of you (Heal Factor 700). Deal DMG to up to 2 enemy Troops within that area (DMG Factor 1,300).",
        effects: [
          { what: "Healing Factor", values: [700, 900, 1100, 1500, 2200] },
          { what: "DMG Factor", values: [1300, 1700, 2100, 3000, 4200] }
        ]
      },
      "2": {
        name: "Gathering Expert",
        type: "Passive",
        notes: "Increase the Stone Gathering Speed of your Troop by 10%, and their Food, Lumber, Iron Gathering Speed by 8%.",
        effects: [
          { what: "Increase Stone gathering SPD by", unit: "%", values: [10, 13, 16, 22, 30] },
          { what: "Increase Food, Lumber & lron gathering SPD by", unit: "%", values: [8, 10, 12, 16, 20] }
        ]
      },
      "3": {
        name: "Robust Vitality",
        type: "Passive",
        notes: "Increase HP of your Troop by 4% and their Carrying Capacity by 12%.",
        effects: [
          { what: "Increase HP by", unit: "%", values: [4, 5, 6, 8.5, 12] },
          { what: "Troop's Carrying Capacity", unit: "%", values: [12, 15, 20, 25, 35] }
        ]
      },
      "4": {
        name: "Military Exercise",
        type: "Passive",
        notes: "Increase Soldier Limit of your Troop by 2.5%.",
        effects: [
          { what: "Increase Soldier Limit by", unit: "%", values: [2.5, 3, 4, 6, 8] }
        ]
      },
      "U": {
        name: "Keen Aptitude",
        type: "Awakened",
        subtype: "Passive",
        notes: "Receive an extra 10% resources when you complete a gathering.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Farad": {
    name: "Farhad",
    warband: "Whirling Thunder",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 335630,
    soldierLimit: 197800,
    stars: "5 of 6",
    myLevels: [3,2,3,2,null],
    source: "game screenshots IMG_1969-1974",
    skills: {
      "1": {
        name: "Deadly Edge",
        type: "Burst",
        rageCost: 1000,
        myLevel: 3,
        notes: "hits up to 3 targets in a rectangle; DMG reduced 15% per extra target; bleed lasts 2s",
        effects: [
          { what: "DMG Factor", values: [3600, 4800, 6000, 8500, 12000] },
          { what: "Bleed DMG Factor", values: [450, 600, 750, 1050, 1500] }
        ]
      },
      "2": {
        name: "Crippling Strike",
        type: "Passive",
        myLevel: 2,
        notes: "30% chance on basic attack; slow lasts 2s",
        effects: [
          { what: "Reduce MOV SPD by", unit: "%", values: [6, 8, 10, 14, 20] },
          { what: "Reduce Rage", values: [14, 19, 23, 32, 50] }
        ]
      },
      "3": {
        name: "Warrior's Will",
        type: "Passive",
        myLevel: 3,
        notes: "requires Troop of Axethrowers only",
        effects: [
          { what: "Reduce DMG of counterattacks by", unit: "%", values: [7.5, 10, 12.5, 17.5, 25] },
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [5.5, 7.5, 9.5, 13, 18.5] }
        ]
      },
      "4": {
        name: "Piercing Blades",
        type: "Passive",
        myLevel: 2,
        notes: "on attack, chance to ignore target's Shield and Guard effects",
        effects: [
          { what: "Chance", unit: "%", values: [20, 26, 33, 46, 65] }
        ]
      },
      "U": {
        name: "Returning Strikes",
        type: "Awakened",
        buffs: "Deadly Edge",
        myLevel: null,
        toFill: true,
        effects: [
          { what: "DMG Factor after awakening", values: [12500], note: "before awakening 12000; rest of the After Awakening block needs the tooltip scrolled" }
        ]
      }
    }
  },

  "Freya": {
    name: "Freyja",
    warband: "War Song Siren",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels",
    source: "game screenshots IMG_1975, 1977-1981",
    skills: {
      "1": {
        name: "Force and Finesse",
        type: "Burst",
        rageCost: 1000,
        notes: "second hit scales off the hero's own DEF and ignores part of the target's DEF",
        effects: [
          { what: "DMG Factor", values: [3000, 4000, 5100, 7100, 10500] },
          { what: "DEF Factor", values: [1200, 1600, 2000, 2800, 4000] },
          { what: "Ignore DEF", unit: "%", values: [6, 8, 10, 14, 20] }
        ]
      },
      "2": {
        name: "Rose's Allure",
        type: "Passive",
        notes: "only against damage from a unit led by a male hero; excludes Blackforged",
        effects: [
          { what: "Reduce DMG received by", unit: "%", values: [5, 6, 8, 11, 15] }
        ]
      },
      "3": {
        name: "Rose Ward",
        type: "Passive",
        notes: "on receiving damage; reflect capped as a share of Troop DEF; triggers once every 3s",
        effects: [
          { what: "Reduce DMG by", unit: "%", values: [4, 5, 6, 9, 12] },
          { what: "Reflected DMG", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Reflected DMG defence limit", unit: "%", values: [45, 60, 75, 105, 150] }
        ]
      },
      "4": {
        name: "Rose Thorn",
        type: "Passive",
        notes: "healing reduction lasts 4s on counterattack; triggers once every 10s",
        effects: [
          { what: "Increase counterattack DMG by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Reduce healing by", unit: "%", values: [14, 19, 24, 33, 47] }
        ]
      },
      "U": {
        name: "Call of Valhalla",
        type: "Awakened",
        subtype: "Passive",
        buffs: null,
        notes: "resurrects a share of Troop size on defeat; perished soldiers' souls deal damage off base ATK",
        toFill: true,
        effects: [
          { what: "Resurrect share of Troop size", unit: "%", values: [5], note: "current-level value only, curve not shown" },
          { what: "Soul DMG as share of base ATK", unit: "%", values: [30], note: "current-level value only, curve not shown" }
        ]
      }
    }
  },

  "Ganglot": {
    name: "Ganglot",
    warband: "Oath of Decay",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1, so slot levels are display defaults, not training levels",
    source: "game screenshots supplied 2026-09-08 (all five slots)",
    skills: {
      "1": {
        name: "Dragon's Descent",
        type: "Burst",
        rageCost: 1000,
        notes: "Death Drain siphons HP from up to 6 enemies in a circle around her and deals DMG; DMG to each target drops 5% per extra target hit. Also summons a Bone Dragon with 5x the siphoned HP for 4s - DMG dealt to Blackforged is not converted into Bone Dragon HP. The Bone Dragon inherits 40% of Ganglot's Troop's ATK and 50% of its DEF, and each second hits up to 2 targets in a frontal cone. Summoned units cannot be controlled by players.",
        effects: [
          { what: "DMG Factor", values: [4200, null, null, null, 14000], note: "level 1 read from the skill tooltip and level 5 from the awakened skill's Before Awakening block; the Upgrade Preview line was not captured, so the middle three levels are unknown" },
          { what: "HP siphoned from up to 6 enemies", values: [null], note: "Death Drain - the tooltip gives no factor for the amount siphoned, but it heals and it is what the Bone Dragon's HP is built from" },
          { what: "Bone Dragon HP, multiple of HP siphoned", values: [5], note: "fixed, not on the upgrade curve" },
          { what: "Bone Dragon DMG Factor", values: [360, null, null, null, 1200], note: "levels 1 and 5 only, same reason" },
          { what: "Bone Dragon inherited ATK", unit: "%", values: [40], note: "fixed, not on the upgrade curve" },
          { what: "Bone Dragon inherited DEF", unit: "%", values: [50], note: "fixed, not on the upgrade curve" }
        ]
      },
      "2": {
        name: "Merciless Pursuit",
        type: "Passive",
        notes: "applies to every summon in Ganglot's Troop, against units carrying the \"HP Reduction\" debuff",
        effects: [
          { what: "Increase DMG dealt by", unit: "%", values: [15, 20, 25, 35, 50] }
        ]
      },
      "3": {
        name: "Soul's Will",
        type: "Passive",
        notes: "requires a Troop of Berserkers only; fires whenever a nearby Troop or summon dies, leaves the field, or an ally leaves combat. Lasts 5s, stacks up to 3 times, and lifts both Ganglot and her Bone Dragon.",
        effects: [
          { what: "Increase DMG dealt by", unit: "%", values: [1, 2, 3, 4, 5] }
        ]
      },
      "4": {
        name: "Cursed Echo",
        type: "Passive",
        notes: "requires a Troop of Berserkers only; fires whenever Ganglot's Troop OR her summons inflict a debuff on a target - and her own Merciless Pursuit keys off the HP Reduction debuff, so the two feed each other",
        effects: [
          { what: "Healing Factor", values: [450, 600, 750, 1050, 1500] }
        ]
      },
      "U": {
        name: "Breath of Decay",
        type: "Awakened",
        buffs: "Dragon's Descent",
        incomplete: "After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] },
          { what: "Bone Dragon DMG Factor before awakening", values: [1200] }
        ]
      }
    }
  },

  "Held": {
    name: "Helda",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, helda/index.html",
    skills: {
      "1": {
        name: "Shadowmoon Rending",
        type: "Burst",
        notes: "Deal DMG to target (DMG Factor 3,600) and reduce healing target receives by 12% for 3 seconds.",
        effects: [
          { what: "DMG Factor", values: [3600, 4800, 6000, 8400, 12000] },
          { what: "Reduce healing by", unit: "%", values: [12, 15, 20, 28, 40] }
        ]
      },
      "2": {
        name: "Shadowmoon Massacre",
        type: "Passive",
        notes: "20% chance to deal additional DMG to the enemy (DMG Factor 940 when attacking a settlement",
        effects: [
          { what: "DMG Factor", values: [940, 1250, 1560, 2190, 3120] }
        ]
      },
      "3": {
        name: "Wild Hunt",
        type: "Passive",
        notes: "Increase ATK of Axethrower-type soldiers by 9% and their DEF by 3% when outside of Tribe territory.",
        effects: [
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Increase DEF of Axethrower-type soldiers by", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "4": {
        name: "Curse of the Blood Moon",
        type: "Passive",
        notes: "Increase Skill DMG by 1% every second, up to 11%. This buff is reset when the Lieutenant unleashes their Burst.",
        effects: [
          { what: "Skill DMG", unit: "%", values: [1, 1.5, 2, 2.5, 3.5] },
          { what: "Increase up to", unit: "%", values: [11, 16.5, 22, 27.5, 38.5] }
        ]
      },
      "U": {
        name: "Valkyrie's Rage",
        type: "Awakened",
        subtype: "Passive",
        notes: "Deal DMG to target (DMG Factor 13,200) and reduce healing target receives by 50% for 5 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [13200] }
        ]
      }
    }
  },

  "Ilia": {
    name: "Elia",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, elia/index.html",
    skills: {
      "1": {
        name: "Fountain of Light",
        type: "Burst",
        notes: "Heal your Troop and up to 3 nearby lightly-wounded allied Troops (Heal Factor 600 ), and remove debuffs from the healed Troops.",
        effects: [
          { what: "Healing Factor", values: [600, 700, 900, 1200, 1700] }
        ]
      },
      "2": {
        name: "Homing Arrow",
        type: "Passive",
        notes: "If all soldiers in this Hero's unit are Axethrower-type, increase normal attack DMG by 1.2% and increase MOV SPD by2.1%.",
        effects: [
          { what: "Increase DMG of Normal Attacks by", unit: "%", values: [1.2, 1.4, 1.8, 2.6, 3.6] },
          { what: "Increase MOV SPD by", unit: "%", values: [2.1, 2.7, 3.3, 4.5, 6.3] }
        ]
      },
      "3": {
        name: "Penny Pincher",
        type: "Passive",
        notes: "Gain 10 Rage upon receiving skill DMG. There is also a 4% chance to inflict Silence on the skill caster for 3 seconds. This effect can only trigger once every 6 seconds.",
        effects: [
          { what: "Generate Rage", values: [10, 15, 20, 25, 35] },
          { what: "Trigger Rate", unit: "%", values: [4, 8, 12, 16, 20] }
        ]
      },
      "4": {
        name: "Field Expertise",
        type: "Passive",
        notes: "While out in the open, increase ATK of your Troop and up to 2 nearby Troops by 1% and increase their DEF by 1%.",
        effects: [
          { what: "Increase ATK by", unit: "%", values: [1, 1.2, 1.6, 1.8, 3] },
          { what: "Increase DEF by", unit: "%", values: [1, 1.2, 1.6, 1.8, 3] }
        ]
      }
    }
  },

  "Irin": {
    name: "Erin",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, erin/index.html",
    skills: {
      "1": {
        name: "Wind Slash",
        type: "Burst",
        notes: "Deal DMG to the target (DMG Factor 2,400) with a 50% chance to deal additional DMG on the next attack (DMC Factor 1,350).",
        effects: [
          { what: "Direct DMG Factor", values: [2400, 3200, 4000, 5600, 8000] },
          { what: "Additional DMG Factor", values: [1350, 1800, 2250, 3150, 4500] }
        ]
      },
      "2": {
        name: "Identify Weakness",
        type: "Passive",
        notes: "Your Troop's attacks will ignore 7.5% of the target's DEF.",
        effects: [
          { what: "Ignore target's DEF", unit: "%", values: [7.5, 10, 12, 17, 24] }
        ]
      },
      "3": {
        name: "Hunting Talent",
        type: "Passive",
        notes: "Increase MOV SPD of your Cavalry-type solders by 3% and increase DMG dealt to Axethrower-type soldiers by 2.5%.",
        effects: [
          { what: "Increase MOV SPD of Cavalry-type soldiers by", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Increase DMG dealt by", unit: "%", values: [2.5, 3, 3.5, 5, 7.5] }
        ]
      },
      "4": {
        name: "Swift Maneuver",
        type: "Passive",
        notes: "Normal attacks from your Troop have a 10% chance to generate 30 Rage.",
        effects: [
          { what: "Generate Rage", values: [30, 40, 50, 70, 100] }
        ]
      },
      "U": {
        name: "Njord's Wrath",
        type: "Awakened",
        subtype: "Passive",
        notes: "Deal DMG to the target (DMG Factor 8,000) and deal additional DMG on the next attack (DMG Factor 4,500).",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [8000] },
          { what: "DMG Factor before awakening (2)", values: [4500] }
        ]
      }
    }
  },

  "Iris": {
    name: "Iris",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, iris/amp/index.html",
    skills: {
      "1": {
        name: "Withering Bloom",
        type: "Burst",
        notes: "Heal the lightly-wounded soldiers in this Hero’s Troop (Heal Factor 3,900). Healing cannot exceed 15% of remaining HP in Iris’s Troop.",
        effects: [
          { what: "Healing Factor", values: [3900, 5200, 6500, 9100, 13000] }
        ]
      },
      "2": {
        name: "Herbmastery",
        type: "Passive",
        notes: "Increase healing this Hero’s Troop receives by 3.5%. Increase Medicine your Infirmary produces each day by 2.4%. Increase Infirmary’s Medicine storage limit by 3%.",
        effects: [
          { what: "Increase healing received by", unit: "%", values: [3.5, 4.5, 6, 8, 11.5] },
          { what: "Medicine Production", unit: "%", values: [2.4, 3.2, 4, 5.6, 8] },
          { what: "Medicine Storage Limit", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Script of Runes",
        type: "Passive",
        notes: "6% chance each round to dispel 1 random debuff from this Hero’s Troop while it is in garrison. If there are no debuffs to dispell, instead heal this Hero’s Troop (Heal Factor 450).",
        effects: [
          { what: "Trigger Rate", unit: "%", values: [6, 8, 10, 14, 20] },
          { what: "Healing Factor", values: [450, 600, 750, 1050, 1500] }
        ]
      },
      "4": {
        name: "Ward of Nature",
        type: "Passive",
        notes: "Increase the HP of the Beast Riders in this Hero’s Troop by 3.5%, and their DEF by 4%.",
        effects: [
          { what: "Beast Rider Troop HP Boost", unit: "%", values: [3.5, 4.5, 5.5, 8, 11] },
          { what: "Increase DEF of Beast Rider-type soldiers by", unit: "%", values: [4, 5, 7, 9.5, 13] }
        ]
      },
      "U": {
        name: "The Great Return",
        type: "Awakened",
        subtype: "Passive",
        notes: "Heal the lightly-wounded soldiers in this Hero’s Troop (Heal Factor 15,000). Healing cannot exceed 20% of remaining HP in Iris’s Troop. Also reduce DMG this Hero’s Troop receives by 20% for 3 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "Heal Factor before awakening", values: [15000] }
        ]
      }
    }
  },

  "Kaira": {
    name: "Kaira",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, kaira/amp/index.html",
    skills: {
      "1": {
        name: "Shrouding Sandstorm",
        type: "Burst",
        notes: "Summon a Thunderstorm to deal DMG to the target (DMG Factor 2,850), and inflict blindness to reduce DMG target deals by 6% for 2 seconds.",
        effects: [
          { what: "DMG Factor", values: [2850, 3800, 4750, 6650, 9500] },
          { what: "Reduce DMG by", unit: "%", values: [6, 8, 10, 14, 20] }
        ]
      },
      "2": {
        name: "Blizzard Edges",
        type: "Passive",
        notes: "Each normal attack this Hero’s Troop does has a 6% chance to extend the duration of a random debuff on the target by 1 seconds. This effect can only trigger once every 6 seconds.",
        effects: [
          { what: "Trigger Rate", unit: "%", values: [6, 8, 10, 14, 20] },
          { what: "Duration", values: [1, 1, 2, 2, 3] }
        ]
      },
      "3": {
        name: "Rainswept Resolve",
        type: "Passive",
        notes: "When this Hero’s Troop is inflicted with a debuff, there is a 10% chance to inflict the same debuff on the source of this debuff.",
        effects: [
          { what: "Chance", unit: "%", values: [10, 12, 14, 16, 20] }
        ]
      },
      "4": {
        name: "Tempestuous Charge",
        type: "Passive",
        notes: "increase ATK of Axethrower soldiers in this Hero’s Troop by 9%.",
        effects: [
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "U": {
        name: "Stormy Judgment",
        type: "Awakened",
        subtype: "Passive",
        notes: "Summon Storm deals damage to the target (DMG Factor 11,500), and blinds the target, reducing DMG 30% for 2 seconds; simultaneously removes a random beneficial Buff from the target.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [11500] }
        ]
      }
    }
  },

  "Kiana": {
    name: "Kiana",
    warband: "Frost Speaker",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 323410,
    soldierLimit: 197800,
    stars: "5 of 6",
    myLevels: [5,1,1,2,null],
    source: "game screenshots IMG_2043-2048",
    skills: {
      "1": {
        name: "Judgment of Frost",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        notes: "ice meteor hitting up to 2 targets in the area (DMG Factor 5,800 at current level), then frostbite every 2s for 6s dealing a share of the target's current HP, capped as a share of the current HP of Kiana's Troops; reduced when Kiana is a Rally unit",
        effects: [
          { what: "DMG Factor", values: [5800], note: "current-level value only, curve not shown in this tooltip" },
          { what: "DMG Ratio, share of target's current HP", unit: "%", values: [0.4, 0.5, 0.7, 1, 1.5] },
          { what: "Upper Limit, share of own Troop's current HP", unit: "%", values: [0.8, 1, 1.4, 2, 3] }
        ]
      },
      "2": {
        name: "Lifestream",
        type: "Passive",
        myLevel: 1,
        notes: "heals Kiana when nearby allies unleash their Burst; once every 6s",
        effects: [
          { what: "Healing Factor", values: [540, 720, 900, 1260, 1800] }
        ]
      },
      "3": {
        name: "Succor of Frost",
        type: "Passive",
        myLevel: 1,
        notes: "When the HP of surrounding allied Troops is below 10%, Kiana gains Frost Shield (Shield Factor 1,800). This effect can be triggered up to 1 time every 10 seconds..",
        filledFromGuide: true,
        note: "the game screenshot for this slot was never taken; the name and numbers are the one skill of Kiana's the guide lists that the screenshots do not, so it is this slot by elimination",
        effects: [
          { what: "Shield Factor", values: [1800, 2400, 3000, 4200, 6000] }
        ]
      },
      "4": {
        name: "Oath of Frost",
        type: "Passive",
        myLevel: 2,
        effects: [
          { what: "Increase healing received by", unit: "%", values: [6, 7, 9, 13.5, 19] },
          { what: "Increase HP of Beast Rider-type soldiers by", unit: "%", values: [4.5, 6, 7.5, 10.5, 15] }
        ]
      },
      "U": {
        name: "Blessings of the Land",
        type: "Awakened",
        subtype: "Passive",
        buffs: null,
        newSkill: true,
        myLevel: null,
        notes: "a new passive rather than a buff on an existing skill; heals up to 3 nearby allies when Kiana unleashes her Burst",
        toFill: true,
        effects: [
          { what: "Heal Factor", values: [1000], note: "current-level value only, curve not shown" }
        ]
      }
    }
  },

  "Kus": {
    name: "Kalthas",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, kalthas/index.html",
    skills: {
      "1": {
        name: "Scalesplitting Strike",
        type: "Burst",
        notes: "A charged strike that deals a large amount of DMG to the target (DMG Factor 2,700) , and an additional 5% DMG for each stack of Vulnerability inflicted on the target by Kalthas.",
        effects: [
          { what: "DMG Factor", values: [2700, 3600, 4500, 6300, 9000] }
        ]
      },
      "2": {
        name: "Blackscale Revival",
        type: "Passive",
        notes: "Heal lightly-wounded soldiers for 3 % of DMG you deal.",
        effects: [
          { what: "DMG conversion rate", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Shadow Scale Ward",
        type: "Passive",
        notes: "Reduce DMG your normal attacks deal by 70% for the first 5 seconds upon entering battle. At the same time, there is a 10% chance to become immune to DMG dealt by the target For the next 5 seconds, increase DMG your normal attacks deal each second in the following amount: 35%, 70%, 105%, 140%, 180%.",
        effects: [
          { what: "Chance", unit: "%", values: [10, 12, 14, 16, 20] },
          { what: "Increase DMG of Normal Attacks by", unit: "%", values: [35, 37, 41, 49, 59] }
        ]
      },
      "4": {
        name: "Breaker's Mark",
        type: "Passive",
        notes: "Normal attacks have a 10% chance to inflict 1 stack of Vulnerability on hit, reducing the afflicted target's DEF by 2.5% for 5 seconds. If the target has 5 stacks of Vulnerability inflicted by Kalthas, your next attack reduces their DEF by 15% for 5 seconds and removes all stacks of Vulnerability.",
        effects: [
          { what: "Reduce DEF by", unit: "%", values: [2.5, 3, 4, 5.5, 8] },
          { what: "Reduce DEF by", unit: "%", values: [15, 18, 24, 33, 48] }
        ]
      },
      "U": {
        name: "Deceptive Force",
        type: "Awakened",
        subtype: "Passive",
        notes: "Increase your ATK by 40% for 3 seconds after unleashing a Burst.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Linda": {
    name: "Linda",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, linda/index.html",
    skills: {
      "1": {
        name: "Seize Advantage",
        type: "Burst",
        notes: "Deal a large amount of DMG to the enemy (DMG Factor 1,200), and increase ATK of comrades by 8% for 3 seconds.",
        effects: [
          { what: "DMG Factor", values: [1200, 1600, 2000, 2800, 4000] },
          { what: "Increase ATK by", unit: "%", values: [8, 9, 12, 17, 24] }
        ]
      },
      "2": {
        name: "Flanking Shot",
        type: "Passive",
        notes: "Increase ATK of your Axethrower-type soldiers by 2.5% and their MOV SPD by 2.5%.",
        effects: [
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [2.5, 3.5, 4.5, 6.5, 9] },
          { what: "Increase MOV SPD of Axethrower-type soldiers by", unit: "%", values: [2.5, null, 4.5, 6.5, 9] }
        ]
      },
      "3": {
        name: "Weakness Break",
        type: "Passive",
        notes: "Normal attacks from your Troops have a 20% chance to heal lightly-wounded soliders of comrades(Heal Factor 360). Increase Healing received by 5% if Erin is in the Troop.",
        effects: [
          { what: "Additional DMG Factor", values: [750, 1000, 1250, 1750, 2500] }
        ]
      },
      "4": {
        name: "Counterstrike",
        type: "Passive",
        notes: "Increase ATK of your Axethrower-type soldiers by 5.5% and their MOV SPD by 3% if your Troop's HP is less than 50%.",
        effects: [
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [5.5, 7.5, 9, 13, 18] },
          { what: "Increase MOV SPD of Axethrower-type soldiers by", unit: "%", values: [3, 3.5, 4.5, 6.5, 9] }
        ]
      },
      "U": {
        name: "Armor Break",
        type: "Awakened",
        subtype: "Passive",
        notes: "Increase DMG your Troop deals to Berserker-type soldiers by 10%.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Morgan Lefe": {
    name: "Morgan le Fay",
    warband: "Evernight Witch",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels. In-game spelling is 'Morgan le Fay'.",
    source: "game screenshots IMG_2010-2016",
    skills: {
      "1": {
        name: "Soul Chain",
        type: "Burst",
        rageCost: 1000,
        notes: "single hit on the main target, then applies Chain to up to 3 targets around it; chained targets share a share of the DMG dealt to the main target for 3s",
        effects: [
          { what: "DMG Factor", values: [4500, 6000, 7500, 10500, 15000] },
          { what: "Chain DMG", unit: "%", values: [5, 6, 8, 11, 15] }
        ]
      },
      "2": {
        name: "Shadow Bind",
        type: "Passive",
        notes: "fires when this Hero's Troop is directly hit by an enemy's active attack; Bind lasts 3s and stops the attacker moving",
        effects: [
          { what: "Trigger Rate", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Increase DMG enemies receive by", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Void Absorption",
        type: "Passive",
        notes: "converts a share of DMG dealt into healing for lightly-wounded Troops",
        effects: [
          { what: "DMG conversion rate", unit: "%", values: [5, 6, 8, 11, 16] }
        ]
      },
      "4": {
        name: "Dark Power",
        type: "Passive",
        notes: "requires a Troop of Axethrowers only",
        effects: [
          { what: "Ignore target's DEF", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Critical Rate increase", unit: "%", values: [1, 2, 3, 4, 6] }
        ]
      },
      "U": {
        name: "Shadow Devour",
        type: "Awakened",
        buffs: "Soul Chain",
        incomplete: "rest of the After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [15000] },
          { what: "DMG Factor after awakening", values: [16400] },
          { what: "Chain DMG before awakening", unit: "%", values: [15] },
          { what: "Chain DMG after awakening", unit: "%", values: [20] }
        ]
      }
    }
  },

  "Odaunaga": {
    name: "Oda Nobunaga",
    warband: "Demon King of the Sixth Heaven",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels",
    source: "game screenshots IMG_1982-1987",
    skills: {
      "1": {
        name: "Breakthrough Stratagem",
        type: "Burst",
        rageCost: 1000,
        notes: "window lasts 2s; ignores 50% of target DEF when it fires; Bursts excluded from the ignore effect; higher trigger rate for all-Cavalry troop",
        effects: [
          { what: "DMG Factor", values: [5040, 6720, 8400, 11760, 16800] },
          { what: "Trigger Rate", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Cavalry Trigger Rate", unit: "%", values: [6, 8, 10, 14, 20] }
        ]
      },
      "2": {
        name: "Iron Cavalry Might",
        type: "Passive",
        notes: "in a Rally, all-Cavalry troop only",
        effects: [
          { what: "Increase ATK by", unit: "%", values: [5, 7, 8, 12, 17] },
          { what: "Cavalry Critical Rate increase", unit: "%", values: [1, 2, 2.5, 3.5, 5] }
        ]
      },
      "3": {
        name: "Bloody Backlash",
        type: "Passive",
        notes: "sacrifices 10% own MOV SPD; 35% chance on receiving counterattacks",
        effects: [
          { what: "DMG Factor", values: [450, 600, 750, 1050, 1500] }
        ]
      },
      "4": {
        name: "Injury to Healing",
        type: "Passive",
        notes: "in a Rally converts damage dealt into healing for lightly-wounded troops; outside a Rally 25% chance on receiving damage",
        effects: [
          { what: "Heal Ratio", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Healing Factor", values: [360, 480, 600, 840, 1200] }
        ]
      },
      "U": {
        name: "Fight to Rule",
        type: "Awakened",
        buffs: "Breakthrough Stratagem",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [16800] },
          { what: "DMG Factor after awakening", values: [19000] },
          { what: "Trigger Rate before awakening", unit: "%", values: [10], note: "20% all-Cavalry, 2s window" },
          { what: "Trigger Rate after awakening", unit: "%", values: [15], note: "4s window; rest of the After Awakening block needs the tooltip scrolled" }
        ]
      }
    }
  },

  "Petra": {
    name: "Petra",
    warband: "Crystalline Guardian",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels",
    source: "game screenshots IMG_2017-2023",
    skills: {
      "1": {
        name: "Counterattack Overture",
        type: "Burst",
        rageCost: 1000,
        notes: "single hit, then a self counterattack-damage buff for 5s",
        effects: [
          { what: "DMG Factor", values: [4800, 6400, 8000, 11200, 16000] },
          { what: "Increase counterattack DMG by", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "2": {
        name: "Dual-Sided Command",
        type: "Passive",
        notes: "seat-dependent. As Commander: when the Troop's damage per second exceeds 13,500,000, additionally reduce the damage dealt by all targets damaged within that second, for 2s. As Lieutenant: at the same DPS threshold, gains one heal.",
        effects: [
          { what: "Reduce DMG received by", unit: "%", values: [2, 3, 4, 6, 8], note: "Commander seat" },
          { what: "Healing Factor", values: [720, 960, 1200, 1680, 2400], note: "Lieutenant seat" }
        ]
      },
      "3": {
        name: "Iron Wall Formation",
        type: "Passive",
        notes: "buffs Berserker-type soldiers",
        effects: [
          { what: "Increase HP of Berserker-type soldiers by", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Berserker DMG increased by", unit: "%", values: [0.5, 1, 2, 3, 4] }
        ]
      },
      "4": {
        name: "Blood Resonance",
        type: "Passive",
        pairsWith: "Karl",
        notes: "bonus DMG against enemies carrying debuffs; the higher figure and the damage reduction apply only when deployed with Karl",
        effects: [
          { what: "Increase DMG dealt by", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Additional DMG with Karl", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Reduce DMG received by Berserkers by", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "U": {
        name: "Tidal Counterforce",
        type: "Awakened",
        buffs: "Counterattack Overture",
        notes: "after awakening, launching a counterattack also has a 50% chance to reduce the target's Rage by 30",
        effects: [
          { what: "DMG Factor before awakening", values: [16000] },
          { what: "DMG Factor after awakening", values: [17000] },
          { what: "Increase counterattack DMG before awakening", unit: "%", values: [30] },
          { what: "Increase counterattack DMG after awakening", unit: "%", values: [50] }
        ]
      }
    }
  },

  "Reald": {
    name: "Reid",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, reid/amp/index.html",
    skills: {
      "1": {
        name: "Thor’s Rage",
        type: "Burst",
        notes: "Heal yourself each second for the next 4 seconds (Heal Factor 750), and reduce ATK of 3 target Troops within a cone area in front of you by 9% for 2 seconds. Reduce ATK by a further 4.5% for Cavalry-type soldiers.",
        effects: [
          { what: "Healing Factor", values: [750, 1000, 1250, 1750, 2500] },
          { what: "Reduce ATK by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Reduce ATK of Enemy Cavalry-type soldiers by", unit: "%", values: [4.5, 6, 7.59, 10.5, 15] }
        ]
      },
      "2": {
        name: "Shieldbearer",
        type: "Passive",
        notes: "Increase HP of your Berserker-type solders by 9%, and their DEF by 3%.",
        effects: [
          { what: "Increase HP of Berserker-type soldiers by", unit: "%", values: [9, 12, 15, null] },
          { what: "Increase DEF of Berserker-type soldiers by", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Heart of the Fortress",
        type: "Passive",
        notes: "Reduce DMG your Troop receives by 4% when they are in Garrison. There is also a 10% chance to heal when counterattacking (Heal Factor 700). This effect can only trigger once every 6 seconds.",
        effects: [
          { what: "Reduce DMG Garrison Troops receive by", unit: "%", values: [4, 5, 6, 9, 12] },
          { what: "Healing Factor", values: [700, 900, 1100, 1600, 2200] }
        ]
      },
      "4": {
        name: "Gift of the Predator",
        type: "Passive",
        notes: "Reduce normal attack DMG your Troop receives by 9%. Increase your counterattack DMG by 7% when in Garrison.",
        effects: [
          { what: "Reduce normal attack DMG received by", unit: "%", values: [9, 12, 15, null] },
          { what: "Increase counterattack DMG from Garrison Troops by", unit: "%", values: [7, 9, 11, 15, 22] }
        ]
      },
      "U": {
        name: "Valkyrie’s Rage",
        type: "Awakened",
        subtype: "Passive",
        notes: "Each time you use a skill, increase DMG your Troop and 2 other nearby Troops deal by 15% for 2 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Reinhardt": {
    name: "Reinhardt",
    warband: "Blade of Justice",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 39,
    power: 99440,
    soldierLimit: 136850,
    stars: "1 of 6",
    myLevels: [2,null,null,null,null],
    note: "only 1 star, so slots 2 and 3 are still locked - slot 2 unlocks at 2-star, slot 3 at 3-star. Their upgrade curves are still readable from the tooltip.",
    source: "game screenshots IMG_2049-2055",
    skills: {
      "1": {
        name: "Battlemania",
        type: "Burst",
        rageCost: 1000,
        myLevel: 2,
        notes: "high DMG to the target Troop, then one of three buffs at random on this Hero's Troop for 5s - Bloodlust (normal attacks heal lightly-wounded soldiers, Heal Factor 600 at level 2), Fervor (Rage Buildup +16% at level 2) or Breakthrough (normal attacks ignore 9.6% of target's DEF at level 2). Each buff caps at 1 stack; re-granting refreshes the duration.",
        effects: [
          { what: "DMG Factor", values: [2850, 3800, 4750, 6650, 9500] },
          { what: "Bloodlust Heal Factor", values: [600], note: "level-2 value; level-5 value is 1500 per the awakened tooltip" },
          { what: "Fervor, increase Rage Buildup by", unit: "%", values: [16], note: "level-2 value; level-5 value is 40%" },
          { what: "Breakthrough, ignore target's DEF", unit: "%", values: [9.6], note: "level-2 value; level-5 value is 24%" }
        ]
      },
      "2": {
        name: "Forceful Strike",
        type: "Passive",
        myLevel: null,
        locked: "unlocks after promoting the Hero to 2-star",
        effects: [
          { what: "Increase DMG dealt to Blackforged by", unit: "%", values: [15, 20, 25, 35, 50] }
        ]
      },
      "3": {
        name: "Battle Fervor",
        type: "Passive",
        myLevel: null,
        locked: "unlocks after promoting the Hero to 3-star",
        notes: "scales per buff currently on this Hero's Troop, up to a cap",
        effects: [
          { what: "Increase MOV SPD by, per buff", unit: "%", values: [1.5, 2, 2.5, 3.5, 5] },
          { what: "Increase ATK by, per buff", unit: "%", values: [1.5, 2, 2.5, 3.5, 5] },
          { what: "MOV SPD Limit", unit: "%", values: [7.5, 10, 12.5, 17.5, 25] },
          { what: "ATK Limit", unit: "%", values: [7.5, 10, 12.5, 17.5, 25] }
        ]
      },
      "4": {
        name: "Seize the Initiative",
        type: "Passive",
        myLevel: null,
        notes: "chance on each normal attack by this Hero's Troop to grant one of the same three buffs at random for 5s - Bloodlust, Fervor (Rage Buildup +12% at level 1) or Breakthrough (ignore 7.2% of target's DEF at level 1). Each buff caps at 1 stack; re-granting refreshes the duration.",
        effects: [
          { what: "Trigger Rate", unit: "%", values: [6, 8, 10, 14, 20] },
          { what: "Bloodlust Healing Factor", values: [450, 600, 750, 1050, 1500] },
          { what: "Fervor, increase Rage Buildup by", unit: "%", values: [12], note: "level-1 value only, curve not shown" },
          { what: "Breakthrough, ignore target's DEF", unit: "%", values: [7.2], note: "level-1 value only, curve not shown" }
        ]
      },
      "U": {
        name: "Peerless Technique",
        type: "Awakened",
        buffs: "Battlemania",
        myLevel: null,
        incomplete: "After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [9500] },
          { what: "Bloodlust Heal Factor before awakening", values: [1500] },
          { what: "Fervor, increase Rage Buildup by, before awakening", unit: "%", values: [40] },
          { what: "Breakthrough, ignore target's DEF, before awakening", unit: "%", values: [24] }
        ]
      }
    }
  },

  "Rex": {
    name: "Rex",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, rex/index.html",
    skills: {
      "1": {
        name: "Divine Guardian",
        type: "Burst",
        notes: "Grant a shield for 3 rounds (Shield Factor 1,620). Each enemy that attacks Rex will grant Rex 12 Rage, up to a maximum of 36 Rage each round.",
        effects: [
          { what: "Shield Factor", values: [1620, 2160, 2700, 3780, 5400] },
          { what: "Generate Rage", values: [12, 12, 12, 12, 12] }
        ]
      },
      "2": {
        name: "Easy Reaping",
        type: "Passive",
        notes: "Increase ATK of your  Cavalry-type soldiers by 8%, and their MOV SPDby4%.",
        effects: [
          { what: "Increase DMG dealt by", unit: "%", values: [1, 1.2, 1.5, 2, 2.8] },
          { what: "Increase HP of Berserker-type soldiers by", unit: "%", values: [2.5, 3, 4, 5, 7] }
        ]
      },
      "3": {
        name: "Engineered Revival",
        type: "Passive",
        notes: "Increase counterattack DMG of your Troop by 2%. When your Troop is attacked, reduce ATK of the attacker by 4.5% for 5 seconds. This effect can only trigger once every 10 seconds.",
        effects: [
          { what: "Increase counterattack DMG by", unit: "%", values: [2, 3, 4, 6, 9] },
          { what: "Reduce ATK by", unit: "%", values: [4.5, 6, 7.5, 10, 15] }
        ]
      },
      "4": {
        name: "Support Pillar",
        type: "Passive",
        notes: "Increase ATK of your Berserker-type soldiers by 3% and thess DEF by 3%.",
        effects: [
          { what: "Increase ATK of Berserker-type soldiers by", unit: "%", values: [3, 4, 5, 6, 9] },
          { what: "Increase DEF of Berserker-type soldiers by", unit: "%", values: [3, 4, 5, 6, 9] }
        ]
      },
      "U": {
        name: "Unyielding",
        type: "Awakened",
        subtype: "Passive",
        notes: "Passive Skill Reduce DMG your Troop receives by 7%, and increase their counterattack DMG by 13%. When your Troop is attacked, reduce ATK of the attacker by 20% for 5 seconds. This effect can only trigger once every 10 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Reynald": {
    name: "Reynald",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, reynald/index.html",
    skills: {
      "1": {
        name: "Thunderous Charge",
        type: "Burst",
        notes: "Deal DMG to the target (DMG Factor 1,260). Increase DEF of your Troop by 14% for 3 seconds.",
        effects: [
          { what: "Direct DMG Factor", values: [1260, 1680, 2100, 2940, 4200], note: "level 5 reads '420C' on the guide page - a stray character. 4200 is inferred: it fits the curve (2940 x 1.43, the same step the other four levels use) and the awakened skill's 5,040 is exactly 4200 x 1.2" },
          { what: "Increase DEF by", unit: "%", values: [14, 18, 23, 32, 45] }
        ]
      },
      "2": {
        name: "Commander's Aura",
        type: "Passive",
        notes: "Increase ATK of your Cavalry-type soldiers by 1.5% every 5 seconds, up to a maximum of 6%.",
        effects: [
          { what: "Increase ATK of Cavalry-type soldiers by", unit: "%", values: [1.5, 1.7, 2, 3, 4.5] },
          { what: "Increase ATK to a maximum of", unit: "%", values: [6, 6.8, 8, 12, 18] }
        ]
      },
      "3": {
        name: "Survival Wisdom",
        type: "Passive",
        notes: "While in open-field combat, if HP of your Troop is more than 50%, increase ATK of your Cavalry-type soldiers' by 5.5%. If HP is lower than 50%, increase DEF of your Cavalry-type soldiers by 5.5% instead.",
        effects: [
          { what: "Increase ATK of Cavalry-type soldiers by", unit: "%", values: [5.5, 7.5, 9, 13, 18] },
          { what: "Increase DEF of Cavalry-type soldiers by", unit: "%", values: [5.5, 7.5, 9, 13, 18] }
        ]
      },
      "4": {
        name: "Risk and Reward",
        type: "Passive",
        notes: "Increase MOV SPD of your Cavalry-type soldiers by 2%. 50% chance for a normal attack from your Troop to heal themselves (Heal Factor60).",
        effects: [
          { what: "Increase MOV SPD of Cavalry-type soldiers by", unit: "%", values: [2, 3, 3.5, 5, 7] },
          { what: "Healing Factor", values: [60, 85, 110, 160, 220] }
        ]
      },
      "U": {
        name: "Thunderous Shock",
        type: "Awakened",
        subtype: "Passive",
        notes: "Deal DMG to the target (DMG Factor 5,040). Increase DEF of your Troop by 54% for 3 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [5040] }
        ]
      }
    }
  },

  "Rot": {
    name: "Roro",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, roro/index.html",
    skills: {
      "1": {
        name: "Ocean's Wrath",
        type: "Burst",
        notes: "Summon 3 giant waves to deal DMG to the target (DMG Factor 4,050), and randomly inflict 1-10 stacks of Flood, each stack reducing the target's defense by 1% for 5s.",
        effects: [
          { what: "DMG Factor", values: [4050, 5350, 6700, 9400, 13500] },
          { what: "Reduce DEF by", unit: "%", values: [1, 1.5, 2, null, 4] }
        ]
      },
      "2": {
        name: "Ocean Sanctuary",
        type: "Passive",
        notes: "When performing a normal attack on a unit with Flood status, there is a 3%*Flood layer chance to trigger Ocean's Protection, Hijacking a random beneficial Buff from the target; if the target has no beneficial Buffs, you gain a layer of Resistance (blocking one instance of damage), triggered once every 8 seconds.",
        effects: [
          { what: "Chance", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Ocean Heart",
        type: "Passive",
        notes: "Increase the HP of the Axe Throwers in this Hero's Troop by 8%, and their ATK by 6%.",
        effects: [
          { what: "Increase HP by", unit: "%", values: [8, 11, 13, 18, 26] },
          { what: "Increase ATK by", unit: "%", values: [6, null, 9, 12, 17] }
        ]
      },
      "4": {
        name: "Cerulean Breath",
        type: "Passive",
        notes: "When attacking a target affected by Flood, has a 35% chance to trigger Heal (Heal Factor 120*target's Flood stack count).",
        effects: [
          { what: "Healing Factor", values: [120, 155, 195, 270, 385] }
        ]
      },
      "U": {
        name: "Dance of the Tides",
        type: "Awakened",
        subtype: "Passive",
        notes: "Summon 3 giant waves to deal DMG to the target (DMG Factor 14,000), and randomly inflict 1-10 stacks of Flood, each stack reducing the target's defense by 4% for 5s. Also has a 50% chance to prevent the removal of debuffs inflicted by this Hero and their troops for 5s.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] }
        ]
      }
    }
  },

  "Sara": {
    name: "Sara",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, sara/index.html",
    skills: {
      "1": {
        name: "Rockstorm",
        type: "Burst",
        notes: "Summon boulders to slam into the enemy in front of you, dealing DMG (DMG Factor 1,200) to up to 5 target Troops within a cone shaped area, and reducing their ATK, DEF, and HP by 9% for 2 seconds.",
        effects: [
          { what: "DMG Factor", values: [1200, 1500, 1900, 2700, 3800] },
          { what: "Reduce ATK & DEF & HP by", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "2": {
        name: "Unity is Strength",
        type: "Passive",
        notes: "Reduce counterattack DMG received by 5%, and increase Rally Limit by 4%.",
        effects: [
          { what: "Reduce DMG of counterattacks by", unit: "%", values: [5, 6, 7, 10, 14] },
          { what: "Increase Rally Limit by", unit: "%", values: [4, 5, 6, 8.5, 12] }
        ]
      },
      "3": {
        name: "Embolism Strike",
        type: "Passive",
        notes: "Increase DMG your Troop deals to the Blackforged by 8%. Heal a portion of the lightly-wounded soldiers in your Troop when you defeat the Blackforged (Heal Factor 1,200).",
        effects: [
          { what: "Increase DMG dealt to Blackforged by", unit: "%", values: [8, 10, 12, 18, 25] },
          { what: "Healing Factor", values: [1200, 1500, 1900, 2700, 3800] }
        ]
      },
      "4": {
        name: "Rockshearing Winds",
        type: "Passive",
        notes: "Reduce current target's ATK by 8% if your Troop has more than 50% of soldiers remaining.",
        effects: [
          { what: "Reduce AT K by", unit: "%", values: [8, 12, 16, 22, 32] }
        ]
      },
      "U": {
        name: "Jökulhlaup",
        type: "Awakened",
        subtype: "Passive",
        notes: "Summon boulders to slam into the enemy, dealing DMG (DMG Factor 4,600) to up to 5 nearby target Troops, and reducing their ATK, DEF, and HP by 35% for 2 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [4600] }
        ]
      }
    }
  },

  "Scarnet": {
    name: "Skerne",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, skerne/amp/index.html",
    skills: {
      "1": {
        name: "Demoralize",
        type: "Burst",
        notes: "Deal DMG to target Troop (DMG Factor: 1,300) and reduce the target’s MOV SPD by 9% for 2 seconds.",
        effects: [
          { what: "DMG Factor", values: [1300, 1700, 2100, 3000, 4200] },
          { what: "Increase MOV SPD by", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "2": {
        name: "Envoy of Fecundity",
        type: "Passive",
        notes: "Increase production rate of resource nodes within your settlement by 3%.",
        effects: [
          { what: "Increase production rate of resource nodes in settlement by", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "3": {
        name: "Relentless March",
        type: "Passive",
        notes: "Increase DEF of your Troop by 6% and their MOV SPD by 9%.",
        effects: [
          { what: "Increase DEF by", unit: "%", values: [6, 8, 9, 13, 18] },
          { what: "Increase MOV SPD by", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "4": {
        name: "Strength in Numbers",
        type: "Passive",
        notes: "Increase Soldier Limit of your Troop by 2.5%.",
        effects: [
          { what: "Increase Soldier Limit by", unit: "%", values: [2.5, 3, 4, 6] }
        ]
      },
      "U": {
        name: "Valkyrie’s Rage",
        type: "Awakened",
        subtype: "Passive",
        notes: "Increase Gathering Speed of your Troop by an additional 10%.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Selena": {
    name: "Selena",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, selena/index.html",
    skills: {
      "1": {
        name: "Mistsplitter Arrow",
        type: "Burst",
        notes: "Deal DMG to target Troop (DMG Factor 2,400),and decrease ATK of target by 8%, and decrease MOV SPD of target by 9% for 2 seconds.",
        effects: [
          { what: "Direct DMG Factor", values: [2400, 3200, 4400, 5600, 7800] }
        ]
      },
      "2": {
        name: "Phantom Assault",
        type: "Passive",
        notes: "Increase ATK of your  Cavalry-type soldiers by 8%, and their MOV SPDby4%.",
        effects: [
          { what: "Increase ATK of Cavalry-type soldiers by", unit: "%", values: [8, 10, 12, 17, 25] },
          { what: "Increase MOV SPD of Cavalry-type soldiers by", unit: "%", values: [4, 5, 6, 8.5, 12] }
        ]
      },
      "3": {
        name: "Engineered Revival",
        type: "Passive",
        notes: "Normal attacks from your Troops have a 20% chance to heal lightly-wounded soliders of comrades(Heal Factor 360). Increase Healing received by 5% if Erin is in the Troop.",
        effects: [
          { what: "Healing Factor", values: [360, 480, 600, 840, 1200] },
          { what: "Increase healing received by", unit: "%", values: [5, 6, 8, 11, 15] }
        ]
      },
      "4": {
        name: "Gift of the Predator",
        type: "Passive",
        notes: "Increase HP of your Cavalry-type soldiers by 5%, and DMG they deal to Blackforged by 9%.",
        effects: [
          { what: "Increase HP of Cavalry-type soldiers by", unit: "%", values: [5, 6, 8, 11, 15] },
          { what: "Increased DMG dealt to Blackforged by", unit: "%", values: [9, 12, null, 30] }
        ]
      },
      "U": {
        name: "Valkyrie's Rage",
        type: "Awakened",
        subtype: "Passive",
        notes: "Generate 50 Rage each time you use a skill.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Shan": {
    name: "Joan",
    warband: "The Blessed Maiden",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    level: 60,
    power: 457810,
    soldierLimit: 208120,
    stars: "5 of 6",
    myLevels: [5,2,2,3,null],
    source: "game screenshots IMG_1988, 1989, 1991-1994",
    skills: {
      "1": {
        name: "Banner of Justice",
        type: "Burst",
        rageCost: 1000,
        myLevel: 5,
        notes: "plants a Summoning Banner on enemy position, hits up to 3 enemies in a circle around the target; DMG reduced 15% per extra target; up to 3 nearby friendly Troops (own included) gain the DMG buff and damage reduction for 3s",
        effects: [
          { what: "DMG Factor", values: [4200, 5600, 7000, 9800, 14000] },
          { what: "Increase DMG dealt by", unit: "%", values: [1.5, 2, 2.5, 3, 5] },
          { what: "Reduce DMG received by", unit: "%", values: [5], note: "current-level value only, curve not shown" }
        ]
      },
      "2": {
        name: "Saint's Resolve",
        type: "Passive",
        myLevel: 2,
        notes: "only when Joan shares a Troop with a Male Hero",
        effects: [
          { what: "Increase Male Hero's Burst DMG by", unit: "%", values: [10.5, 14, 17.5, 24.5, 35] }
        ]
      },
      "3": {
        name: "Fearless Charge",
        type: "Passive",
        myLevel: 2,
        notes: "25% chance when receiving basic attacks; lasts 5s, stacks up to 5 times",
        effects: [
          { what: "Increase ATK by", unit: "%", values: [2.5, 3, 3.5, 5, 7] },
          { what: "Increase DMG of Normal Attacks by", unit: "%", values: [1.5, 2, 2.5, 3, 5] }
        ]
      },
      "4": {
        name: "Leader's Presence",
        type: "Passive",
        myLevel: 3,
        notes: "always on; buffs own Troop",
        effects: [
          { what: "Increase ATK by", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Increase Soldier Limit by", unit: "%", values: [4, 5, 6, 9, 12] }
        ]
      },
      "U": {
        name: "Righteous Judgment",
        type: "Awakened",
        buffs: "Banner of Justice",
        myLevel: null,
        incomplete: "After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] }
        ]
      }
    }
  },

  "Shisunin": {
    name: "Yi Sun-sin",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, yi-sun-sin/amp/index.html",
    skills: {
      "1": {
        name: "Defiance Incarnate",
        type: "Burst",
        notes: "Summon a warship to charge at the target ahead, dealing damage to the target upon hitting (DMG Factor 4,050), and removing the target’s shield and beneficial Buff effects.",
        effects: [
          { what: "DMG Factor", values: [4050, 5350, 6700, 9400, 13500] }
        ]
      },
      "2": {
        name: "Unbreakable Fortress",
        type: "Passive",
        notes: "When this Hero’s Troops receive damage, there is a 24% chance to gain 1 Fortify stack (reduces Troop’s damage received by 1%), lasting 7 seconds, up to a maximum of 20 stacks.",
        effects: [
          { what: "Chance", unit: "%", values: [24, 32, 40, 56, 80] }
        ]
      },
      "3": {
        name: "Support Pillar",
        type: "Passive",
        notes: "When garrisoned, increase the Rage Recovery Speed of this Hero’s Troops by 3%. If this Hero’s HP is under 50%, gain an additional 11% ATK.",
        effects: [
          { what: "Generate Rage", unit: "%", values: [3, 4, 5, 7, 10] },
          { what: "Increase ATK by", unit: "%", values: [11, 14, 17, 24, 34] }
        ]
      },
      "4": {
        name: "Defying the Odds",
        type: "Passive",
        notes: "Deal additional 4% DMG to enemy Troops if their troop size is larger than this Hero’s troops.",
        effects: [
          { what: "Increased DMG dealt to by", unit: "%", values: [4, 5.5, 6.5, 9, 13] }
        ]
      },
      "U": {
        name: "Unity is Strength",
        type: "Awakened",
        subtype: "Passive",
        notes: "Summon a warship to charge at the target ahead, dealing damage to the target upon hitting (DMG Factor 14,000), and removing the target’s shield and beneficial Buff effects, while gaining 8 layers of Fortitude",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [14000] }
        ]
      }
    }
  },

  "Sigrid": {
    name: "Sigrid",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, sigrid/index.html",
    skills: {
      "1": {
        name: "Song of Swoon",
        type: "Burst",
        notes: "Grant the following effects to you and 4 other nearby targets: Increase DEF of Berserker-type soldiers by 12%, Increase ATK of Axethrower-type soldiers by 12%, and Increase HP of Cavalry-type soldiers by 12% for 2 seconds.",
        effects: [
          { what: "Increase DEF of Berserker-type soldiers by", unit: "%", values: [12, 15, 18, 26, 36] },
          { what: "Increase ATK of Axethrower-type soldiers by", unit: "%", values: [12, 15, 18, 26, 36] },
          { what: "Increase HP of Cavalry-type soldiers by", unit: "%", values: [12, 15, 18, 26, 36] }
        ]
      },
      "2": {
        name: "Blessings of the Harvest",
        type: "Passive",
        notes: "Increase Stone Gathering Speed of your Troop by 10%, and their Food, Wood, and lron Gathering Speed by 8%.",
        effects: [
          { what: "Increase Stone gathering SPD by", unit: "%", values: [10, 13, 16, 22, 30] },
          { what: "Increase Food, Lumber & Iron gathering SPD by", unit: "%", values: [8, 10, 12, 16, 20] }
        ]
      },
      "3": {
        name: "Astrild's Healing",
        type: "Passive",
        notes: "10% chance to heal Lightly Wounded soldiers (Heal Factor 350) when attacked. This effect can only trigger once ever) 6 seconds.",
        effects: [
          { what: "Healing Factor", values: [350, 500, 650, 950, 1600] }
        ]
      },
      "4": {
        name: "Enhanced Transportation",
        type: "Passive",
        notes: "Increase Carrying Capacity of the Troop by 11% and their MOV SPD by 5%.",
        effects: [
          { what: "Troop's Carrying Capacity", unit: "%", values: [11, 14, 17, 24, 34] },
          { what: "Increase MOV SPD by", unit: "%", values: [5, 6, 8, 11, 15] }
        ]
      },
      "U": {
        name: "Victory Frenzy",
        type: "Awakened",
        subtype: "Passive",
        notes: "Grant the following effects to you and 4 other nearby targets: Increase DEF of Berserker-type soldiers by 40%, Increase ATK of Axethrower-type soldiers by 40% and Increase HP of Cavalry-type soldiers by 40% for 2 seconds. Generate 60 Rage.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Silvin": {
    name: "Sylvan",
    warband: "Forest Guardian",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels",
    source: "game screenshots IMG_2024-2029",
    skills: {
      "1": {
        name: "Primal Awakening",
        type: "Burst",
        rageCost: 1000,
        notes: "hits up to 3 enemy units in range; DMG reduced 15% per extra target. Also summons 1 wolf for 4s, inheriting 100% of Sylvan's DEF and 100% of his HP. Summoned units are uncontrolled, do nothing in Rallies or Garrisons, attack Sylvan's target, and vanish when Sylvan is defeated or returns to the Keep.",
        effects: [
          { what: "DMG Factor", values: [4200, null, null, null, 14000], note: "levels 1 and 5 read from the tooltip and the awakened Before Awakening block; the Upgrade Preview line was not captured for the middle levels" },
          { what: "Wolf ATK, share of Sylvan's ATK", unit: "%", values: [9, null, null, null, 30], note: "levels 1 and 5 only, middle levels not captured" },
          { what: "Wolves summoned", values: [1], note: "1 at level 1; not confirmed whether the count scales" }
        ]
      },
      "2": {
        name: "Fang Rend",
        type: "Passive",
        notes: "the summoned wolves get a chance on each attack to inflict Armor Break for 2s, stacking up to 2 times; the wolves' DMG to shielded Troops is also increased",
        effects: [
          { what: "Chance", unit: "%", values: [12, 16, 20, 28, 40] },
          { what: "Reduce DEF by", unit: "%", values: [5, 6, 8, 11, 15] },
          { what: "Increase DMG dealt to shielded Troops by", unit: "%", values: [12, 16, 20, 28, 40] }
        ]
      },
      "3": {
        name: "Life Resonance",
        type: "Passive",
        notes: "the wolves soak a share of the DMG Sylvan receives, and a share of the DMG they deal heals him",
        effects: [
          { what: "Shared DMG", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Heal Ratio", unit: "%", values: [9, 12, 15, 21, 30] }
        ]
      },
      "4": {
        name: "Nature's Pact",
        type: "Passive",
        notes: "per summoned unit present the Troop's DMG rises, capped at 3x the per-unit value; with no summons present the Troop gains DMG Reduction instead",
        effects: [
          { what: "Increase HP of summoned units by", unit: "%", values: [15, 20, 25, 35, 50] },
          { what: "Increase DMG dealt by, per summon", unit: "%", values: [1, 2, 3, 4, 5] },
          { what: "Reduce DMG received by, when no summons", unit: "%", values: [3, 4, 5, 7, 10] }
        ]
      },
      "U": {
        name: "Feral Frenzy",
        type: "Awakened",
        buffs: "Primal Awakening",
        notes: "after awakening the Burst summons 2 wolves for 6s instead of 1 for 4s, and a wolf below 70% HP enters Frenzy - attacking twice per second and ignoring the target's Damage Reduction, Defiance and shield effects",
        effects: [
          { what: "DMG Factor before awakening", values: [14000] },
          { what: "DMG Factor after awakening", values: [15500] },
          { what: "Wolves summoned before awakening", values: [1] },
          { what: "Wolves summoned after awakening", values: [2] },
          { what: "Wolf ATK before awakening, share of Sylvan's ATK", unit: "%", values: [30] },
          { what: "Wolf ATK after awakening, share of Sylvan's ATK", unit: "%", values: [60] },
          { what: "Wolf duration before awakening", unit: "s", values: [4] },
          { what: "Wolf duration after awakening", unit: "s", values: [6] },
          { what: "Frenzy HP threshold", unit: "%", values: [70] }
        ]
      }
    }
  },

  "Vista": {
    name: "Vista",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, vista/amp/index.html",
    skills: {
      "1": {
        name: "Seize and Bestow",
        type: "Burst",
        notes: "Reduce ATK of enemies by 18%, and increase ATK of comrades by 18% for 3 seconds.",
        effects: [
          { what: "Reduce AT K by", unit: "%", values: [18, 24, 30, 42, 60] },
          { what: "Increase ATK by", unit: "%", values: [18, 24, 30, 42, 60] }
        ]
      },
      "2": {
        name: "Starshine Blessing",
        type: "Passive",
        notes: "Reduce DMG you receive by 3% when you are in a Rally unit.",
        effects: [
          { what: "Reduce DMG received by", unit: "%", values: [3, 3.6, null, 6.5, 9] }
        ]
      },
      "3": {
        name: "Shadow Oath",
        type: "Passive",
        notes: "Increase DMG your Commander’s Burst deals by 1.8% if you are the Lieutenant.",
        effects: [
          { what: "Skill DMG", unit: "%", values: [1.8, 2.4, 3, 4.2, 6] }
        ]
      },
      "4": {
        name: "Calm Before the Storm",
        type: "Passive",
        notes: "Reduce DMG comrades and enemies deal by 20% for the first 5 seconds upon entering combat. Reduce DMG comrade Troops receive by 7%. When this effect ends, heal lightly-wounded soldiers of comrades by 10%.",
        effects: [
          { what: "Reduce DMG received by", unit: "%", values: [7, 8.5, 10, 15, 22] },
          { what: "Heal Ratio", unit: "%", values: [10, 14, 18, 25, 36] }
        ]
      },
      "U": {
        name: "Turn the Tides",
        type: "Awakened",
        subtype: "Passive",
        notes: "Reduce ATK of enemies by 60% and their DEF by 25%, and increase ATK of comrades by 60% and their DEF by 25% for 3 seconds.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Voll": {
    name: "Voll",
    basePower: null,
    sourceKind: "guide",
    slotOrder: "guide",
    warbandNote: "the guide page does not carry the warband - it is on the hero's own screen in the game",
    source: "fatewarguide.com mirror, voll/index.html",
    skills: {
      "1": {
        name: "Giant Flame Hammer",
        type: "Burst",
        notes: "Gathering ancestral rage and swing a giant hammer towards the target in front, dealing DMG to the target and up to 2 nearby enemies (DMG Factor 1,800). When using this skill for the first time in battle, increase Skill DMG by 50%. This effect can only trigger once every 30 seconds.",
        effects: [
          { what: "DMG Factor", values: [1800, 2400, 3000, 4200, 6000] },
          { what: "Skill DMG", unit: "%", values: [50, 60, 70, 80, 100] }
        ]
      },
      "2": {
        name: "Demoralizing Strike",
        type: "Passive",
        notes: "While in combat, if the percentage of your remaining HP is more than the target's, reduce Rage Buildup of the target by 4%.",
        effects: [
          { what: "Reduce Rage", unit: "%", values: [4, 5, 6, 8.5, 12] }
        ]
      },
      "3": {
        name: "Pressing On",
        type: "Passive",
        notes: "Increase your Rage Buildup by 15% while in battle for 5 seconds. This effect can only trigger once every 30 seconds.",
        effects: [
          { what: "Generate Rage", unit: "%", values: [15, 20, 25, 35, 48] }
        ]
      },
      "4": {
        name: "Bloodthirsty Slaughter",
        type: "Passive",
        notes: "For each nearby allied or enemy troop with less than 50% HP, increase ATK of Voll's Troop by 1%, up to a maximum of 4%.",
        effects: [
          { what: "Increase ATK by", unit: "%", values: [1, 1.5, 2, 3, 4] },
          { what: "Increase ATK to a maximum of", unit: "%", values: [4, 6, 8, 12, 16] }
        ]
      },
      "U": {
        name: "High Morale",
        type: "Awakened",
        subtype: "Passive",
        notes: "50% chance for Giant Flame Hammer to ignore 20% of target's DEF when HP of Voll's Troop is above 70%.",
        incomplete: "the guide page shows only the before-awakening wording; After Awakening values are not published there",
        toFill: true,
        effects: []
      }
    }
  },

  "Wukong": {
    name: "Wukong",
    warband: "Monkey King",
    basePower: null,
    rarity: "S",
    sourceKind: "game",
    owned: false,
    note: "unowned - level 1 and slot levels are display defaults, not training levels",
    source: "game screenshots IMG_2002-2009",
    skills: {
      "1": {
        name: "Golden Cudgel",
        type: "Burst",
        rageCost: 1000,
        notes: "single-target downward strike; self ATK buff lasts 5s",
        effects: [
          { what: "DMG Factor", values: [4500, 6000, 7500, 10500, 15000] },
          { what: "Increase ATK by", unit: "%", values: [6, 8, 10, 14, 20] }
        ]
      },
      "2": {
        name: "Monkey Minions",
        type: "Passive",
        notes: "chance on receiving Burst DMG to summon a clone for 6s; clone inherits 50% of the original's Max HP; up to 2 clones at once. Clones are uncontrolled, do nothing in Rallies or Garrisons, auto-attack the original's target, only basic-attack and counterattack, vanish if the original is defeated or returns to the Keep, and do not count toward casualties or heavily-wounded units.",
        effects: [
          { what: "Chance", unit: "%", values: [9, 12, 15, 21, 30] },
          { what: "Clone ATK, share of original", unit: "%", values: [90, 120, 150, 210, 300] },
          { what: "Clone Max HP, share of original", unit: "%", values: [50], note: "fixed, not on the upgrade curve" }
        ]
      },
      "3": {
        name: "Fiery Eyes",
        type: "Passive",
        notes: "fires when affected by a debuff",
        effects: [
          { what: "Chance to become immune to that debuff", unit: "%", values: [18, 24, 30, 42, 60] }
        ]
      },
      "4": {
        name: "Cloud Somersault",
        type: "Passive",
        notes: "also grants immunity to MOV SPD-reduction effects",
        effects: [
          { what: "Increase HP of Cavalry-type soldiers by", unit: "%", values: [11, 14, 17, 24, 35] }
        ]
      },
      "U": {
        name: "Pillar of the Deep",
        type: "Awakened",
        buffs: "Golden Cudgel",
        notes: "after awakening the Burst also summons a clone (50% Max HP, 300% ATK, 6s)",
        incomplete: "rest of the After Awakening block needs the tooltip scrolled",
        toFill: true,
        effects: [
          { what: "DMG Factor before awakening", values: [15000] },
          { what: "DMG Factor after awakening", values: [16000] },
          { what: "Increase ATK by", unit: "%", values: [20], note: "same before and after awakening, 5s" }
        ]
      }
    }
  }

};

/* Flat index on the universal join key: hero id + slot.
   CORE_SKILLS_BY_SLOT["Arthur|1"] is Arthur's first skill. */
window.CORE_SKILLS_BY_SLOT = (function(){
  var out = {};
  for(var id in window.CORE_SKILLS){
    var sk = window.CORE_SKILLS[id].skills;
    for(var slot in sk) out[id + "|" + slot] = sk[slot];
  }
  return out;
})();
