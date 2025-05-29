import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto) {
    return await this.prisma.location.create({
      data: createLocationDto as Prisma.LocationCreateInput,
    });
  }

  async findAll() {
    return await this.prisma.location.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.location.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    return await this.prisma.location.update({
      where: { id },
      data: updateLocationDto as Prisma.LocationUpdateInput,
    });
  }

  async remove(id: string) {
    return await this.prisma.location.delete({
      where: { id },
    });
  }
}
