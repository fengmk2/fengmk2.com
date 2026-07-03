# This is MK2

Hello World!

Personal site and blog at [fengmk2.com](https://fengmk2.com), built with [Vite+](https://viteplus.dev) and [Void](https://void.cloud) (React + MDX via void-blog).

## Development

Work happens on the `dev` branch. `master` is production and only advances through the automated promotion below, so do not commit to it directly.

```bash
vp install
vp dev        # local dev server
vp check      # format, lint, type check
vp run build  # production build
```

Small changes can be pushed to `dev` directly. Larger changes go through a pull request targeting `dev`; CI runs `vp check` and a build on every PR.

## Deployment

Two Void projects are connected to this repo via the Void GitHub App (`void github` subcommands):

| Project           | Branch   | Executor              | URL                              |
| ----------------- | -------- | --------------------- | -------------------------------- |
| `fengmk2-staging` | `dev`    | GitHub Actions (OIDC) | https://fengmk2-staging.void.app |
| `fengmk2`         | `master` | Void container        | https://fengmk2.com              |

Every push to `dev` flows through `.github/workflows/ci.yml`:

1. `test`: `vp check` + build
2. `staging-deploy`: `vpx void deploy` to `fengmk2-staging`. Auth uses GitHub OIDC (no stored token); the token exchange is bound to this workflow file via `void github update fengmk2-staging --workflow .github/workflows/ci.yml`
3. `promote`: once the staging deploy is live, fast-forward `master` to the same commit (`--ff-only`, so a diverged master fails loudly instead of merging)

The master push then triggers the Void GitHub App, which builds in Void's container and deploys production. Pushes made by the promote job use `GITHUB_TOKEN`, which never triggers other workflows but does reach App webhooks, which is why production stays on the container executor.

Notes:

- Void OIDC only accepts push events as deploy triggers, so PRs cannot deploy previews; staging verification happens after merging to `dev`
- Each deployed page hides a build stamp in the homepage footer: select the page (Cmd+A) to reveal the deployed commit and build time
- Inspect deployments with `void project status fengmk2` or `void project status fengmk2-staging`, runtime logs with `void project logs`
- The CI test job caches vite-task results (`node_modules/.vite/task-cache`) for the `build` and `check` tasks via GitHub Actions cache, so commits that do not touch their inputs replay in under a second; deploys build fresh through `void deploy` and never use this cache
