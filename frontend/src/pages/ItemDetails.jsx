import { useParams } from 'react-router-dom';
import { items } from '../mocks/data/items';
import Header from '../components/header/Header';
import ItemInfo from '../components/Items/ItemInfo';
import CardLayout from '../components/card-layout/CardLayout';

export default function ItemDetails() {
  const { item_id } = useParams();
  const item = items.find((item) => item.id === parseInt(item_id));

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
