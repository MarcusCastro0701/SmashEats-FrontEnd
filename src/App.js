import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import KitchenHome from './pages/home/KitchenHome';
import OrdersHome from './pages/home/OrdersHome';
import TakeoutHome from './pages/home/TakeoutHome';

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        z-index={800}
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<OrdersHome />} />
          <Route path="/kitchen" element={<KitchenHome />} />
          <Route path="/takeout" element={<TakeoutHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
