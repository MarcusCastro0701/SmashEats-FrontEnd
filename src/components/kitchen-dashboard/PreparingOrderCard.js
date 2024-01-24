/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../../common/spinner/Spinner';
import PreparingOrderComponent from './PreparingOrderComponent';

export default function PreparingOrderCard({
  products,
  orders,
  useEffectBool,
  setUseEffectBool,
}) {
  if (products.length === 0) {
    return <Spinner />;
  }
  if (orders.length === 0) {
    return '';
  }
  return (
    <Container>
      {orders.map(obj => (
        <PreparingOrderComponent
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
  flex-direction: column !important;
  margin-top: 5vh;
  @media (max-width: 1200px) {
    width: 95%;
    margin-top: 5vh;
  }
`;
