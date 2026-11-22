import { defineWranglerConfig } from "wrangler/experimental-config";

export default defineWranglerConfig({
  assetsDirectory: "./client/build",
  build: {
    command: "npm run build",
  },
});
