import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { InventoryProvider } from './context/InventoryContext';
import AppRoutes from './route/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InventoryProvider>
          <AppRoutes />
        </InventoryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
