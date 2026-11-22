import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "sharonzeng",
    compatibilityDate: "2026-11-19",
    assets: {
      notFoundHandling: "single-page-application",
    },
  },
});
