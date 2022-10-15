import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './pages/Register';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sign from './pages/Sign'
import { ProductContextProvider } from './context/ProductContext';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Navbar />
          <Header />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/register' element={<Register />} />
            <Route path='/signin' element={<Sign />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:id' element={<Single />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
