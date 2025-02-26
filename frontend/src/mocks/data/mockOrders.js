export const mockOrders = [
  {
    id: 1,
    name: "John Doe",
    items: [
      { id: 101, name: "Bluetooth Speaker", price: 50, category: "Electronics", color: "Black" },
      { id: 102, name: "Wireless Mouse", price: 25, category: "Accessories", color: "Gray" },
      { id: 103, name: "USB-C Cable", price: 10, category: "Accessories", color: "White" },
    ],
    date: "2025-02-14",
    address: "123 Main St",
    city: "New York",
    phone: "+1 123 456 7890",
    country: "USA",
    coupons: [
      { id: 1001, name: "SPRING10", information: "10% off your order" }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    items: [
      { id: 104, name: "Smartphone Stand", price: 20, category: "Accessories", color: "Silver" },
      { id: 101, name: "Bluetooth Speaker", price: 50, category: "Electronics", color: "Black" },
      { id: 105, name: "Notebook", price: 15, category: "Stationery", color: "Blue" },
    ],
    date: "2025-02-13",
    address: "456 Oak St",
    city: "Los Angeles",
    phone: "+1 987 654 3210",
    country: "USA",
    coupons: [
      { id: 999, name: "WINTER15OFF", information: "15% off all store" }
    ]
  },
  {
    id: 3,
    name: "Michael Johnson",
    items: [
      { id: 106, name: "Gaming Keyboard", price: 70, category: "Electronics", color: "RGB" },
      { id: 103, name: "USB-C Cable", price: 10, category: "Accessories", color: "White" },
    ],
    date: "2025-02-12",
    address: "789 Pine Ave",
    city: "Chicago",
    phone: "+1 555 333 2222",
    country: "USA",
    coupons: [
      { id: 1002, name: "SUMMER5", information: "5% off your order" }
    ]
  },
  {
    id: 4,
    name: "Emily Davis",
    items: [
      { id: 107, name: "Laptop Stand", price: 40, category: "Accessories", color: "Black" },
      { id: 104, name: "Smartphone Stand", price: 20, category: "Accessories", color: "Silver" },
      { id: 108, name: "Office Chair", price: 200, category: "Furniture", color: "Gray" },
    ],
    date: "2025-02-11",
    address: "321 Cedar St",
    city: "San Francisco",
    phone: "+1 444 222 1111",
    country: "USA",
    coupons: [
      { id: 1003, name: "FALL20", information: "20% off your order" }
    ]
  },
  {
    id: 5,
    name: "William Brown",
    items: [
      { id: 109, name: "External Hard Drive", price: 80, category: "Storage", color: "Black" },
      { id: 101, name: "Bluetooth Speaker", price: 50, category: "Electronics", color: "Black" },
      { id: 110, name: "Headphones", price: 60, category: "Audio", color: "Red" },
    ],
    date: "2025-02-10",
    address: "654 Maple Rd",
    city: "Houston",
    phone: "+1 777 888 9999",
    country: "USA",
    coupons: [
      { id: 1004, name: "NEW25", information: "25% off your first order" }
    ]
  },
  {
    id: 6,
    name: "Sophia Martinez",
    items: [
      { id: 103, name: "USB-C Cable", price: 10, category: "Accessories", color: "White" },
      { id: 111, name: "Power Bank", price: 40, category: "Electronics", color: "Black" },
      { id: 102, name: "Wireless Mouse", price: 25, category: "Accessories", color: "Gray" },
    ],
    date: "2025-02-09",
    address: "987 Birch Ln",
    city: "Miami",
    phone: "+1 666 555 4444",
    country: "USA",
    coupons: [
      { id: 1005, name: "VIP30", information: "30% off your order" }
    ]
  },
];

mockOrders.forEach(order => {
  order.itemsAmount = order.items.length;
  order.totalAmount = order.items.reduce((sum, item) => sum + (item.price || 0), 0);
});
