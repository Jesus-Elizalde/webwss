import { z } from "zod";
import { Color } from "@prisma/client";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  getAllAdmin: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.product.findMany({
      include: {
        vendor: true,
        variants: {
          include: {
            sizes: true,
            images: true,
          },
        },
      },
    });
  }),

  getMany: publicProcedure
    .input(
      z.object({
        slug: z.string().optional(),
        colors: z.nativeEnum(Color).array().optional(),
        sizes: z.string().array().optional(),
        types: z.string().array().optional(),
        gte: z.number().optional(),
        lte: z.number().optional(),
        vendors: z.string().array().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { slug, colors, sizes, types, gte, lte, vendors } = input;

      return ctx.prisma.product.findMany({
        where: {
          collections: {
            some: {
              slug: slug,
            },
          },
          status: "ACTIVE",
          variants: {
            some: {
              generalColor: sizes ? { hasSome: colors } : undefined,
              sizes: {
                some: {
                  size: sizes
                    ? { in: sizes.map((size) => size.toUpperCase()) }
                    : undefined,
                },
              },
            },
          },
          type: types
            ? { in: types.map((type) => type.toUpperCase()) }
            : undefined,
          price: {
            gte: gte ? gte : undefined,
            lte: lte ? lte : undefined,
          },
          vendor: vendors ? { name: { in: vendors } } : undefined,
        },
        include: {
          vendor: true,
          variants: {
            include: {
              sizes: true,
              images: true,
            },
          },
        },
      });
    }),

  getfiltered: publicProcedure
    .input(z.object({ collectionName: z.string() }))
    .query(async ({ ctx, input }) => {
      const { collectionName: name } = input;
      const products = await ctx.prisma.product.findMany({
        where: {
          collections: {
            some: {
              name,
            },
          },
          variants: {
            some: {
              sizes: {
                some: {
                  stockOnline: {
                    gt: 0,
                  },
                },
              },
            },
          },
        },
        include: {
          variants: {
            where: {
              sizes: {
                some: {
                  stockOnline: {
                    gt: 0,
                  },
                },
              },
            },
            include: {
              sizes: {
                where: {
                  stockOnline: {
                    gt: 0,
                  },
                },
              },
              images: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      });

      const filteredProducts = products.filter((product) =>
        product.variants.some((variant) => variant.sizes.length > 0)
      );

      return filteredProducts;
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        status: z.string(),
        vendor: z.string(),
        type: z.string(),
        price: z.number(),
        collection: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: {
          name: input.title,
          description: input.description,
          status: "ACTIVE",
          type: input.type,
          price: input.price,
          collections: { connect: { name: input.collection } },
          vendor: {
            connectOrCreate: {
              where: { name: input.vendor },
              create: { name: input.vendor },
            },
          },
        },
      });
    }),
});
