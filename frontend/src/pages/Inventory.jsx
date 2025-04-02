import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryTable from '../components/Inventory/InventoryTable';
import NewItemModal from '../components/Inventory/NewItemModal';
import items from '../mocks/data/items';
import { ITEM_STORAGE_KEY } from '../constants/localStorageKeys';

export default function Inventory() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemList, setItemList] = useState(() => {
    const stored = localStorage.getItem(ITEM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : items;
  });

  useEffect(() => {
    localStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(itemList));
  }, [itemList]);

  const onItemClick = (itemId) => {
    navigate(`/itemDetails/${itemId}`);
  };

  const handleAddItem = (newItem) => {
    setItemList((prev) => [...prev, newItem]);
    setShowModal(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Inventory</h2>
      <InventoryTable items={itemList} onItemClick={onItemClick} />

      <button
        onClick={() => setShowModal(true)}
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
      >
        Add New Item
      </button>

      {showModal && <NewItemModal onClose={() => setShowModal(false)} onSubmit={handleAddItem} />}
    </div>
  );
}
