# monorepo-repro

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines React, TanStack Start, Hono, ORPC, and more.

## Zshy Repro

Custom conditions added to apps/server and apps/web tsconfig/vite.config. Package.json updated in apps/server as well with zshy config.
1. Go to `apps/web/src/zshy-test.ts`, see that `.ts` extension required for imports that were built with glob pattern, but not for files using direct reference like to an `index.ts`


```ts
import { db } from "server/db";
import { publicProcedure } from "server/lib/orpc.ts";

// import { publicProcedure } from "server/lib/orpc"; // error
````

## Preferred Behavior

Keep things consistent, for example always require `.ts` extension or configure so it's not needed (this is personally my preference).
