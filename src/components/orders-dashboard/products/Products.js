import React from 'react';
import styled from 'styled-components';
import ProductRow from './ProductRow';

// fazer a rendenização dos componentes separados em outros arquivos!

export default function Products({
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
}) {
  return (
    <Container>
      <ProductRow
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        changeBool={changeBool}
        setChangeBool={setChangeBool}
      />
    </Container>
  );
}

const Container = styled.div`
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  h2 {
    margin-bottom: 4vh;
    font-size: 3vh;
    font-weight: 600;
  }
`;
