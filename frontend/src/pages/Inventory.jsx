import InventoryTable from '../components/Inventory/InventoryTable';
import { useNavigate } from 'react-router-dom';
export default function Inventory() {
  const navigate = useNavigate()

  const onItemClick = (itemId) => {
    navigate(`/itemDetails/${itemId}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-purple-700 mb-6">Inventory</h2>
      <InventoryTable onItemClick={onItemClick} />
    </div>
  );
}
