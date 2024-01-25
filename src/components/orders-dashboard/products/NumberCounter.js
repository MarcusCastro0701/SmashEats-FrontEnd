/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import styled from 'styled-components';

export default function NumberCounter({
  quantity,
  setQuantity,
  productOrder,
  setProductOrder,
  product,
}) {
  function plus() {
    const arr = productOrder;
    arr.unshift(product);
    setQuantity(quantity + 1);
    setProductOrder(arr);
  }

  function minus() {
    if (quantity === 1) {
      return;
    }
    const arr = productOrder;
    arr.shift();
    setQuantity(quantity - 1);
    setProductOrder(arr);
  }

  return (
    <Container>
      <Plus onClick={plus} />
      <h2>{quantity}</h2>
      <Minus onClick={minus} />
    </Container>
  );
}

const Container = styled.div`
  margin: 3vh 0 7vh 0;
  width: 18vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  h2 {
    margin-bottom: 0;
    text-align: center;
  }
  @media (max-width: 1200px) {
    align-items: center;
    margin-top: 0;
  }
`;

const Plus = styled(FaCirclePlus)`
  height: 4vh;
  width: 4vh;
  cursor: pointer;
  color: #008000;
  &:hover {
    color: #004d00;
  }
`;

const Minus = styled(FaCircleMinus)`
  height: 4vh;
  width: 4vh;
  cursor: pointer;
  color: #cc0000;
  &:hover {
    color: #990000;
  }
`;
