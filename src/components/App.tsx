import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { AuthProvider } from './context/AuthProvider';
import ProductList from './ProductList';
import Layout from './Layout';
import Missing from './Missing';
import RequireAuth from './RequireAuth';
import Cart from './Cart';
import Product from './Product';
import Unauthorized from './Unauthorized';
import Checkout from './Checkout';

enum Role {
  user = 'ROLE_USER',
  admin = 'ROLE_ADMIN',
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<ProductList />} />
              <Route path='product/:id' element={<Product />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route element={<RequireAuth allowedRoles={[Role.user]} />}>
                <Route path='cart' element={<Cart />} />
                <Route path='checkout' element={<Checkout />} />
              </Route>

              <Route path='unauthorized' element={<Unauthorized />} />
              <Route path='*' element={<Missing />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
