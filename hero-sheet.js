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
*/

// ---------------------------------------------------------------
// 2026-08-23 11:34:13 UTC - note added by Claude, agreed with Sid.
//   This file is the SINGLE SOURCE OF TRUTH for hero facts.
//   Claude edits it only with permission, backs it up first, and
//   changes only the agreed lines - never regenerates the file.
//   Backup of this file before the note was written:
//     _archive/hero-sheet.2026-08-23_113413.bak.js
// ---------------------------------------------------------------

// CHANGE LOG - newest last
// 2026-08-25 09:23:01 UTC  two tree misspellings fixed: Farad "axel"->"axe",
//                          Irin "skil"->"skill". Nothing else touched.
//                          Backup: _archive/hero-sheet.2026-08-25_092300.bak.js

window.HERO_SHEET = `
# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- S+ ----
Arthur       | bers  | siege bal def     | yes  | chief
Farad        | axe   | ver axe skill      | yes  | wheel   # Farhad
Freya        | beast   | siege beast def     | yes  | p2p   # Freyja
Irin         | cav | hunter cav skill  | yes  | wheel   # Erin
Odaunaga     | axe   | ver cav atk   | yes  | chief   # Oda Nobunaga
Shan         | bers   | vers bal skill    | yes  | chief   # Joan
Shisunin     | bers  | garr bal def     | yes  | wheel   # Yi Sun-sin

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- S ----
Amaterasu    | axe   | siege bal skill     | yes  | wheel
Asuka        | cav   | vers cav field      | yes  | boxes   # Aska
Rot          | axe | ver axe field   | yes  | wheel   # Roro
Wukong       | cav  | ver cav skill    | yes  | p2p   # Wukon

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- A ----
Carl         | bers   | ver bers def     | no   | wheel   # Karl
Held         | axe | siege axe skill    | no   | shift   # Helda
Morgan Lefe  | axe   | hunt axe atk     | no   | p2p
Petra        | bers  | vers bers def      | no   | boxes
Reald        | bers   | garr bers def      | no   | shift   # Reid
Reinhardt    | cav   | hunt cav field      | no   | shift
Silvin       | beast | vers bal skill   | no   | f2p   # Sylvan

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- B ----
Balder       | bers  | hunt bers def     | no   | f2p   # Baldur
Elfwine      | axe   | hunt bal supp       | no   | f2p   # Aelfwine
Iris         | beast   | garr beast sup      | no   | f2p
Kaira        | axe   | vers axe field    | no   | boxes
Kiana        | beast   | ver beast supp     | no   | vip
Kus          | axe  | hunt axe atk      | no   | any   # Kalthas
Reynald      | cav   | hunt cav field      | no   | f2p
Sara         | bers | hunt bal supp    | no   | f2p
Selena       | cav   | hunt cav field     | no   | f2p
Voll         | bers  | hunt bers skill   | no   | f2p

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- C ----
Linda        | axe   | vers axe skill      | no   | f2p
Rex          | bers  | garr ber def      | no   | f2p
Vista        | axe | vers bal supp      | no   | f2p

# troop   axe   bers   cav   beast
# trees   cav  axe  bers  beast  vers  bal  field  atk  def  supp  garr  siege  hunt  gath  skill
#         trees read LEFT TO RIGHT: 10 o'clock, 12 o'clock, 2 o'clock
# obtain  chief  wheel  p2p  f2p  boxes  shift  vip  any
# hero         | troop | trees             | skin | obtain
# ---- D ----
Elina        | bers   | gath bal supp      | no   | any   # Elena
Ilia         | axe   | hunt axe supp      | no   | any   # Elia
Scarnet      | axe  | gath bal supp      | no   | any   # Skerne
Sigrid       | axe | gath bal sup      | no   | any
`;
