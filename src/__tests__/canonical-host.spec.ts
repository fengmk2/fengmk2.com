import { describe, expect, it, vi } from "vite-plus/test";
import canonicalHost from "../../middleware/01.canonical-host";

type Middleware = typeof canonicalHost;
type Context = Parameters<Middleware>[0];
type Next = Parameters<Middleware>[1];

async function run(url: string) {
  const redirect = vi.fn(
    (to: string, status?: number) =>
      new Response(null, { status: status ?? 302, headers: { location: to } }),
  );
  const next = vi.fn(async () => {}) as unknown as Next;
  const c = { req: { url }, redirect } as unknown as Context;
  const res = await canonicalHost(c, next);
  return { next, redirect, res };
}

describe("canonical host middleware", () => {
  it("301s the void.app domain to fengmk2.com, keeping path and query", async () => {
    const { next, redirect, res } = await run("https://fengmk2.void.app/posts/?q=1");
    expect(redirect).toHaveBeenCalledWith("https://fengmk2.com/posts/?q=1", 301);
    expect(next).not.toHaveBeenCalled();
    expect((res as Response).status).toBe(301);
  });

  it("forces https even when the incoming request is http", async () => {
    const { redirect } = await run("http://fengmk2.void.app/css/mk2.css");
    expect(redirect).toHaveBeenCalledWith("https://fengmk2.com/css/mk2.css", 301);
  });

  it("passes the canonical domain through", async () => {
    const { next, redirect } = await run("https://fengmk2.com/posts/");
    expect(next).toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });

  it("passes the staging domain through", async () => {
    const { next, redirect } = await run("https://fengmk2-staging.void.app/");
    expect(next).toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });

  it("does not redirect void internal endpoints", async () => {
    const { next, redirect } = await run("https://fengmk2.void.app/__void/deploy");
    expect(next).toHaveBeenCalled();
    expect(redirect).not.toHaveBeenCalled();
  });
});
