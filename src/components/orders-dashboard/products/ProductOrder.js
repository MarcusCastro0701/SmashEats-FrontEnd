import React from 'react';

export default function ProductOrder({ productOrder }) {
  return productOrder.map(p => (
    <div>
      <h2>{p.name}</h2>
      <h2>{p.price.toFixed(2)}</h2>
    </div>
  ));
}
