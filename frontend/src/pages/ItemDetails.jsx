import { useParams } from 'react-router-dom';
import { items } from '../mocks/data/items';

export default function ItemDetails() {
  const { item_id } = useParams();
  const item = items.find((item) => item.id === parseInt(item_id));
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}
