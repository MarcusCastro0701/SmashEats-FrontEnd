import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import styled from 'styled-components';

export default function ReadyOrderComponent({
  orders,
  clientName,
  code,
  ready,
}) {
  if (!ready) {
    return '';
  }
  return (
    <Card>
      <h3>
        {clientName} - {code}
      </h3>

      {orders.map(o => (
        <InfoContainer>
          <img src={o.productOrder.img} alt={o.productOrder.name} />
          <h2>
            {o.quantity}x {o.productOrder.name}
          </h2>
        </InfoContainer>
      ))}

      <div>
        <Close />
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #f2f2f2;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 1vh;
  padding: 2vh;
  margin-bottom: 3vh;
  img {
    width: 8vh;
    height: 8vh;
    border-radius: 1vh;
    margin-right: 5vh;
  }
  h2 {
    font-size: 2vh;
    margin: 1.5vh 0;
  }
  h3 {
    font-size: 3vh;
  }
  div: {
    width: 100% !important;
  }
`;

const InfoContainer = styled.div`
  padding: 1vh;
  border-bottom: 1px dashed black;
  border-top: 1px dashed black;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
`;

const Close = styled(IoIosCloseCircle)`
  width: 5vh;
  height: 5vh;
  color: red;
  cursor: pointer;
  margin-top: 3vh;
`;
