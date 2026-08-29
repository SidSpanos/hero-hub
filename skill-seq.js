/* skill-seq.js — the order each hero's skills should be trained in.

   Four numbers, one per skill, in skill order:
       skill 1 (main special)   skill 2   skill 3   skill 4

   The HIGHER the number, the SOONER you train it. Ties are fine.

       Arthur        5 1 3 2      -> train 1st, then 3rd, then 4th, then 2nd
       Kaira         5 1 5 3      -> 1st and 3rd joint first

   All four eventually reach 5 and the ultimate opens, so this is the route,
   not the destination. It does not go stale.

   EVERY hero has a line. Leave the numbers off and nothing is displayed for
   that hero - a blank line is "not decided yet", not an error.

       Sigrid                     -> shows nothing

   A # starts a comment. Nothing in this file can break the app.

   ------------------------------------------------------------------
   Seeded from the numbers that were in hero-mine.js. Those were entered
   before we separated sequence from progress, so treat them as a start
   point and correct them as you review each hero.
   ------------------------------------------------------------------ */

window.SKILL_SEQ = `

# ---- S+ ----
Arthur        5 1 3 2
Farad         5 1 2 3   # Farhad
Freya         5 1 3 2   # Freyja
Irin          5 1 2 3   # Erin
Odaunaga      5 1 3 2   # Oda Nobunaga
Shan          5 1 2 3   # Joan
Shisunin      5 1 3 2   # Yi Sun-sin

# ---- S ----
Amaterasu     5 1 2 3
Asuka         5 1 2 3   # Aska
Rot           5 1 3 2   # Roro
Wukong        5 1 2 3   # Wukon

# ---- A ----
Carl          5 1 2 3   # Karl
Held          5 1 3 2   # Helda
Morgan Lefe   5 1 2 3
Petra         5 1 3 2
Reald         5 1 2 3   # Reid
Reinhardt     5 1 3 2
Silvin        5 1 2 3   # Sylvan

# ---- B ----
Balder        5 1 2 3   # Baldur
Elfwine       5 1 2 3   # Aelfwine
Iris          5 1 3 2
Kaira         5 1 2 3
Kiana         5 1 2 3
Kus           5 1 3 2   # Kalthas
Reynald       5 1 2 3
Sara          5 1 3 2
Selena        5 1 2 3
Voll          5 1 3 2

# ---- C ----
Linda         5 5 5 5
Rex           5 5 5 5
Vista         5 5 5 5

# ---- D ----
Elina         5 5 5 5   # Elena
Ilia          5 5 5 5   # Elia
Scarnet       5 5 5 5   # Skerne
Sigrid        5 5 5 5
`;
