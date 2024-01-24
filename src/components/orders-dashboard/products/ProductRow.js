/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductOrderPopUp from './ProductOrderPopUp';

export default function ProductRow({
  category,
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
  products,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function selectProduct(index) {
    setSelectedProduct(index === selectedProduct ? null : index);
  }

  return (
    <>
      <h2>{category.name}</h2>
      <Container>
        {products
          .filter(obj => obj.categoryId === category.id)
          .map((p, index) => (
            <>
              <ProductCard onClick={() => selectProduct(index)}>
                <img src={p.ImageUrl} alt="burger" />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <h3>R${Number(p.price).toFixed(2)}</h3>
              </ProductCard>

              <ProductOrderPopUp
                product={p}
                products={products}
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
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 7vh;
  padding-bottom: 1vh;
  padding-left: 1vh;
  @media (max-width: 1200px) {
    flex-direction: column !important;
    margin-right: 0 !important;
    padding: 0;
  }
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
  margin-right: 4vh;
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
    text-align: center;
  }
  h3 {
    font-size: 2.2vh;
    font-weight: 600;
  }
  @media (max-width: 1200px) {
    margin-bottom: 4vh;
    margin-right: 0 !important;
  }
`;
