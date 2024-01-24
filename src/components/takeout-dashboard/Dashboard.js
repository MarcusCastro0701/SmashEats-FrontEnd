import React, { useState } from 'react';
import { useInterval } from 'react-use';
import styled from 'styled-components';
import api from '../../services/API';
import PreparingContainer from './PreparingContainer';
import ReadyContainer from './ReadyContainer';

export default function TakeoutDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useInterval(async () => {
    const allOrders = await api.GetOrders();
    const allProducts = await api.GetProducts();
    setOrders(allOrders.data);
    setProducts(allProducts.data);
  }, 5000);

  return (
    <Container>
      <Left>
        <h2>Preparando: </h2>
        <PreparingContainer
          products={products}
          orders={orders.filter(o => o.ready === false)}
        />
      </Left>
      <Right>
        <h2>Pronto: </h2>
        <ReadyContainer
          products={products}
          orders={orders.filter(o => o.ready === true)}
        />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  padding: 15vh 22vh 0 22vh;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 80px 80px 0 0;
  padding-bottom: 8vh;
  h2 {
    font-size: 5vh;
    @media (max-width: 1200px) {
      font-size: 3vh;
    }
  }
  @media (max-width: 1200px) {
    padding: 8vh 4vh 0 4vh;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-height: 50vh;
  border-right: 0.5px solid black;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  min-height: 50vh;
  border-left: 0.5px solid black;
  padding-left: 6.5vh;
  @media (max-width: 1200px) {
    padding-left: 3vh;
  }
`;
