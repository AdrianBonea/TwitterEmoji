import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "y/server/api/root";
import { prisma } from "y/server/db";
import superjson from "superjson";

export const generateSSGHelper = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson, // optional - adds superjson serialization
  });
