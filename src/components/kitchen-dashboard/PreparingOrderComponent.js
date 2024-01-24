import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import styled from 'styled-components';
import api from '../../services/API';

export default function PreparingOrderComponent({
  o,
  clientName,
  code,
  ready,
  products,
  useEffectBool,
  setUseEffectBool,
}) {
  if (o.length === 0) {
    return '';
  }
  if (ready) {
    return '';
  }

  async function updateOrder() {
    try {
      await api.UpdateOrder(o.id);
      setUseEffectBool(!useEffectBool);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletingOrder() {
    try {
      await api.DeleteOrder(o.id);
      console.log(o.id, 'ta indo');
      setUseEffectBool(!useEffectBool);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card>
      <h3>{clientName}</h3>

      <h3>{code}</h3>

      <>
        <InfoContainer>
          <img
            src={products.filter(p => p.id === o.productId)[0].ImageUrl}
            alt={products.filter(p => p.id === o.productId)[0].name}
          />
          <h2>
            {o.quantity}x {products.filter(p => p.id === o.productId)[0].name}
          </h2>
        </InfoContainer>
        {o.observations === '' ? (
          ''
        ) : (
          <ObservationsContainer>
            <h2>Observações:</h2>
            <h2>{o.observations}</h2>
          </ObservationsContainer>
        )}
      </>

      <div>
        <Check onClick={() => updateOrder()} />
        <Close onClick={() => deletingOrder()} />
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
    @media (max-width: 1200px) {
      margin-right: 0;
    }
  }
  h2 {
    font-size: 2vh;
    margin: 1.5vh 0;
  }
  h3 {
    font-size: 3vh;
    @media (max-width: 1200px) {
      font-size: 2.8vh;
    }
  }
  div: {
    width: 100% !important;
  }
  @media (max-width: 1200px) {
    margin-bottom: 1vh !important;
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
  margin-top: 5vh;
  @media (max-width: 1200px) {
    flex-direction: column !important;
    align-items: center !important;
  }
`;

const ObservationsContainer = styled.div`
  padding: 1vh;
  border-bottom: 1px dashed black;
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-between;
  align-items: flex-start;
  overflow-wrap: break-word;
  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5vh;
      margin: 1vh 0 !important;
    }
  }
`;

const Check = styled(IoIosCheckmarkCircleOutline)`
  color: green;
  width: 5vh;
  height: 5vh;
  cursor: pointer;
`;

const Close = styled(IoIosCloseCircle)`
  width: 5vh;
  height: 5vh;
  color: red;
  cursor: pointer;
  margin-top: 3vh;
`;
