# Circle — installable app

Circle as a standalone app for your phone: full-screen from the home screen, no browser bars, works offline.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The app |
| `manifest.webmanifest` | Tells your phone Circle is an app: name, icon, full-screen mode |
| `sw.js` | Makes it work offline and pick up new versions |
| `icons/` | App icon in every size |
| `robots.txt` | Asks search engines to stay away |

Keep these together and don't rename them.

## 1. Put it online with GitHub Pages (free, no usage limits worth worrying about)

1. Sign in at **github.com** (a free account is fine).
2. **New repository** → name it `circle` → **Public** → don't tick "Add a README" → **Create**.
   GitHub Pages needs a public repository on the free plan. Only the app's code is public; your tasks and photos stay on your phone.
3. On the empty repository page choose **uploading an existing file**.
4. Unzip `circle-app.zip`, open the folder, select **everything inside it** — `index.html`, `manifest.webmanifest`, `sw.js`, `robots.txt`, `README.md` and the `icons` folder — and drag it onto the page. Upload the *contents*, not the folder itself.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under "Build and deployment" set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
7. Wait about a minute and reload that page. It shows your address:
   `https://<your-username>.github.io/circle/`

## 2. Install it on your phone

**iPhone:** open the link in **Safari** → **Share** → **Add to Home Screen** → **Add**.
**Android:** open it in **Chrome** → **⋮** → **Install app**.

Open Circle from the new icon: full screen, no address bar.

## 3. Move your data across (once)

Data belongs to the web address it was saved under, so it doesn't follow you automatically.

1. In the **old app** (the Netlify one): **Insights → Your data → Export backup**, and save the file.
2. In the **new app**: **Insights → Your data → Import backup**, and pick that file.
3. Check your tasks, routines, lists and photos are there, then delete the old icon.

## 4. Updating later, without losing anything

1. You get a new `circle-app.zip`. Unzip it.
2. In your repository click **Add file → Upload files**, drag in the new files, and **Commit changes**. Same names replace the old ones.
3. Wait a minute, then open Circle on your phone **while online**, close it fully, and open it again. It's now the new version.

Your data is untouched by updates: it lives in your phone's storage for `<your-username>.github.io`, not in these files. Renaming the repository later is safe for the same reason, though the link changes, so you'd re-add the icon.

When `sw.js` changes, its `VERSION` line goes up by one so phones refresh their offline copy.

## Your data

- Everything is saved **on your phone**. It doesn't sync to other devices.
- **Export backup** now and then, to iCloud Drive or Google Drive.
- Deleting the app from the home screen deletes its data, so export first.
