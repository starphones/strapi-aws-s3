---
name: strapi-safe-maintenance
description: Inspect, diagnose, and maintain this Strapi application while preserving its installed Strapi version. Use for work in the strapi-aws-s3 repository; do not use for upgrading Strapi or its official packages unless the user explicitly changes that constraint.
---

# Strapi Safe Maintenance

Work in this repository as a Strapi 5 application while preserving the existing dependency baseline.

## Version invariant

- The current `@strapi/strapi` version is exactly `5.10.4` in both `package.json` and `yarn.lock`.
- Do not change Strapi's version or run dependency-update commands unless the user explicitly authorizes an upgrade in the current request.
- Keep official Strapi packages compatible with the existing baseline. Do not alter their declared versions as a side effect of unrelated work.
- Before dependency-related work, inspect both `package.json` and `yarn.lock`. Treat an unexpected mismatch or version change as something to report, not silently repair.

## Working approach

- Preserve the Yarn lockfile and use the repository's existing scripts and package manager.
- Inspect relevant schemas, controllers, services, routes, configuration, and generated types before proposing changes.
- Make only changes required by the user's request. Do not regenerate content types, reinstall dependencies, run migrations, or modify deployed data unless the task requires it and the user has authorized the effect.
- Prefer read-only checks when the user asks to inspect, diagnose, or report.
- When changes are requested, validate them with the narrowest relevant checks without triggering upgrades or lockfile rewrites.

## Reporting

State whether `package.json` and `yarn.lock` still resolve `@strapi/strapi` to `5.10.4`, and call out any dependency or generated-file changes separately.
