import React from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <ProductCard
        name="Wireless Headphones"
        price="89.99"
        description="High-quality wireless headphones with noise cancellation and long battery life."
      />
    </div>
  );
};

export default App;
