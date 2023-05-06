import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const defualtModelSelect = Prisma.validator<Prisma.ModelSelect>()({
  id: true,
  name: true,
});

export const modelRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.model.findMany({
      select: defualtModelSelect,
    });
  }),
});
