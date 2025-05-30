import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  // async create(createCategoryDto: CreateCategoryDto) {
  //   return await this.prisma.category.create({
  //     data: createCategoryDto as Prisma.CategoryCreateInput,
  //   });
  // }
  // async findAll() {
  //   return await this.prisma.category.findMany();
  // }
  // async findOne(id: string) {
  //   return await this.prisma.category.findUnique({
  //     where: { id },
  //   });
  // }
  // async update(id: string, updateCategoryDto: UpdateCategoryDto) {
  //   return await this.prisma.category.update({
  //     where: { id },
  //     data: updateCategoryDto as Prisma.CategoryUpdateInput,
  //   });
  // }
  // async remove(id: string) {
  //   return await this.prisma.category.delete({
  //     where: { id },
  //   });
  // }
}
