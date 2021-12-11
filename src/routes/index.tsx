import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import ProductList from 'pages/ProductList';

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
  </Routes>
);

export default RoutesComponent;
