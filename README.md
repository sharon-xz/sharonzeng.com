## This is the personal profile website for Sharon Zeng

Static React app, hosted on Cloudflare Workers Static Assets. `npm run build` writes the site to `client/build`. That folder is generated and is not committed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the static site into `client/build`, without source maps.

### `npm run preview`

Serves `client/build` locally with the Cloudflare dev server. Refreshing `/about`, `/projects`, or `/contact` returns the React app.

### `npm run deploy`

Deploys the static build as a Cloudflare Worker. Custom domains are not attached by this command.
