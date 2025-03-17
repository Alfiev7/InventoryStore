import { DataGrid } from '@mui/x-data-grid';
import { mockOrders } from '../../mocks/data/mockOrders';

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'totalAmount', headerName: 'Total Amount ($)', flex: 1 },
  { field: 'itemsAmount', headerName: 'Items Amount', flex: 1 },
  { field: 'date', headerName: 'Date', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'city', headerName: 'City', flex: 1 },
  { field: 'phone', headerName: 'Phone Number', flex: 1 },
  { field: 'country', headerName: 'Country', flex: 1 },
];

export default function OrdersTable({ onOrderClick }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl border border-gray-200">
      <DataGrid
        rows={mockOrders.map((order) => ({ ...order, id: order.id }))}
        rowCount={mockOrders.length}
        columns={columns}
        onRowClick={(params) => onOrderClick(params.row.id)}
        className="mui-table"
      />
    </div>
  );
}
