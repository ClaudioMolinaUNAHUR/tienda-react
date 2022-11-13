import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import Main from './components/Main';
import Search from './routes/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';
import Carrito from './routes/Carrito';

import CarritoProvider from './context/CarritoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CarritoProvider>
      <Routes> {/* Routes: dentro va a contener Route */}
        <Route path='/' element={<App />}>  {/* ruta padre y sus anidadas */}
              <Route index element={<Main />}/> 
              <Route path='search' element={<Search/>}/>
              <Route path='carrito' element={<Carrito/>}/>
        </Route>    
      </Routes>
    </CarritoProvider>
  </BrowserRouter>
)