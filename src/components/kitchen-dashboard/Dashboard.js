import React from 'react';
import styled from 'styled-components';
import burger from '../../assets/images/burger.jpeg';
import OrderCard from './OrderCard';

export default function KitchenDashboard() {
  const kitchenArr = [
    {
      clientName: 'Marcus',
      code: 200,
      order: [
        {
          name: 'X-Tudo',
          img: burger,
        },
        {
          name: 'X-Tudin',
          img: burger,
        },
        {
          name: 'X-Tudasso',
          img: burger,
        },
      ],
      ready: false,
    },

    {
      clientName: 'Rick',
      code: 201,
      order: [
        {
          name: 'X-Tudo',
          img: burger,
        },
        {
          name: 'X-Tudin',
          img: burger,
        },
        {
          name: 'X-Tudasso',
          img: burger,
        },
      ],
      ready: true,
    },
  ];

  return (
    <Container>
      <Left>
        <h1>Preparando: </h1>
        <OrderCard kitchenArr={kitchenArr} />
      </Left>
      <Right>
        <h1>Pronto: </h1>
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
  h1 {
    color: black;
  }
`;

const Left = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-right: 0.5px solid black;
`;

const Right = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-left: 0.5px solid black;
`;
