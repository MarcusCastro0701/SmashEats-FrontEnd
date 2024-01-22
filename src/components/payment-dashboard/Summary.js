import React from 'react';
import styled from 'styled-components';
import ProductOrder from '../orders-dashboard/products/ProductOrder';

export default function Summary({ order, totalPrice }) {
  return (
    <Container>
      <Top>
        {order.map(o => (
          <ProductOrderContainer>
            <ProductOrder productOrder={o.productOrder} quantity={o.quantity} />
          </ProductOrderContainer>
        ))}
      </Top>
      <Bottom>
        <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column !important;
  border: 1px solid lightgray;
  border-radius: 1vh;
  padding: 3vh 5vh;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  h2 {
    margin: 0 0 2vh 0 !important;
    font-size: 3vh;
  }
  p {
    margin: 1vh 0 3vh 0;
    font-size: 0.5 !important;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px dashed lightgray;
  padding-bottom: 3vh;
  height: 100%;
`;

const ProductOrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column !important;
  padding: 2vh;
  border: 1px solid lightgray;
  border-radius: 3vh;
  h2 {
    font-size: 2.5vh !important;
  }
  div {
    display: flex;
    flex-direction: row !important;
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  width: 100%;
  border-top: 0.5px dashed lightgray;
  padding-top: 3vh;
  height: 100%;
`;
