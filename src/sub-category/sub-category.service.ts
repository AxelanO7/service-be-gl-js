import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'src/prisma';

@Injectable()
export class SubCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubCategoryDto: CreateSubCategoryDto) {
    return await this.prisma.subCategory.create({
      data: createSubCategoryDto as Prisma.SubCategoryCreateInput,
    });
  }

  async findAll() {
    return await this.prisma.subCategory.findMany();
  }

  // async findOne(id: string) {
  //   return await this.prisma.subCategory.findUnique({
  //     where: { id },
  //   });
  // }

  // async update(id: string, updateSubCategoryDto: UpdateSubCategoryDto) {
  //   return await this.prisma.subCategory.update({
  //     where: { id },
  //     data: updateSubCategoryDto as Prisma.SubCategoryUpdateInput,
  //   });
  // }

  // async remove(id: string) {
  //   return await this.prisma.subCategory.delete({
  //     where: { id },
  //   });
  // }
}
