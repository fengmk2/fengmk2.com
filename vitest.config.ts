import { defineConfig } from "vite-plus";

// Unit tests run in plain Node. Vitest prefers this file over vite.config.ts,
// which keeps the void/Cloudflare worker plugin stack out of the test run.
export default defineConfig({
  test: {
    include: ["src/__tests__/**/*.spec.ts"],
  },
});
