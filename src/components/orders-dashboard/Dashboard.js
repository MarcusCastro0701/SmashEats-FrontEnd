import React, { useState } from 'react';
import styled from 'styled-components';
import burger from '../../assets/images/burger.jpeg';
import Categories from './Categories';
import Footer from './Footer';
import Products from './products/Products';
import ProductsSearch from './products/ProductsSearch';

export default function OrdersDashboard() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState([]);
  const [changeBool, setChangeBool] = useState(false);

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
    <Container>
      <h1> Bem vindo ao BurgerEats!</h1>
      <ProductsSearch
        productsArr={productsArr}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        changeBool={changeBool}
        setChangeBool={setChangeBool}
      />
      <Categories />
      <Products
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        changeBool={changeBool}
        setChangeBool={setChangeBool}
      />
      <Footer
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 115px;
  padding: 15vh 22vh 0 22vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 80px 80px 0 0;
  padding-bottom: 8vh;
  input {
    width: 25vw;
    height: 5vh;
    border: none;
    background-color: #f2f2f2;
    border-radius: 2vh;
    margin: 3vh 2vh 0 0;
    &:focus {
      outline: none;
      border: none;
      box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
    }
  }
  h1 {
    color: black;
  }
`;
