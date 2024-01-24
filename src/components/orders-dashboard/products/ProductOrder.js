import React from 'react';

export default function ProductOrder({ productOrder, quantity }) {
  return productOrder.map(p => (
    <div>
      {!p.isExtra ? <h2>{`${quantity}x ${p.name}`}</h2> : <h2>{p.name}</h2>}

      <h2>{Number(p.price).toFixed(2)}</h2>
    </div>
  ));
}
