import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";

export const defaultCollectionSelect =
  Prisma.validator<Prisma.CollectionSelect>()({
    id: true,
    name: true,
    slug: true,
    types: true,
    children: {
      select: {
        id: true,
        name: true,
        slug: true,
        types: true,
      },
    },
  });

export const collectionRouter = createTRPCRouter({
  all: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.collection.findMany({
        select: defaultCollectionSelect,
        where: {
          parent: null,
        },
        orderBy: { id: "asc" },
      })
  ),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.collection.findMany({
      select: defaultCollectionSelect,
    });
  }),
});
