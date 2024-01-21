import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import OrdersDashboard from '../../components/orders-dashboard/OrdersDashboard';

export default function Home() {
  return (
    <Container>
      <Header />
      <OrdersDashboard />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: orange;
  h1 {
    font-size: 50px;
    color: #171717;
  }
`;
