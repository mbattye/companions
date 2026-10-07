# Stewards

Companions is meant to outlive any one account, company or person. This note says who looks after it, how to bring it back if the usual places are gone, and what to do once a year.

## Who looks after it

| Role | Name | Since |
|---|---|---|
| Steward | Mike Battye | 2026 |
| Next steward | *(to be named)* | |

The steward keeps the copies safe, does the yearly review, and decides what goes in. When the steward changes, update this table and say so in the decisions log in `PLAN.md`.

## Where the copies are

- **GitHub:** https://github.com/mbattye/companions (public).
- **The live site:** https://companions.mbattye.workers.dev (Cloudflare, free plan). It is rebuilt from GitHub on every change.
- **The yearly archive:** two files per year, made on the steward’s computer in the project’s `archive/` folder and then moved to family storage:
  - `companions-YYYY.zip`: the site as it stood that year. Unzip it and open `index.html`. Nothing else needed.
  - `companions-YYYY.bundle`: the full history of every change, for anyone who wants to carry on the work.
- **Second host (mirror):** none yet. See *Adding a mirror* in `README.md`.

## Bringing it back

If GitHub and Cloudflare are both gone, start from the newest archive files.

**To read it.** Unzip `companions-YYYY.zip` and double-click `index.html`. It opens in any web browser, with no internet needed except for the fonts (without them it falls back to the computer’s own fonts and still works).

**To put it online again.** Any service that hosts plain files will do; nothing about Companions needs a server.
1. Unzip `companions-YYYY.zip`.
2. Upload the contents of the `companions` folder to the host. Most hosts accept a folder dragged into the browser. The project notes (`PLAN.md` and the others) are harmless if they go up too.
3. Note the new address here and in `README.md`.

**To carry on the work, with its history.** This needs `git` (on a Mac, typing `git` in Terminal offers to install it).

```sh
git clone companions-YYYY.bundle companions
```

That gives a full working copy. To put it on a new host, create an empty repository there and run, inside the `companions` folder:

```sh
git remote set-url origin <address of the new repository>
git push origin --all
git push origin --tags
```

Then follow *Make your own family’s copy* in `README.md` to publish it.

## Once a year

Do this in the autumn, around the anniversary (the first commit was 22 September 2026). It takes an hour or two.

1. **Links.** Run the link checker and fix or replace dead off-ramps and reading links. *(The checker is `PLAN.md` item R6, still to be built; until then, spot-check a branch by hand.)*
2. **Sources.** Re-check a slice of `SOURCES.md` (say one section a year) and add a “last verified” date to each entry checked.
3. **Data.** Run `node scripts/check-data.js`; it must report 0 errors.
4. **Snapshot.** Tag the year and push the tag:

   ```sh
   git tag year-YYYY
   git push origin year-YYYY
   ```

5. **Archive.** Make the two archive files and move them to family storage:

   ```sh
   git bundle create archive/companions-YYYY.bundle --all
   git archive --prefix=companions/ -o archive/companions-YYYY.zip HEAD
   ```

   Check the bundle with `git bundle verify archive/companions-YYYY.bundle`. Keep every year’s files; they are small.
6. **Accounts.** Check that the GitHub and Cloudflare accounts still work, and the domain’s renewal date once there is one.
7. **Log it.** Add a dated line to the decisions log in `PLAN.md`: what was checked, what changed.

## Review history

| Year | Done by | Notes |
|---|---|---|
| 2026 | Mike Battye | First archive made (bundle and ZIP), 7 October 2026. Links and sources review waits for the link checker. |
