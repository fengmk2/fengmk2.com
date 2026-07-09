import { readdirSync, readFileSync } from "node:fs";
import { type EvaluateOptions, evaluate } from "@mdx-js/mdx";
import { createElement, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import mdxOptions from "void-blog/mdx";
import { describe, expect, it } from "vite-plus/test";

// Regression guard for the "Worker hung and would never generate a response"
// production error. A post that contains a `{...}` expression in Markdown flow
// (e.g. `#{param}` or an old 4-space-indented block MDX no longer treats as
// code) compiles to a bare identifier reference. It builds fine but throws a
// ReferenceError during SSR, which stalls the streaming render inside the
// <Suspense> boundary until Cloudflare cancels the request.
//
// Every /posts/<slug> page is server-rendered, so each post's MDX must render
// without throwing. This compiles and renders every post the way the build
// does. JSX-looking tokens inside fenced code blocks are ignored by MDX, so
// only genuine flow expressions/components can fail here.

const postsDir = new URL("../../posts/", import.meta.url);
const posts = readdirSync(postsDir)
  .filter((file) => file.endsWith(".mdx"))
  .sort();

// Render any custom capitalized component as a passthrough so a test failure
// can only be a genuine undefined-identifier expression, never a component the
// real app registers through its MDX provider.
const passthrough = ({ children }: { children?: unknown }) =>
  createElement(Fragment, null, children as never);
const useMDXComponents = () =>
  new Proxy(
    {},
    { get: (_t, key) => (typeof key === "string" && /^[A-Z]/.test(key) ? passthrough : undefined) },
  );

describe("post MDX renders without hanging the worker", () => {
  it("has posts to check", () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it.each(posts)("renders %s", async (file) => {
    const source = readFileSync(new URL(file, postsDir), "utf8");
    // Cast bridges React's jsx-runtime types and MDX's stricter Jsx types.
    const options = { ...runtime, ...mdxOptions, useMDXComponents } as unknown as EvaluateOptions;
    const { default: MDXContent } = await evaluate(source, options);
    expect(() => renderToStaticMarkup(createElement(MDXContent))).not.toThrow();
  });
});
