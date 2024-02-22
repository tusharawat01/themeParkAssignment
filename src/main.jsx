import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Market from './components/market/Market';
import Cart from './components/cart/Cart.jsx';
import Setting from './components/setting/Setting.jsx';
import Logout from './components/logout/Logout.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Market />} />
      <Route path='cart' element={<Cart />} />
      <Route path='settings' element={<Setting />} />
      <Route path='logout' element={<Logout />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
