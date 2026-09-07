/* hero-sheet.js — the SHARED FACTS about each hero. One line each.

   True for everyone who plays, so this file is published with the site and
   every visitor gets it. Yours to edit; the app only ever reads it.

   What you OWN and how far you've TRAINED them is not in here — that's your
   account, not a fact about the game. It lives in hero-mine.js, which is not
   published, so visitors never inherit your roster.

   The header row names the columns, so this file only carries the five it
   uses. Lines starting with # are ignored, a # anywhere starts a comment,
   and a blank or "-" means "not recorded". A line the app can't read is
   skipped and named on the Roster tab — one bad row never blanks the rest.

   Spelling is forgiving: Cavalry, BZ, seige, cheif and p2w all land correctly.

     troop   the troop they march
     trees   their three talent trees, read LEFT TO RIGHT — the 10 o'clock,
             12 o'clock and 2 o'clock branches, in that order.
             "vers" (Versatile) carries bonuses under any commander, which is
             what makes a hero good in the lieutenant seat. They still march
             their own troop. Versatile and Balanced ("bal") are DIFFERENT
             trees and a hero can have both.
     skin    yes / no
     obtain  how you get them

   2026-09-07 17:08 — talent TREES corrected for the remaining 18 heroes, from
   the talent sentences on their fatewarguide.com pages ("This Hero
   excels at leading Cavalry" -> cav, and so on). That mapping was
   checked first against the four heroes held BOTH ways — Karl, Kiana,
   Reinhardt, Aelfwine — and reproduced the game's own panel exactly
   on all four, which is why it is trusted here. Positions preserved
   the same way: a tree already recorded kept its slot. Seven rows had
   been sitting on the placeholder "gath bal def".
   NINE heroes had no tree in common with their source, so their
   positions are the source's listed order and NOT wheel order —
   Oda Nobunaga, Reinhardt, Kiana, Roro, Helda, Reid, Kalthas, Linda
   and Elia. The three NAMES are right; the arrangement is a
   placeholder until you open each wheel. Troop, skin and obtain were
   not touched.

   2026-09-07 17:06 — talent TREES corrected for the 13 heroes whose character
   panel was screenshotted and disagreed with this file. Only the tree
   NAMES changed. Positions were preserved: a tree already recorded here
   that the game confirms kept its slot, because that slot is the
   10/12/2 o'clock reading off the wheel and no screenshot can give it.
   Three heroes had no tree in common with the panel at all — Oda
   Nobunaga, Reinhardt and Kiana — so for those the positions are the
   panel's left-to-right order, which is NOT wheel order. Check those
   three on the wheel when you get a chance. Troop, skin and obtain
   were not touched. Previous version backed up alongside.
*/

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
