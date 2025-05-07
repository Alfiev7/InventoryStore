import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryTable from '../components/Inventory/InventoryTable';
import { useInventory } from '../context/InventoryContext';
import ItemModal from '../components/modal/ItemModal';
import ConfirmModal from '../components/modal/ConfirmModal';
import toast from 'react-hot-toast';
import useModal from '../hooks/useModal';

export default function Inventory() {
  const navigate = useNavigate();
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const { items, addItem, removeItem, updateItem } = useInventory();
  const addModal = useModal();
  const editModal = useModal();
  const confirmModal = useModal();

  const onItemClick = (itemId) => {
    navigate(`/itemDetails/${itemId}`);
  };

  const handleAddItem = (newItem) => {
    addItem(newItem);
    toast.success('Item added!');
    addModal.close();
  };

  const handleEditClick = (itemId) => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      setItemToEdit(item);
      editModal.open();
    }
  };

  const handleUpdateItem = (updatedItem) => {
    updateItem(updatedItem);
    toast.success('Item updated!');
    editModal.close();
    setItemToEdit(null);
  };

  const handleDeleteClick = (itemId) => {
    setItemIdToDelete(itemId);
    confirmModal.open();
  };

  const confirmDelete = () => {
    removeItem(itemIdToDelete);
    toast.success('Item deleted!');
    confirmModal.close();
    setItemIdToDelete(null);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Inventory</h2>
      <InventoryTable
        items={items}
        onItemClick={onItemClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />

      <button
        onClick={addModal.open}
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
      >
        Add New Item
      </button>

      {addModal.isOpen && <ItemModal mode="new" onClose={addModal.close} onSubmit={handleAddItem} />}

      {editModal.isOpen && itemToEdit && (
        <ItemModal
          mode="edit"
          existingItem={itemToEdit}
          onClose={() => {
            editModal.close();
            setItemToEdit(null);
          }}
          onSubmit={handleUpdateItem}
        />
      )}

      {confirmModal.isOpen && (
        <ConfirmModal
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={() => {
            confirmModal.close();
            setItemIdToDelete(null);
          }}
        />
      )}
    </div>
  );
}
