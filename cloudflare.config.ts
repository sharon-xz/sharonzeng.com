import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "sharonzeng-com",
    compatibilityDate: "2026-11-19",
    assets: {
      notFoundHandling: "single-page-application",
    },
  },
});
