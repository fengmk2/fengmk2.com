import { defineMiddleware } from "void";

// Redirect the default <slug>.void.app domain to the canonical custom domain.
// Deployed to staging too, where the host never matches, so the same code is
// safe on both projects. Void internal endpoints under /__void are skipped so
// deploy tooling keeps working on the void.app host.
export default defineMiddleware(async (c, next) => {
  const url = new URL(c.req.url);
  if (url.hostname === "fengmk2.void.app" && !url.pathname.startsWith("/__void")) {
    url.protocol = "https:";
    url.hostname = "fengmk2.com";
    url.port = "";
    return c.redirect(url.toString(), 301);
  }
  await next();
});
