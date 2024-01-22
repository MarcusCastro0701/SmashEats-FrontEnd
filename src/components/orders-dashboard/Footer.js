/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ProductOrder from './products/ProductOrder';

export default function Footer({
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  setDashboardBool,
}) {
  function removeFromOrder(o) {
    const arr = order;
    const filteredArr = arr.filter(e => e.id !== o.id);
    const newTotalPrice = filteredArr
      .map(order => order.productOrder.map(item => item.price))
      .flat()
      .reduce((acc, price) => acc + price, 0);

    setTotalPrice(newTotalPrice);
    setOrder(filteredArr);
  }

  function cancelOrder() {
    setTotalPrice(0);
    setOrder([]);
  }

  function finishOrder() {
    if (order.length < 1) {
      toast('Selecione pelo menos um produto!');
      return;
    }
    setDashboardBool(false);
  }

  return (
    <OrderOptions>
      {totalPrice === 0 ? (
        ''
      ) : (
        <Container>
          <Top>
            {order.map(o => (
              <>
                <ProductOrderContainer>
                  <ProductOrder
                    productOrder={o.productOrder}
                    quantity={o.quantity}
                  />
                  {o.observations === '' ? (
                    ''
                  ) : (
                    <h3>Observações: {o.observations}</h3>
                  )}
                </ProductOrderContainer>
                <p onClick={() => removeFromOrder(o)}>remover do pedido</p>
              </>
            ))}
          </Top>
          <Bottom>
            <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
          </Bottom>
        </Container>
      )}
      <div>
        <Cancel onClick={() => cancelOrder()} totalPrice={totalPrice}>
          Cancelar
        </Cancel>
        <Finish totalPrice={totalPrice} onClick={() => finishOrder()}>
          Ir para pagamento
        </Finish>
      </div>
    </OrderOptions>
  );
}

const OrderOptions = styled.footer`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row-reverse;
  }
  h3 {
    font-size: 2vh !important;
    padding: 1vh;
    width: 100%;
    border: 0.7px solid lightgray;
    border-radius: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

const ProductOrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column !important;
  padding: 2vh;
  border: 1px solid lightgray;
  border-radius: 3vh;
  div {
    display: flex;
    flex-direction: row !important;
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
`;

const Finish = styled.button`
  width: 35vh;
  height: 7vh;
  font-size: 3vh;
  border-radius: 20px;
  margin-top: 4vh;
  border: none;
  color: white;
  font-weight: 600 !important;
  background-color: ${props =>
    props.totalPrice !== 0 ? 'green' : 'lightgray'};
  &:hover {
    background-color: ${props =>
      props.totalPrice !== 0 ? '#00cc00' : 'lightgray'};
    cursor: pointer;
  }
`;

const Cancel = styled.button`
  width: 35vh;
  height: 7vh;
  font-size: 3vh;
  border-radius: 20px;
  margin-top: 4vh;
  border: none;
  color: white;
  background-color: ${props =>
    props.totalPrice !== 0 ? '#b30000' : 'lightgray'};
  font-weight: 600 !important;
  margin-left: 4vh;
  &:hover {
    background-color: ${props =>
      props.totalPrice !== 0 ? 'red' : 'lightgray'};
    color: white;
    cursor: pointer;
  }
`;

const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column !important;
  border: 1px solid lightgray;
  border-radius: 1vh;
  padding: 3vh 5vh;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0 0 2vh 0 !important;
    font-size: 3vh;
  }
  p {
    margin: 1vh 0 3vh 0;
    font-size: 0.5 !important;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px dashed lightgray;
  padding-bottom: 3vh;
  height: 100%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  width: 100%;
  border-top: 0.5px dashed lightgray;
  padding-top: 3vh;
  height: 100%;
`;
