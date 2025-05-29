import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { CategoryModule } from './category/category.module';
import { PriceModule } from './price/price.module';
import { LocationModule } from './location/location.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [SubCategoryModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
