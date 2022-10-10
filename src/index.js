import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './pages/Register';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sign from './pages/Sign'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Sign />} />

        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
