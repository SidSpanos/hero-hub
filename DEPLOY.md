# Deploying Hero Hub

The site is five static files. There is no build step, no dependencies, and
nothing to install — a web server that can hand out files is the whole
requirement.

```
index.html      the app
hero-data.js    the saved layout, exported from the app
hero-names.js   the name list
hero-sheet.js   troop, talents, skin, obtain — one line per hero
skill-seq.js    the order each hero's skills get trained
_headers        cache rules (Cloudflare reads it; it is never served)
```

`hero-mine.js` is **not** on that list and must never be. It is your account —
which heroes you have and how far you've trained them — and it is in
`.gitignore` for that reason. Without it every visitor simply starts owning all
35 and ticks their own; nothing else about the site changes. Verified: same 35
portraits, same talents, same training orders, same scores, no errors.

---

## Cloudflare Pages — one-time setup

Cloudflare watches the GitHub repo and redeploys on every push, so
`publish.cmd` keeps working exactly as it does now.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**
2. Authorise GitHub and pick **SidSpanos/hero-hub**
3. Settings — the important part is that there is nothing to set:

   | | |
   |---|---|
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | *leave empty* |
   | Build output directory | `/` |

4. **Save and Deploy**

First build takes under a minute. The site lands on
`https://<project-name>.pages.dev/` — if you name the project `hero-hub`,
that's `https://hero-hub.pages.dev/`.

### A custom domain, if you want one

Project → **Custom domains** → **Set up a domain**. If the domain is already on
Cloudflare the DNS record is written for you.

---

## Publishing after that

Double-click **`publish.cmd`**. It copies the five files out of `..\HeroHub`,
commits, and pushes. Cloudflare picks the push up and redeploys.

The `_headers` file means you should not need Ctrl+F5 any more — the browser
revalidates on every load and gets a cheap `304 Not Modified` when nothing has
changed.

---

## If `publish.cmd` fails

**"Another git process seems to be running"** — a leftover `.git\index.lock`.
`publish.cmd` deletes it for you before it does anything else; if it still
complains, close any editor with the repo open and run it again.

**A push is rejected** — someone (or another machine) pushed first. `git pull
--rebase` then run `publish.cmd` again.

---

## GitHub Pages

The old `https://sidspanos.github.io/hero-hub/` keeps working from the same
repo; the two can run side by side for as long as you like. `.nojekyll` is
there for GitHub's benefit and Cloudflare ignores it.
