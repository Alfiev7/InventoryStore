import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useInventory } from '../context/InventoryContext';
import Header from '../components/header/Header';
import ItemInfo from '../components/Items/ItemInfo';
import CardLayout from '../components/card-layout/CardLayout';

export default function ItemDetails() {
  const { item_id } = useParams();
  const { items } = useInventory();

  const item = useMemo(() => {
    return items.find((item) => item.id === parseInt(item_id));
  }, [item_id, items]); 

  if (!item) return <div>Item not found</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <CardLayout>
        <Header>{item.name}</Header>
        <ItemInfo item={item} />
      </CardLayout>
    </div>
  );
}
