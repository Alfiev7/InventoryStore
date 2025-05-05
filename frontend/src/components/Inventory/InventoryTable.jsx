import { DataGrid } from '@mui/x-data-grid';
import ColorPreview from '../Items/ColorPreview';
import ImagePreview from '../Items/ImagePreview';
import { FaTrash, FaPen } from 'react-icons/fa6';

export default function InventoryTable({ items, onItemClick, onEditClick, onDeleteClick }) {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      renderCell: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      field: 'availableColors',
      headerName: 'Available Colors',
      flex: 1,
      renderCell: (params) => (
        <div className="flex justify-center items-center h-full w-full gap-1">
          <ColorPreview colors={params.value} />
        </div>
      ),
    },
    {
      field: 'previewImage',
      headerName: 'Preview Image',
      flex: 1,
      renderCell: (params) => (
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-12 h-12 rounded-md border border-gray-300 overflow-hidden">
            <ImagePreview src={params.value} />
          </div>
        </div>
      ),
    },
    { field: 'addedDate', headerName: 'Added Date', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-4 w-full h-full">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEditClick(params.row.id);
            }}
            title="Edit item"
            className="text-purple-600 hover:text-purple-800 p-1 cursor-pointer"
          >
            <FaPen className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteClick(params.row.id);
            }}
            title="Delete item"
            className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
          >
            <FaTrash className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl border border-gray-200">
      <DataGrid
        rows={items.map((item) => ({
          ...item,
          id: item.id,
        }))}
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
