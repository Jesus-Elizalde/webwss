import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { productRouter } from "./routers/product";
import { collectionRouter } from "./routers/collection";
import { modelRouter } from "./routers/model";
import { brandRouter } from "./routers/brand";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  product: productRouter,
  collection: collectionRouter,
  model: modelRouter,
  brand: brandRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
