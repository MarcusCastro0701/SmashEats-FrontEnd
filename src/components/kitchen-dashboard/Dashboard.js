import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../services/API';
import PreparingOrderCard from './PreparingOrderCard';
import ReadyOrderCard from './ReadyOrderCard';

export default function KitchenDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [useEffectBool, setUseEffectBool] = useState(false);

  useEffect(async () => {
    const allOrders = await api.GetOrders();
    const allProducts = await api.GetProducts();
    setOrders(allOrders.data);
    setProducts(allProducts.data);
  }, [useEffectBool]);

  return (
    <Container>
      <Left>
        <h1>Preparando: </h1>
        <PreparingOrderCard
          products={products}
          orders={orders}
          useEffectBool={useEffectBool}
          setUseEffectBool={setUseEffectBool}
        />
      </Left>
      <Right>
        <h1>Pronto: </h1>
        <ReadyOrderCard
          products={products}
          orders={orders}
          useEffectBool={useEffectBool}
          setUseEffectBool={setUseEffectBool}
        />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100% !important;
  min-height: 100vh;
  margin-top: 60px;
  padding: 15vh 22vh 0 22vh;
  display: flex;
  flex-direction: row;
  border-radius: 80px 80px 0 0;
  padding-bottom: 8vh;
  h1 {
    color: black;
  }
  @media (max-width: 1200px) {
    padding: 10vh 5vh 0 2vh;
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-right: 0.5px solid black;
  @media (max-width: 1200px) {
    h1 {
      font-size: 3vh !important;
    }
    @media (max-width: 1200px) {
      align-items: flex-start !important;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-left: 0.5px solid black;
  padding-left: 6.5vh;
  @media (max-width: 1200px) {
    h1 {
      font-size: 3vh !important;
    }
    padding-left: 1vh;
  }
`;
