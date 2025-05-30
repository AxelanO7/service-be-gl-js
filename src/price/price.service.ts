import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'src/prisma';
import { CreatePriceDto } from './dto/create-price.dto';

@Injectable()
export class PriceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPriceDto: CreatePriceDto) {
    return await this.prisma.price.create({
      data: createPriceDto as Prisma.PriceCreateInput,
    });
  }

  async findAll() {
    return await this.prisma.price.findMany();
  }

  // async findOne(id: string) {
  //   return await this.prisma.price.findUnique({
  //     where: { id },
  //   });
  // }

  // async update(id: string, updatePriceDto: UpdatePriceDto) {
  //   return await this.prisma.price.update({
  //     where: { id },
  //     data: updatePriceDto as Prisma.PriceUpdateInput,
  //   });
  // }

  // async remove(id: string) {
  //   return await this.prisma.price.delete({
  //     where: { id },
  //   });
  // }
}
