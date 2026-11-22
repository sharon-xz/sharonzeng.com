import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { defineWranglerConfig } from "wrangler/experimental-config";

const assetsDirectory = "./client/build";
const root = process.cwd();
const assetsPath = path.resolve(root, assetsDirectory);
const isCloudflareBuild = process.argv.includes("build");

// Assets-only `cf build` checks this directory before it runs `build.command`.
// Compile the Create React App output first, and install client deps if the
// root install did not.
if (isCloudflareBuild || !existsSync(assetsPath)) {
  if (!existsSync(path.join(root, "client/node_modules/react-scripts"))) {
    execSync("npm ci --prefix client", { stdio: "inherit", cwd: root });
  }
  execSync("npm run build", { stdio: "inherit", cwd: root });
}

export default defineWranglerConfig({
  assetsDirectory,
  build: {
    command: "npm run build",
  },
});
