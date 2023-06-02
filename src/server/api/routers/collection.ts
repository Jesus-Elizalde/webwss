import { createTRPCRouter, protectedProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from "zod";

export const defaultCollectionSelect =
  Prisma.validator<Prisma.CollectionSelect>()({
    id: true,
    name: true,
    slug: true,
    description: true,
    products: {
      select: {
        id: true,
        title: true,
      },
    },
  });

export const collectionRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.collection.findMany({
      select: defaultCollectionSelect,
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        slug: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.collection.create({
        data: {
          name: input.name,
          description: input.description,
          slug: input.slug,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.string().optional().nullable(),
        slug: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.collection.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          slug: input.slug,
        },
      });
    }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.collection.findUnique({
        where: { id: +id },
        select: defaultCollectionSelect,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.collection.delete({
        where: {
          id: +input.id,
        },
      });
    }),
});
