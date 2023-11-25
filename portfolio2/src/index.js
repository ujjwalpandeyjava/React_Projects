import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './error/Error';
import Home from './home/Home';
import './index.css';
import PageNotFound from './pageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);