import { items } from './items.js';

export const mockOrders = [
  {
    id: 1,
    name: 'John Doe',
    items: [{ id: 1001, color: '#000000' }], 
    date: '2025-02-14',
    address: '123 Main St',
    city: 'New York',
    phone: '+1 123 456 7890',
    country: 'USA',
    coupons: [{ id: 1001, name: 'SPRING10', information: '10% off your order' }],
  },
  {
    id: 2,
    name: 'Jane Smith',
    items: [
      { id: 1004, color: '#808080' }, 
      { id: 1001, color: '#FF0000' }, 
    ],
    date: '2025-02-13',
    address: '456 Oak St',
    city: 'Los Angeles',
    phone: '+1 987 654 3210',
    country: 'USA',
    coupons: [{ id: 999, name: 'WINTER15OFF', information: '15% off all store' }],
  },
  {
    id: 3,
    name: 'Michael Johnson',
    items: [
      { id: 1002, color: '#00FF00' }, 
      { id: 1003, color: '#1E90FF' }, 
    ],
    date: '2025-02-12',
    address: '789 Pine Ave',
    city: 'Chicago',
    phone: '+1 555 333 2222',
    country: 'USA',
    coupons: [{ id: 1002, name: 'SUMMER5', information: '5% off your order' }],
  },
  {
    id: 4,
    name: 'Emily Davis',
    items: [{ id: 1002, color: '#FFFFFF' }],
    date: '2025-02-11',
    address: '321 Cedar St',
    city: 'San Francisco',
    phone: '+1 444 222 1111',
    country: 'USA',
    coupons: [{ id: 1003, name: 'FALL20', information: '20% off your order' }],
  },
  {
    id: 5,
    name: 'William Brown',
    items: [
      { id: 1003, color: '#FF4500' },
      { id: 1005, color: '#000000' }, 
    ],
    date: '2025-02-10',
    address: '654 Maple Rd',
    city: 'Houston',
    phone: '+1 777 888 9999',
    country: 'USA',
    coupons: [{ id: 1004, name: 'NEW25', information: '25% off your first order' }],
  },
  {
    id: 6,
    name: 'Sophia Martinez',
    items: [
      { id: 1003, color: '#32CD32' }, 
      { id: 1004, color: '#000000' }, 
    ],
    date: '2025-02-09',
    address: '987 Birch Ln',
    city: 'Miami',
    phone: '+1 666 555 4444',
    country: 'USA',
    coupons: [{ id: 1005, name: 'VIP30', information: '30% off your order' }],
  },
];


mockOrders.forEach((order) => {
  order.items = order.items.map((orderedItem) => {
    const foundItem = items.find((i) => i.id === orderedItem.id);
    return foundItem
      ? { ...foundItem, color: orderedItem.color }
      : { id: orderedItem.id, name: 'Unknown', price: 0, color: orderedItem.color };
  });


  order.totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);
  order.itemsAmount = order.items.length;
});

export default mockOrders;
