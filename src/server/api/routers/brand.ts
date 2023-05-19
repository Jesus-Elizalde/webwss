import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const defualtBrandSelect = Prisma.validator<Prisma.BrandSelect>()({
  id: true,
  name: true,
  models: {
    select: {
      id: true,
      name: true,
    },
  },
});

export const brandRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.brand.findMany({
      select: defualtBrandSelect,
    });
  }),
});
