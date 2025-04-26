import { createContext, useContext, useState } from 'react';
import { items as mockItems } from '../mocks/data/items';

const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [items, setItems] = useState(mockItems);

  const addItem = (item) => setItems((prev) => [...prev, item]);
  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateItem = (updatedItem) =>
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

  return (
    <InventoryContext.Provider value={{ items, addItem, removeItem, updateItem }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  return useContext(InventoryContext);
}
