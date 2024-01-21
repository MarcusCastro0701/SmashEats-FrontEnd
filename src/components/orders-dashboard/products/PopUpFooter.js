import React from 'react';
import styled from 'styled-components';

export default function PopUpFooter({ productOrder }) {
  return (
    <Container>
      <Top>
        {productOrder.map(o => (
          <div>
            <p>1x {o.name}</p>
            <h2>R$ {Number(o.price).toFixed(2)}</h2>
          </div>
        ))}
      </Top>
      <Bottom>
        <h2>
          Total: R${' '}
          {productOrder
            .reduce(function (accumulator, order) {
              return accumulator + order.price;
            }, 0)
            .toFixed(2)}
        </h2>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 1vh;
  padding: 3vh 5vh;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0 !important;
  }
  p {
    font-size: 2.5vh !important;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px dashed lightgray;
  padding-bottom: 3vh;
  height: 100%;
  justify-content: space-between;
  div {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    margin-top: 1vh;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 0.5px dashed lightgray;
  padding-top: 3vh;
  height: 100%;
`;
