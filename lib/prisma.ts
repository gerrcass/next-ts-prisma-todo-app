import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}
/* const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
} */
/* export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] }) */
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma
//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
