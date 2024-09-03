import { PrismaClient } from '@prisma/client';

// Singleton pattern to ensure only one instance of PrismaClient is created
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
};

// Declare global variable to store PrismaClient instance
declare const global: {
  prisma?: PrismaClient;
};

// Export a single instance of PrismaClient for serverless environments
const prisma =
  global.prisma ||
  prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
