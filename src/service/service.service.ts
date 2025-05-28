import { Injectable } from '@nestjs/common';

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
    return this.prisma.service.delete({
      where: { id },
    });
  }
}
