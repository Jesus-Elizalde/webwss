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

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      orderBy: [{ createdAt: "desc" }],
    });
  }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.product.findUnique({
        where: { id: +id },
        include: { variants: true },
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

  // Flitered for the storefront
  // all: publicProcedure
  //   .input(
  //     z.object({
  //       types: z.nativeEnum(CollectionType).optional(),
  //       slug: z.string().optional(),
  //       page: z.number().optional(),
  //       rate: z.number().optional(),
  //       gte: z.number().optional(),
  //       lte: z.number().optional(),
  //       sizes: z.nativeEnum(ProductSize).array().optional(),
  //       colors: z.nativeEnum(ProductColor).array().optional(),
  //     })
  //   )
  //   .query(async ({ input, ctx }) => {
  //     const {
  //       types = "MEN",
  //       slug,
  //       page = 1,
  //       rate = 0,
  //       gte = 0,
  //       lte = 1000000,
  //       sizes = [],
  //       colors = [],
  //     } = input;

  //     const take = 12;
  //     const skip = take * (page - 1);

  //     const where: Prisma.ProductWhereInput = {
  //       types: { hasSome: types },

  //       // published: true,
  //       rate: rate ? { gte: rate } : undefined,
  //       price: { gte, lte },
  //       // sizes: sizes.length > 0 ? { hasSome: sizes } : undefined,
  //       // colors: colors.length > 0 ? { hasSome: colors } : undefined,
  //     };

  //     if (slug) {
  //       const isParent = await ctx.prisma.collection.findFirst({
  //         where: {
  //           slug,
  //           parent: {
  //             is: null,
  //           },
  //         },
  //       });

  //       where.collection = isParent ? { parentId: isParent.id } : { slug };
  //     }

  //     const [products, totalCount] = await ctx.prisma.$transaction([
  //       ctx.prisma.product.findMany({
  //         select: defaultProductSelect,
  //         where,
  //         orderBy: { id: "asc" },
  //         take,
  //         skip,
  //       }),
  //       ctx.prisma.product.count({ where }),
  //     ]);

  //     return {
  //       products,
  //       totalCount,
  //     };
  //   }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        variants: z.array(
          z.object({
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
        ),
        modelId: z.number(),
        types: z.nativeEnum(CollectionType).array(),
        collectionId: z.number(),
        // rate: z.number(),
        // published: z.boolean(),
        // colors: z.nativeEnum(ProductColor).array().optional(),
        // sizes: z.nativeEnum(ProductSize).array(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          variants: {
            createMany: {
              data: input.variants.map((variant) => {
                return {
                  barcode: variant.barcode,
                  modelNum: variant.modelNum,
                  published: variant.published,
                  colors: variant.colors,
                  detailedColors: variant.detailedColors,
                  size: variant.size,
                  description: variant.description,
                  stock: variant.stock,
                  price: variant.price,
                };
              }),
            },
          },
          model: {
            connect: {
              id: input.modelId,
            },
          },
          collection: {
            connect: {
              id: input.collectionId,
            },
          },
          types: input.types,
        },
      });
    }),
});
