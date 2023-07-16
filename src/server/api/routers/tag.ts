import { createTRPCRouter, protectedProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
// import { z } from "zod";

export const defaultTagSelect = Prisma.validator<Prisma.ProductTagSelect>()({
  id: true,
  name: true,
});

export const productTagRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.productTag.findMany({
      select: defaultTagSelect,
    });
  }),

  // getOne: protectedProcedure
  //   .input(z.object({ id: z.string() }))
  //   .query(({ ctx, input }) => {
  //     const { id } = input;
  //     return ctx.prisma.productTag.findUnique({
  //       where: { id: +id },
  //       select: defaultTagSelect,
  //     });
  //   }),

  // delete: protectedProcedure
  //   .input(z.object({ id: z.string() }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.prisma.productTag.delete({
  //       where: {
  //         id: +input.id,
  //       },
  //     });
  //   }),
});
