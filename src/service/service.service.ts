import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.service.create({
      data: createServiceDto as Prisma.ServiceCreateInput,
    });
  }

  async findAll() {
    return await this.prisma.service.findMany();
  }

  // async findOne(id: string) {
  //   return await this.prisma.service.findUnique({
  //     where: { id },
  //   });
  // }

  // async update(id: string, updateServiceDto: UpdateServiceDto) {
  //   return await this.prisma.service.update({
  //     where: { id },
  //     data: updateServiceDto as Prisma.ServiceUpdateInput,
  //   });
  // }

  // async remove(id: string) {
  //   return await this.prisma.service.delete({
  //     where: { id },
  //   });
  // }
}
