import React from 'react';
import styled from 'styled-components';

export default function OrderCard({ kitchenArr }) {
  return (
    <Container>
      {kitchenArr.map(k => (
        <Card>
          <h2>{k.clientName}</h2>
          <h2>{k.code}</h2>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;

const Card = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid black;
  border-radius: 1vh;
  background-color: red;
`;
