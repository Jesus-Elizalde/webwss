import { z } from "zod";
import { Prisma } from "@prisma/client";
import { publicProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  title: true,
  description: true,
  status: true,
  tags: true,
  images: true,
  variants: true,
  vendor: {
    select: {
      name: true,
    },
  },
  productType: {
    select: {
      name: true,
    },
  },
  collections: {
    select: {
      id: true,
      name: true,
    },
  },
});

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      orderBy: [{ createdAt: "desc" }],
      select: defaultProductSelect,
    });
  }),

  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.product.findUnique({
        where: { id: +id },
        select: defaultProductSelect,
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

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        status: z.string(),
        collections: z.string().array(),
        vendor: z.string().optional(),
        productType: z.string().optional(),
        tags: z.string().array(),
        images: z.string().array(),
        variants: z
          .object({
            title: z.string().optional(),
            sku: z.string().optional(),
            barcode: z.string().optional(),
            price: z.number(),
            compareAtPrice: z.number().optional(),
            taxable: z.boolean(),
            stock: z.number(),
            color: z.string(),
            size: z.string(),
          })
          .array(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: {
          title: input.title,
          description: input.description,
          status: input.status,
          vendor: input.vendor
            ? {
                connectOrCreate: {
                  where: { name: input.vendor },
                  create: { name: input.vendor },
                },
              }
            : undefined,
          collections: {
            connect: input.collections.map((collectionId) => {
              return { id: +collectionId };
            }),
          },
          productType: input.productType
            ? {
                connectOrCreate: {
                  where: { name: input.productType },
                  create: { name: input.productType },
                },
              }
            : undefined,
          tags: {
            connect: input.tags.map((tag) => {
              return { name: tag };
            }),
          },
          images: {
            connectOrCreate: input.images.map((imageUrl) => {
              return {
                where: { url: imageUrl },
                create: { url: imageUrl },
              };
            }),
          },

          variants: {
            create: input.variants.map((variant) => variant),
          },
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string().optional(),
        status: z.string(),
        collections: z.string().array(),
        vendor: z.string().optional(),
        productType: z.string().optional(),
        tags: z.string().array(),
        images: z.string().array(),
        variants: z
          .object({
            title: z.string().optional(),
            sku: z.string().optional(),
            barcode: z.string().optional(),
            price: z.number(),
            compareAtPrice: z.number().nullable(),
            taxable: z.boolean(),
            stock: z.number(),
            color: z.string(),
            size: z.string(),
          })
          .array(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: { id: input.id },
        data: {
          title: input.title,
          description: input.description,
          status: input.status,
          vendor: input.vendor
            ? {
                connectOrCreate: {
                  where: { name: input.vendor },
                  create: { name: input.vendor },
                },
              }
            : undefined,
          collections: {
            connect: input.collections.map((collectionId) => {
              return { id: +collectionId };
            }),
          },
          productType: input.productType
            ? {
                connectOrCreate: {
                  where: { name: input.productType },
                  create: { name: input.productType },
                },
              }
            : undefined,
          tags: {
            connect: input.tags.map((tag) => {
              return { name: tag };
            }),
          },
          images: {
            connectOrCreate: input.images.map((imageUrl) => {
              return {
                where: { url: imageUrl },
                create: { url: imageUrl },
              };
            }),
          },

          variants: {
            create: input.variants.map((variant) => variant),
          },
        },
      });
    }),
});
