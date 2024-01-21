/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import burger from '../../../assets/images/burger.jpeg';
import ProductOrderPopUp from './ProductOrderPopUp';

export default function ProductRow({
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function selectProduct(index) {
    setSelectedProduct(index === selectedProduct ? null : index);
  }

  const productsArr = [
    {
      name: 'X-Tudo',
      price: 21.9,
      description:
        'hambúrguer suculento, queijo derretido, alface fresca, tomate maduro, maionese cremosa',
      img: burger,
    },
    {
      name: 'X-Tudin',
      price: 27.9,
      description:
        'hambúrguer suculento, queijo derretido, alface fresca, tomate maduro, maionese cremosa',
      img: burger,
    },
    {
      name: 'X-Tudão',
      price: 23.9,
      description:
        'hambúrguer suculento, queijo derretido, alface fresca, tomate maduro, maionese cremosa',
      img: burger,
    },
    {
      name: 'X-Tudasso',
      price: 25.9,
      description:
        'hambúrguer suculento, queijo derretido, alface fresca, tomate maduro, maionese cremosa',
      img: burger,
    },
  ];

  return (
    <>
      <h2>Sanduíches</h2>
      <Container>
        {productsArr.map((p, index) => (
          <>
            <ProductCard onClick={() => selectProduct(index)}>
              <img src={p.img} alt="burger" />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <h3>R${p.price.toFixed(2)}</h3>
            </ProductCard>

            <ProductOrderPopUp
              product={p}
              setOpen={selectedProduct === index}
              setClose={() => selectProduct(index)}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              order={order}
              setOrder={setOrder}
              changeBool={changeBool}
              setChangeBool={setChangeBool}
            />
          </>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7vh;
`;

const ProductCard = styled.div`
  height: 34vh;
  width: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(33, 150, 243, 0.7);
    cursor: pointer;
  }
  img {
    width: 18vh;
    height: 16vh;
    border-radius: 20px;
  }
  p {
    font-size: 1.5vh;
    width: 80%;
  }
  h3 {
    font-size: 2.2vh;
    font-weight: 600;
  }
`;
