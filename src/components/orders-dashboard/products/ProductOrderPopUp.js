/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import styled from 'styled-components';
import AditionalsCheckBox from './AditionalsCheckBox';
import NumberCounter from './NumberCounter';
import PopUpFooter from './PopUpFooter';

export default function ProductOrderPopUp({
  product,
  products,
  setOpen,
  setClose,
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
}) {
  const [quantity, setQuantity] = useState(1);
  const [productObservations, setProductObservations] = useState('');
  const [productOrder, setProductOrder] = useState([product]);

  function addOrder() {
    setTotalPrice(
      Number(totalPrice) +
        Number(
          productOrder
            .reduce(function (accumulator, order) {
              return accumulator + Number(order.price);
            }, 0)
            .toFixed(2),
        ),
    );
    const newOrder = order;
    newOrder.push({
      id: Number(order.length) + 1,
      productOrder,
      observations: productObservations,
      quantity,
    });
    setOrder(newOrder);
    setQuantity(1);
    const orderArr = productOrder;
    for (let e = 1; e <= quantity - 1; e++) {
      orderArr.shift();
    }
    setProductOrder(orderArr);
    setProductObservations('');
    setClose();
  }

  return (
    <>
      <PopUp setOpen={setOpen}>
        <h1>Revise o pedido!</h1>

        <InfoContainer>
          <img src={product.ImageUrl} alt={product.name} />

          <div>
            <h2>{product.name}!</h2>
            <p>{product.description}</p>
          </div>

          <h2>R${(Number(product.price) * quantity).toFixed(2)}</h2>
        </InfoContainer>

        <NumberCounter
          quantity={quantity}
          setQuantity={setQuantity}
          productOrder={productOrder}
          setProductOrder={setProductOrder}
          product={product}
        />

        {products
          .filter(p => p.categoryId === 5)
          .map(a => (
            <AditionalsCheckBox
              aditional={a}
              productOrder={productOrder}
              setProductOrder={setProductOrder}
              changeBool={changeBool}
              setChangeBool={setChangeBool}
              quantity={quantity}
              categoryId={product.categoryId}
            />
          ))}

        <div>
          <h3>Observações</h3>
          <textarea
            value={productObservations}
            onChange={e => setProductObservations(e.target.value)}
          />
        </div>

        <PopUpFooter
          product={product}
          quantity={quantity}
          productOrder={productOrder}
        />

        <div>
          <Finish onClick={() => addOrder()}>Adicionar ao pedido</Finish>
          <Cancel onClick={setClose}>Cancelar</Cancel>
        </div>
      </PopUp>
      <Blur setOpen={setOpen} />
    </>
  );
}

const PopUp = styled.div`
  display: ${props => (props.setOpen ? 'flex' : 'none')};
  width: 110vh;
  max-height: 90vh;
  overflow: scroll;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10vh;
  z-index: 900;
  border-radius: 5vh 0 0 5vh;
  border: 3px solid black;
  h1 {
    margin-bottom: 7vh;
  }
  h3 {
    font-size: 3vh;
    font-weight: 500;
    margin: 1.5vh 0;
  }
  img {
    width: 18vh;
    height: 16vh;
    border-radius: 20px;
  }
  textarea {
    width: 100%;
    height: 10vh;
    border: none;
    border-radius: 2vh;
    background-color: #f2f1ed;
    padding: 1vh;
    font-size: 2vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    &:focus {
      border-color: transparent;
    }
  }
  @media (max-width: 1200px) {
    padding: 3vh 0;
    align-items: center;
    width: 80%;
    h2 {
      margin-top: 2vh;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    width: 30vh;
    text-align: center;
  }
`;

const Blur = styled.div`
  display: ${props => (props.setOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 899;
`;

const Finish = styled.button`
  width: 30vh;
  height: 7vh;
  font-size: 2.5vh;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 600 !important;
  background-color: green;
  margin-top: 5vh;
  &:hover {
    background-color: #00cc00;
    cursor: pointer;
  }
`;

const Cancel = styled.button`
  width: 30vh;
  height: 7vh;
  font-size: 2.5vh;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: #8a8f8a;
  font-weight: 600 !important;
  margin-left: 4vh;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 2vh;
  }
`;
