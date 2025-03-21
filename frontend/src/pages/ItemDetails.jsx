import { useParams } from 'react-router-dom';
import { items } from '../mocks/data/items';
import Header from '../components/header/Header';

export default function ItemDetails() {
  const { item_id } = useParams();
  const item = items.find((item) => item.id === parseInt(item_id));
  return (
    <div>
      <Header>{item.name}</Header>
    </div>
  );
}
