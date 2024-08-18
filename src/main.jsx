import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <BrowserRouter>
    <Router>
      <Routes>
        <Route path='/home' element={<Layout />} />
        <Route path='/oferta' element={<Layout />} />
      </Routes>
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
);


