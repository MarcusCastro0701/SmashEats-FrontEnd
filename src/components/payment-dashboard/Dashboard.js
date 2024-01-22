import React, { useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa6';
import styled from 'styled-components';
import PaymentMethod from './PaymentMethod';
import Summary from './Summary';

export default function PaymentDashboard({
  order,
  totalPrice,
  setDashboardBool,
  dashboardBool,
  setTotalPrice,
  setOrder,
}) {
  const [clientName, setClientName] = useState('');
  return (
    <Container dashboardBool={dashboardBool}>
      <Top>
        <CreditCard />
        <h1>Pagamento</h1>
      </Top>

      <div>
        <Left>
          <Summary order={order} totalPrice={totalPrice} />
          <span>
            <input
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              placeholder="Nome do cliente..."
            />
            <h2>Código: 000</h2>
          </span>
        </Left>

        <Right>
          <PaymentMethod
            setDashboardBool={setDashboardBool}
            clientName={clientName}
            setClientName={setClientName}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            setOrder={setOrder}
          />
        </Right>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 115px;
  padding: 15vh 22vh 0 22vh;
  display: ${props => (props.dashboardBool ? 'none' : 'flex')};
  flex-direction: column;
  background-color: white;
  border-radius: 80px 80px 0 0;
  padding-bottom: 8vh;
  h1 {
    color: black;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CreditCard = styled(FaRegCreditCard)`
  width: 4vh;
  height: 4vh;
  color: orange;
  margin-right: 2.5vh;
`;

const Left = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  span {
    margin-top: 3vh;
    display: flex;
    width: 78%;
    input {
      width: 55%;
      margin-right: 2vh;
      border-radius: 3vh;
      background-color: #f2f2f2;
      &::placeholder {
        font-size: 2vh;
        color: #888;
      }
    }
    h2 {
      padding: 2vh;
      font-size: 2vh;
      background-color: #f2f2f2;
      width: 30%;
      border: 1px solid black;
      border-radius: 3vh;
    }
  }
`;

const Right = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  padding: 0 !important;
`;
