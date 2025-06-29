import { Controller, Get, Body, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Post()
  createItem(@Body() itemData: any) {
    return this.itemsService.createItem(itemData);
  }
}
