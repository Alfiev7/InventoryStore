import { useState } from 'react';
import { ITEM_STORAGE_KEY } from '../../constants/localStorageKeys';
import NewItemFormFields from './NewItemFormFields';

export default function NewItemModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    previewImage: '',
    availableColors: ['#000000'],
  });

  const storedItems = JSON.parse(localStorage.getItem(ITEM_STORAGE_KEY)) || [];
  const categories = [...new Set(storedItems.map(item => item.category))];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (index, value) => {
    const updated = [...formData.availableColors];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, availableColors: updated }));
  };

  const addColor = () => {
    setFormData((prev) => ({
      ...prev,
      availableColors: [...prev.availableColors, '#000000'],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: Date.now(),
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
      addedDate: new Date().toISOString().split('T')[0],
    };
    onSubmit(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl w-[400px] shadow space-y-5">
        <h2 className="text-xl font-semibold text-center">Add New Item</h2>

        <NewItemFormFields
          formData={formData}
          handleChange={handleChange}
          categories={categories}
        />

        <div className="flex flex-col gap-2">
          <p className="text-gray-600 text-sm">Colors</p>
          <div className="flex gap-3 flex-wrap">
            {formData.availableColors.map((color, i) => (
              <input
                key={i}
                type="color"
                value={color}
                onChange={(e) => handleColorChange(i, e.target.value)}
                className="w-10 h-10 border rounded cursor-pointer"
              />
            ))}
            <button type="button" onClick={addColor} className="text-purple-600 text-sm hover:underline hover:text-purple-900">
              + Add Color
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-400">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-900">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
