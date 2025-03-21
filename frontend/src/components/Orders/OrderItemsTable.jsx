import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', flex: 2 },
  { field: 'price', headerName: 'Price ($)', flex: 1 },
  { field: 'color', headerName: 'Color', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 2 },
];

export default function OrderItemsTable({ orderItems }) {
  return (
    <div className="p-6 w-full mt-5 flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Items in the order</h1>
      <DataGrid rows={orderItems.map((item) => ({ ...item, id: item.id }))} 
      columns={columns}
      rowCount={orderItems.length}
      className="mui-table" />
    </div>
  );
}
