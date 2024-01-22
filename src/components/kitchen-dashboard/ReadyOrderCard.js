import React from 'react';
import styled from 'styled-components';
import ReadyOrderComponent from './ReadyOrderComponent';

export default function ReadyOrderCard({ kitchenArr }) {
  return (
    <Container>
      {kitchenArr.map(obj => (
        <ReadyOrderComponent
          orders={obj.orders}
          clientName={obj.clientName}
          code={obj.code}
          ready={obj.ready}
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
`;
