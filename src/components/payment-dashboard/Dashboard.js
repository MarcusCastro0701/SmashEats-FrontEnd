import React, { useEffect, useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa6';
import styled from 'styled-components';
import api from '../../services/API';
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
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const allOrders = await api.GetOrders();
    setOrders(allOrders.data);
  }, []);
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
            <h2>Código: {Number(orders.length) + 1}</h2>
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
            order={order}
            code={Number(orders.length) + 1}
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
  @media (max-width: 1200px) {
    padding: 4vh 5vh 0 2.2vh;
    height: auto;
    border-radius: 40px 40px 0 0;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    h1 {
      font-size: 5vh;
    }
    margin-bottom: 3vh;
  }
`;

const CreditCard = styled(FaRegCreditCard)`
  width: 4vh;
  height: 4vh;
  color: orange;
  margin-right: 2.5vh;
  @media (max-width: 1200px) {
    width: 4vh;
    height: 4vh;
  }
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
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
      border-radius: 1vh;
      background-color: #f2f2f2;
      &::placeholder {
        font-size: 2vh;
        color: #888;
      }
      @media (max-width: 1200px) {
        width: 100%;
        padding-top: 0 !important;
        justify-content: center;
      }
    }
    h2 {
      padding: 1vh;
      font-size: 2vh;
      background-color: #f2f2f2;
      width: 30%;
      border: 1px solid black;
      border-radius: 3vh;
      @media (max-width: 1200px) {
        width: 70%;
        margin-top: 3vh;
      }
    }
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    margin-top: 0;
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
