import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { InventoryProvider } from './context/InventoryContext';
import AppRoutes from './route/AppRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InventoryProvider>
          <AppRoutes />
          <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        </InventoryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
