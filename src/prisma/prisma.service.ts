import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';
import { env } from 'prisma/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = env('DATABASE_URL');
    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}
