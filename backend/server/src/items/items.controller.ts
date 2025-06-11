import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }
}
