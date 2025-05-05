import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryTable from '../components/Inventory/InventoryTable';
import { useInventory } from '../context/InventoryContext';
import ItemModal from '../components/modal/ItemModal';
import ConfirmModal from '../components/modal/ConfirmModal';
import toast from 'react-hot-toast';

export default function Inventory() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const { items, addItem, removeItem, updateItem } = useInventory();

  const onItemClick = (itemId) => {
    navigate(`/itemDetails/${itemId}`);
  };

  const handleAddItem = (newItem) => {
    addItem(newItem);
    toast.success('Item added!');
    setShowModal(false);
  };

  const handleEditClick = (itemId) => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      setItemToEdit(item);
      setEditModalOpen(true);
    }
  };

  const handleUpdateItem = (updatedItem) => {
    updateItem(updatedItem);
    toast.success('Item updated!');
    setEditModalOpen(false);
    setItemToEdit(null);
  };

  const handleDeleteClick = (itemId) => {
    setItemIdToDelete(itemId);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    removeItem(itemIdToDelete);
    toast.success('Item deleted!');
    setConfirmOpen(false);
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
        onClick={() => setShowModal(true)}
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
      >
        Add New Item
      </button>

      {showModal && <ItemModal mode="new" onClose={() => setShowModal(false)} onSubmit={handleAddItem} />}

      {editModalOpen && itemToEdit && (
        <ItemModal
          mode="edit"
          existingItem={itemToEdit}
          onClose={() => {
            setEditModalOpen(false);
            setItemToEdit(null);
          }}
          onSubmit={handleUpdateItem}
        />
      )}

      {confirmOpen && (
        <ConfirmModal
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={() => {
            setConfirmOpen(false);
            setItemIdToDelete(null);
          }}
        />
      )}
    </div>
  );
}
