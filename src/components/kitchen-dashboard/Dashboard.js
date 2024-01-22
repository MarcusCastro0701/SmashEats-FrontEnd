import React from 'react';
import styled from 'styled-components';
import burger from '../../assets/images/burger.jpeg';
import PreparingOrderCard from './PreparingOrderCard';
import ReadyOrderCard from './ReadyOrderCard';

export default function KitchenDashboard() {
  const kitchenArr = [
    {
      clientName: 'Marcus',
      code: 200,
      orders: [
        {
          observations: '',
          quantity: 2,
          productOrder: {
            name: 'X-Tudin',
            img: burger,
            type: 1,
          },
        },
      ],

      ready: true,
    },

    {
      clientName: 'Rick',
      code: 201,
      orders: [
        {
          observations: '',
          quantity: 3,
          productOrder: {
            name: 'X-Tudin',
            img: burger,
            type: 1,
          },
        },
        {
          observations: 'Bem passado',
          quantity: 2,
          productOrder: {
            name: 'X-Tudasso',
            img: burger,
            type: 1,
          },
        },
      ],

      ready: false,
    },
  ];

  return (
    <Container>
      <Left>
        <h1>Preparando: </h1>
        <PreparingOrderCard kitchenArr={kitchenArr} />
      </Left>
      <Right>
        <h1>Pronto: </h1>
        <ReadyOrderCard kitchenArr={kitchenArr} />
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
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-right: 0.5px solid black;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 50vh;
  border-left: 0.5px solid black;
  padding-left: 6.5vh;
`;
