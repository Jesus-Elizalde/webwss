import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().nullable(),
        price: z.number(),
        stock: z.number(),
        category: z.string(),
        brand: z.string(),
        model: z.string(),
        color: z.string().nullable(),
        size: z.string().nullable(),
        images: z.string().array().nullable(),
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
          images: input.name,
        },
      });
    }),
});
