import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', flex: 2 },
  {
    field: 'price',
    headerName: 'Price ($)',
    flex: 1,
    renderCell: (params) => `$${params.value.toFixed(2)}`,
  },
  {
    field: 'color',
    headerName: 'Color',
    flex: 1,
    renderCell: (params) => (
      <div className="flex justify-center items-center h-full w-full">
        <div className="w-5 h-5 rounded-md border border-gray-300" style={{ backgroundColor: params.value }} />
      </div>
    ),
  },
  { field: 'category', headerName: 'Category', flex: 2 },
];

export default function OrderItemsTable({ orderItems }) {
  return (
    <div className="p-6 w-full max-w-7xl mx-auto mt-5 flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Items in the Order</h1>
      <div className="w-full">
        <DataGrid
          rows={orderItems.map((item) => ({ ...item, id: item.id }))}
          columns={columns}
          rowCount={orderItems.length}
          className="mui-table"
          autoHeight
        />
      </div>
    </div>
  );
}
