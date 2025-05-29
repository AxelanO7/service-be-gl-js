import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  // @Post()
  // create(@Body() createPriceDto: CreatePriceDto) {
  //   return this.priceService.create(createPriceDto);
  // }

  @Get()
  findAll() {
    return this.priceService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.priceService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto) {
  //   return this.priceService.update(id, updatePriceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.priceService.remove(id);
  // }
}
