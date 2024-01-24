import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import burger from '../../../assets/images/burger.jpeg';
import api from '../../../services/API';
import Categories from './Categories';
import Footer from './Footer';
import Products from './Products';
import ProductsSearch from './ProductsSearch';

export default function OrdersDashboard({
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  dashboardBool,
  setDashboardBool,
}) {
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function set() {
      const allCategories = await api.GetCategories();
      const arr = allCategories.data;
      arr.pop();
      setCategories(arr);
    }

    set();
  }, []);

  return (
    <Container dashboardBool={dashboardBool}>
      <h1> Bem vindo ao SmashEats!</h1>
      <ProductsSearch
        productsArr={productsArr}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        changeBool={changeBool}
        setChangeBool={setChangeBool}
      />
      <Categories categories={categories} />
      <Products
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        changeBool={changeBool}
        setChangeBool={setChangeBool}
        categories={categories}
      />
      <Footer
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        order={order}
        setOrder={setOrder}
        setDashboardBool={setDashboardBool}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 115px;
  padding: 15vh 22vh 0 22vh;
  display: ${props => (props.dashboardBool ? 'flex' : 'none')};
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
    @media (max-width: 1200px) {
      width: 30vh;
    }
  }
  h1 {
    color: black;
    @media (max-width: 1200px) {
      font-size: 4vh;
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
`;
