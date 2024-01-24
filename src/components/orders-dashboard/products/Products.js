import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../../services/API';
import ProductRow from './ProductRow';

export default function Products({
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
  categories,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function set() {
      const allProducts = await api.GetProducts();
      setProducts(allProducts.data);
    }

    set();
  }, []);
  return (
    <Container>
      {categories.map(c => (
        <ProductRow
          category={c}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          order={order}
          setOrder={setOrder}
          changeBool={changeBool}
          setChangeBool={setChangeBool}
          products={products}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  h2 {
    margin-bottom: 4vh;
    font-size: 3vh;
    font-weight: 600;
  }
  @media (max-width: 1200px) {
    text-align: center;
    margin-right: 0 !important;
  }
`;
