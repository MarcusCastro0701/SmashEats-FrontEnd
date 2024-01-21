import React, { useState } from 'react';
import styled from 'styled-components';
import bacon from '../../../assets/images/bacon.jpeg';
import barbecue from '../../../assets/images/barbecue.jpeg';
import chedar from '../../../assets/images/chedar.jpeg';
import AditionalsCheckBox from './AditionalsCheckBox';
import NumberCounter from './NumberCounter';
import PopUpFooter from './PopUpFooter';

export default function ProductOrderPopUp({
  product,
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
  const [productOrder, setProductOrder] = useState([
    {
      name: product.name,
      price: product.price,
    },
  ]);

  const aditionals = [
    {
      name: 'Bacon',
      img: bacon,
      price: 2.5,
      size: '10g',
    },
    {
      name: 'Chedar',
      img: chedar,
      price: 1.5,
      size: '10g',
    },
    {
      name: 'Barbecue',
      img: barbecue,
      price: 2.5,
      size: 'Acompanhamento',
    },
  ];

  function addOrder() {
    setTotalPrice(
      Number(totalPrice) +
        Number(
          productOrder
            .reduce(function (accumulator, order) {
              return accumulator + order.price;
            }, 0)
            .toFixed(2),
        ),
    );
    const newOrder = order;
    newOrder.push({
      id: Number(order.length) + 1,
      productOrder,
      observations: productObservations,
    });
    setOrder(newOrder);
    setQuantity(1);
    setProductOrder([
      {
        name: product.name,
        price: product.price,
      },
    ]);
    setProductObservations('');
    setClose();
  }

  return (
    <>
      <PopUp setOpen={setOpen}>
        <h1>Revise o pedido!</h1>

        <InfoContainer>
          <img src={product.img} alt={product.name} />

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

        <h3>Adicionais</h3>
        <p>Selecione ingredientes para adicionar ao seu lanche</p>

        {aditionals.map(a => (
          <AditionalsCheckBox
            aditional={a}
            productOrder={productOrder}
            setProductOrder={setProductOrder}
            changeBool={changeBool}
            setChangeBool={setChangeBool}
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
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
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
  height: 6vh;
  font-size: 3vh;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 600 !important;
  background-color: green;
  margin-top: 4vh;
  &:hover {
    background-color: #00cc00;
    cursor: pointer;
  }
`;

const Cancel = styled.button`
  width: 30vh;
  height: 6vh;
  font-size: 3vh;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: #8a8f8a;
  font-weight: 600 !important;
  margin-left: 4vh;
  margin-top: 4vh;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;
