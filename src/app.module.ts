import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ServiceModule } from './service/service.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { LocationModule } from './location/location.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [CategoryModule, SubCategoryModule, LocationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
