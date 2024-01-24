import React from 'react';
import styled from 'styled-components';
import ReadyOrderComponent from './ReadyOrderComponent';

export default function ReadyOrderCard({
  orders,
  products,
  useEffectBool,
  setUseEffectBool,
}) {
  if (orders.length === 0 || products.length === 0) {
    return '';
  }
  return (
    <Container>
      {orders.map(obj => (
        <ReadyOrderComponent
          o={obj}
          clientName={obj.clientName}
          code={obj.code}
          ready={obj.ready}
          products={products}
          useEffectBool={useEffectBool}
          setUseEffectBool={setUseEffectBool}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
