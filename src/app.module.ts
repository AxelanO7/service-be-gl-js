import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ServiceModule } from './service/service.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ServiceModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
