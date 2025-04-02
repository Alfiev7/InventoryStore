import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa6';

export default function InventoryTable({ items, onItemClick, onDeleteItem }) {
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleConfirmDelete = () => {
    onDeleteItem(itemToDelete.id);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setItemToDelete(null);
  };

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
          {params.value.map((color, index) => (
            <div key={index} className="w-5 h-5 rounded-md border border-gray-300" style={{ backgroundColor: color }} />
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
          <img src={params.value} alt="Preview" className="w-12 h-12 object-cover rounded-md border border-gray-300" />
        </div>
      ),
    },
    { field: 'addedDate', headerName: 'Added Date', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div className="flex justify-center items-center w-full h-full gap-3">
          <button
            className="text-red-600 hover:underline text-sm cursor-pointer hover:text-red-800"
            onClick={(e) => {
              e.stopPropagation();
              setItemToDelete(params.row);
            }}
          >
            <FaTrash size={16} />
          </button>
          <button
            className="text-blue-600 hover:underline text-sm cursor-pointer hover:text-blue-800"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FaPen size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl border border-gray-200">
      <DataGrid
        rows={items.map((item) => ({ ...item, id: item.id }))}
        rowCount={items.length}
        columns={[...columns]}
        onRowClick={(params) => onItemClick(params.row.id)}
        className="mui-table"
        autoHeight
        disableRowSelectionOnClick
      />
      {itemToDelete && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-[350px] space-y-4 text-center">
            <p className="text-lg font-medium">
              Are you sure you want to delete <span className="text-red-600 font-semibold">"{itemToDelete.name}"</span>?
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-800"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
