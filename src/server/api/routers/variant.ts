import { z } from "zod";
import { CollectionType, Prisma, ProductColor } from "@prisma/client";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { defaultCollectionSelect } from "./collection";

// const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
//   id: true,
//   name: true,
//   description: true,
//   price: true,
//   rate: true,
//   model: true,
//   types: true,
//   variants: true,
//   collection: {
//     select: defaultCollectionSelect,
//   },
// });

export const variantRouter = createTRPCRouter({
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.delete({
        where: {
          id: +input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        barcode: z.string().optional(),
        modelNum: z.string().optional(),
        published: z.boolean(),
        colors: z.nativeEnum(ProductColor).array().optional(),
        detailedColors: z.string().array(),
        size: z.string(),
        description: z.string().optional(),
        stock: z.number(),
        price: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.productVariant.create({
        data: {
          barcode: input.barcode,
          modelNum: input.modelNum,
          published: input.published,
          size: input.size,
          description: input.description,
          stock: input.stock,
          price: input.price,
          product: {
            connect: {
              id: +input.productId,
            },
          },
        },
      });
    }),
});
