import React from 'react';
import styled from 'styled-components';
import TakeoutDashboard from '../../components/takeout-dashboard/Dashboard';

export default function TakeoutHome() {
  return (
    <Container>
      <TakeoutDashboard />
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
