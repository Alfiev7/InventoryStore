import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
    renderCell: (params) => `$${params.value.toFixed(2)}`
  },
  {
    field: 'availableColors',
    headerName: 'Available Colors',
    flex: 1,
    renderCell: (params) => (
      <div className="flex justify-center items-center h-full w-full gap-1">
        {params.value.map((color, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded-md border border-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    ),
  },
  {
    field: 'previewImage',
    headerName: 'Preview Image',
    flex: 1,
    renderCell: (params) => (
      <div className="flex justify-center items-center h-full w-full">
        <img
          src={params.value}
          alt="Preview"
          className="w-12 h-12 object-cover rounded-md border border-gray-300"
        />
      </div>
    ),
  },
  { field: 'addedDate', headerName: 'Added Date', flex: 1 },
];

export default function InventoryTable({ items, onItemClick }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl border border-gray-200">
      <DataGrid
        rows={items.map((item) => ({ ...item, id: item.id }))}
        rowCount={items.length}
        columns={columns}
        onRowClick={(params) => onItemClick(params.row.id)}
        className="mui-table"
        autoHeight
        disableRowSelectionOnClick
      />
    </div>
  );
}
