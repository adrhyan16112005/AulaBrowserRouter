import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Minha_Oferta from '.';
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <BrowserRouter>
    <Router>
      <Routes>
        <Route path='/home' element={<minha_home/>} />
        <Route path='/oferta' element={<Minha_Oferta />} />
      </Routes>
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
);


