/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import api from '../../services/API';

export default function PaymentMethod({
  setDashboardBool,
  clientName,
  setClientName,
  totalPrice,
  setTotalPrice,
  setOrder,
  order,
  code,
}) {
  const [selected, setSelected] = useState(null);
  const [change, setChange] = useState(0);

  function changeCheckBox(option) {
    setSelected(option);
  }

  async function finishPayment() {
    if (clientName === '') {
      toast('Insira um nome para identificar o pedido');
      return;
    }
    if (clientName.length <= 2) {
      toast('O nome do cliente precisa ter pelo menos 3 caracteres');
      return;
    }
    if (selected === null) {
      toast('Selecione uma forma de pagamento');
      return;
    }
    if (selected === 'dinheiro' && change <= totalPrice) {
      toast('O valor recebido deve ser maior ou igual ao preço total');
      return;
    }

    const lancheArr = [];

    for (let c = 0; c < order.length; c++) {
      const body = {
        productId: order[c].productOrder[0].id,
        quantity: order[c].quantity,
        observations: order[c].observations,
        clientName,
        code,
        ready: false,
      };

      await api.PostOrder(body);

      lancheArr.push({
        lanche: order[c].productOrder[0].name,
        preco: order[c].productOrder[0].price,
        quantidade: order[c].quantity,
      });
    }

    // const pedido = {
    //   cliente: clientName,
    //   numero: code,
    //   itens: lancheArr,
    //   total: totalPrice,
    // };

    // await api.GenerateOrder(pedido);

    setTotalPrice(0);
    setOrder([]);
    setSelected(null);
    setDashboardBool(true);
    setClientName('');
    toast('Pedido enviado para a cozinha!');
  }

  return (
    <Container>
      <h3>Forma de pagamento</h3>
      <SubContainer>
        <Side>
          <CreditCard />
          <div>
            <h2>Crédito</h2>
          </div>
        </Side>

        <Side>
          <CheckBox
            type="checkbox"
            checked={selected === 'credito'}
            onChange={() => changeCheckBox('credito')}
          />
        </Side>
      </SubContainer>
      <SubContainer>
        <Side>
          <CreditCard />
          <div>
            <h2>Débito</h2>
          </div>
        </Side>

        <Side>
          <CheckBox
            type="checkbox"
            checked={selected === 'debito'}
            onChange={() => changeCheckBox('debito')}
          />
        </Side>
      </SubContainer>
      <SubContainer>
        <Side>
          <Money />
          <div>
            <h2>Dinheiro</h2>
          </div>
        </Side>

        <Side>
          <CheckBox
            type="checkbox"
            checked={selected === 'dinheiro'}
            onChange={() => changeCheckBox('dinheiro')}
          />
        </Side>
      </SubContainer>
      {selected === 'dinheiro' ? (
        <div>
          <h2>Recebido</h2>
          <ChangeInput
            type="number"
            value={change}
            onChange={e => setChange(e.target.value)}
            placeholder="Valor entregue..."
          />
          <h2>Troco</h2>
          <ChangeInput
            type="number"
            value={(
              Number(change).toFixed(2) - Number(totalPrice).toFixed(2)
            ).toFixed(2)}
            placeholder="Troco"
            disabled
          />
        </div>
      ) : (
        ''
      )}
      <div>
        <Finish onClick={() => finishPayment()}>Finalizar</Finish>
        <Cancel onClick={() => setDashboardBool(true)}>Cancelar</Cancel>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  padding: 0;
  width: 100% !important;
  h3 {
    font-size: 3vh;
  }
  div {
    flex-direction: column;
    h2 {
      margin-right: 2vh;
      text-align: center;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: 2vh !important;
    }
    div {
      flex-direction: column !important;
    }
  }
`;

const ChangeInput = styled.input`
  width: 80%;
  height: 4vh;
  border-radius: 1vh;
  border: none !important;
  background-color: lightgray;
  margin: 1vh 2vh 2vh 0;
  @media (max-width: 1200px) {
    width: 50%;
    margin-top: 1.5vh;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center;
  width: 100% !important;
  margin: 2vh 0;
  border: 1px solid lightgray;
  padding: 3vh 2vh;
  border-radius: 1vh;
  h2 {
    margin: 0 !important;
    font-size: 3vh;
  }
  p {
    margin-top: 2vh !important;
  }
  @media (max-width: 1200px) {
    flex-direction: column !important;
  }
  input {
    margin-left: 0 !important;
    margin-top: 2vh !important;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    margin-left: 2vh !important;
  }
  @media (max-width: 1200px) {
    flex-direction: column !important;
    h2 {
      text-align: center;
    }
  }
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 2vh !important;
  height: 2vh !important;
  border-radius: 50% !important;
  border: 2px solid #333 !important;
  margin: 0 0 0 4vh !important;
`;

const CreditCard = styled(FaRegCreditCard)`
  width: 3vh;
  height: 3vh;
  color: orange;
  @media (max-width: 1200px) {
    margin-bottom: 2vh;
  }
`;

const Money = styled(FaMoneyBillAlt)`
  width: 3vh;
  height: 3vh;
  color: orange;
  @media (max-width: 1200px) {
    margin-bottom: 2vh;
  }
`;

const Finish = styled.button`
  width: 28vh;
  height: 7vh;
  font-size: 3vh;
  border-radius: 20px;
  margin-top: 4vh;
  border: none;
  color: white;
  font-weight: 600 !important;
  background-color: green;
  &:hover {
    background-color: #00cc00;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    width: 18vh;
    height: 3vh;
    margin-top: 1vh;
    font-size: 2vh;
  }
`;

const Cancel = styled.button`
  width: 28vh;
  height: 7vh;
  font-size: 3vh;
  border-radius: 20px;
  margin-top: 4vh;
  border: none;
  color: white;
  background-color: #b30000;
  font-weight: 600 !important;
  margin-left: 4vh;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    width: 18vh;
    height: 3vh;
    margin-left: 0;
    margin-top: 1vh;
    font-size: 2vh;
  }
`;
