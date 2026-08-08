# averymoon.co — V5 Astro

This is the first Astro version of the site.

## First-time GitHub setup

1. Keep this ZIP somewhere safe as a backup.
2. In the GitHub repository, delete the old V4 website files/folders so the repository root is clean.
3. Upload **everything inside this V5 folder** to the repository root.
4. Commit the upload.
5. Go to **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **GitHub Actions**.
7. Open the **Actions** tab. The `Deploy to GitHub Pages` workflow should start automatically.
8. When the workflow shows a green check, visit:
   `https://avery-moon.github.io/averymoon.co/`

You do not need to install Astro, Node, or npm on your computer for this workflow.

## Important repository structure

You should see:
- `.github/`
- `public/`
- `src/`
- `astro.config.mjs`
- `package.json`
- `README.md`

You should **not** keep old root files like:
- `index.html`
- `about.html`
- `approach.html`
- `systems.html`
- `built-systems.html`
- old `assets/` folders

GitHub Actions generates the finished static HTML automatically.

## Custom domain later

The project is currently configured for:
`https://avery-moon.github.io/averymoon.co/`

When moving to `averymoon.co`, update `astro.config.mjs` to:

```js
export default defineConfig({
  site: 'https://averymoon.co'
});
```

Then add `public/CNAME` containing:

```text
averymoon.co
```


## A note about package-lock.json

This first version intentionally does not include a lockfile. The deployment workflow
explicitly tells Astro's official GitHub Action to use npm. If you later develop the
site locally, running `npm install` will create `package-lock.json`, and you can commit
that file normally.
