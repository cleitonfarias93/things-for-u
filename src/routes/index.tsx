import React from 'react';

// Pages
import App from 'pages/App';
import ProductList from 'pages/ProductList';

import { Routes, Route } from 'react-router-dom';

const RoutesComponents: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="product-list" element={<ProductList />} />
    </Route>
  </Routes>
);
export default RoutesComponents;
