import React from 'react';
import styled from 'styled-components';
import KitchenDashboard from '../../components/kitchen-dashboard/Dashboard';

export default function KitchenHome() {
  return (
    <Container>
      <KitchenDashboard />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: #171717;
  }
`;
