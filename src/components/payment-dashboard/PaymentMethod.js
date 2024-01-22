import React, { useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function PaymentMethod({
  setDashboardBool,
  clientName,
  setClientName,
  totalPrice,
  setTotalPrice,
  setOrder,
}) {
  const [selected, setSelected] = useState(null);
  const [change, setChange] = useState(0);

  function changeCheckBox(option) {
    setSelected(option);
  }

  function finishPayment() {
    if (clientName === '') {
      toast('Insira um nome para identificar o pedido');
      return;
    }
    if (clientName.length <= 3) {
      toast('O nome do cliente precisa ter pelo menos 4 caracteres');
      return;
    }
    if (selected === null) {
      toast('Selecione uma forma de pagamento');
      return;
    }
    if (selected === 'dinheiro' && change <= totalPrice) {
      toast('Insira um valor válido para o troco');
      return;
    }

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
          <h2>Precisa de troco pra quanto? </h2>
          <ChangeInput
            type="number"
            value={change}
            onChange={e => setChange(e.target.value)}
            placeholder="Digite aqui..."
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
`;

const ChangeInput = styled.input`
  width: 40%;
  height: 4vh;
  border-radius: 1vh;
  border: none !important;
  background-color: lightgray;
  margin-left: 2vh;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: center !important;

  div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    margin-left: 2vh !important;
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
`;

const Money = styled(FaMoneyBillAlt)`
  width: 3vh;
  height: 3vh;
  color: orange;
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
`;
