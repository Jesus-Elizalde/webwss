import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      orderBy: [{ createdAt: "desc" }],
    });
  }),

  getByTag: publicProcedure
    .input(z.object({ tag: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.tag.findMany({
        include: { products: true },
        where: { name: input.tag },
      });
    }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findMany({
        where: { category: input.category },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        price: z.number(),
        stock: z.number(),
        category: z.string(),
        brand: z.string(),
        model: z.string(),
        color: z.string().optional(),
        size: z.string().optional(),
        images: z.string().array(),
        tags: z.string().array(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: input.stock,
          category: input.category,
          brand: input.brand,
          model: input.model,
          color: input.color,
          size: input.size,
          images: input.images.map((image) => image),
          tags: {
            connectOrCreate: input.tags.map((tag) => {
              return {
                where: { name: tag },
                create: { name: tag },
              };
            }),
          },
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.delete({
        where: {
          id: +input.id,
        },
      });
    }),
});
