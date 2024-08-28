import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MinhaHome from './home';
import MinhaOferta from './Oferta';


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<MinhaHome/>} />
        <Route path='/oferta' element={<MinhaOferta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);


