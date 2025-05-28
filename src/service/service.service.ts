import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: any) {
    return this.prisma.service.create({ data });
  }

  async findAll() {
    return this.prisma.service.findMany();
  }

  async findOne(id: number) {
    return this.prisma.service.findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return this.prisma.service.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.concierge.delete({
      where: { id },
    });
  }
}
