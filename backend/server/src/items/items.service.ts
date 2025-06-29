import { Injectable } from '@nestjs/common';
import MockItems from './mock-items.json';

let items = [...MockItems];

@Injectable()
export class ItemsService {
  getAllItems() {
    return items;
  }

  createItem(itemData: any) {
    const newItem = { ...itemData, id: items.length + 1 };
    items.push(newItem);
    return newItem;
  }
}
