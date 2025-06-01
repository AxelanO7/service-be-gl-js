import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { PriceModule } from './price/price.module';
import { LocationModule } from './location/location.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [
    CategoryModule,
    SubCategoryModule,
    LocationModule,
    PriceModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [PrismaModule],
})
export class AppModule {}
