import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/App';
import Contato from './pages/contato/index.jsx';
import './pages/contato/index.scss';
import Nao from './pages/nao/index.jsx';  
import './pages/nao/index.scss';
import Eventos from './pages/eventos/index.jsx'; 
import './pages/eventos/index.scss';
import Formulario from './pages/formulario/index.jsx';
import './pages/formulario/index.scss';

import {  BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="*" element={<Nao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


