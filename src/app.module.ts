import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatalogModule } from './catalog/catalog.module';
import { PrismaModule } from './prisma';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, CatalogModule],
})
export class AppModule {}
