import React, { useState } from 'react';
import styled from 'styled-components';
import OrdersDashboard from '../../components/orders-dashboard/products/Dashboard';
import PaymentDashboard from '../../components/payment-dashboard/Dashboard';

export default function OrdersHome() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState([]);
  const [dashboardBool, setDashboardBool] = useState(true);

  return (
    <Container>
      <OrdersDashboard
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        dashboardBool={dashboardBool}
        setDashboardBool={setDashboardBool}
      />
      <PaymentDashboard
        order={order}
        totalPrice={totalPrice}
        dashboardBool={dashboardBool}
        setDashboardBool={setDashboardBool}
        setTotalPrice={setTotalPrice}
        setOrder={setOrder}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: orange;
  h1 {
    font-size: 50px;
    color: #171717;
  }
`;
