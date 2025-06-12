import { Injectable } from '@nestjs/common';
import items from './mock-items.json';

@Injectable()
export class ItemsService {
  getAllItems() {
    return items;
  }
}
