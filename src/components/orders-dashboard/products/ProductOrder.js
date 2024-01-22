import React from 'react';

export default function ProductOrder({ productOrder, quantity }) {
  return productOrder.map(p => (
    <div>
      {p.type === 1 ? <h2>{`${quantity}x ${p.name}`}</h2> : <h2>{p.name}</h2>}

      <h2>{p.price.toFixed(2)}</h2>
    </div>
  ));
}
