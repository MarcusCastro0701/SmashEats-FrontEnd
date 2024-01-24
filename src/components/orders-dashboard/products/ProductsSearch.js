import React, { useState } from 'react';
import styled from 'styled-components';
import ProductOrderPopUp from './ProductOrderPopUp';

export default function ProductsSearch({
  productsArr,
  totalPrice,
  setTotalPrice,
  order,
  setOrder,
  changeBool,
  setChangeBool,
}) {
  console.log(productsArr, 'productsArr aqui');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function selectProduct(index) {
    setSelectedProduct(index === selectedProduct ? null : index);
  }

  function inputVerification(value) {
    console.log(value);
    if (value === '') {
      setProducts([]);
    }
    const arr = productsArr;
    console.log('antes do filter');
    const filteredArr = arr.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase()),
    );
    console.log('depois do filter');
    setProducts(filteredArr);
    setSearchInputValue(value);
  }

  // product,
  // products,
  // setOpen,
  // setClose,
  // totalPrice,
  // setTotalPrice,
  // order,
  // setOrder,
  // changeBool,
  // setChangeBool,

  return (
    <>
      <div>
        <input
          value={searchInputValue}
          placeholder="O que você está procurando?"
          onChange={e => inputVerification(e.target.value)}
        />
      </div>

      <ProductsCardContainer>
        {searchInputValue === ''
          ? ''
          : products.map((p, index) => (
              <>
                <ProductCard onClick={() => selectProduct(index)}>
                  <img src={p.ImageUrl} alt="burger" />
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <h3>R${Number(p.price).toFixed(2)}</h3>
                </ProductCard>

                <ProductOrderPopUp
                  product={p}
                  products={productsArr}
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
      </ProductsCardContainer>
    </>
  );
}

const ProductCard = styled.div`
  height: 34vh;
  width: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  margin-top: 5vh;
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

const ProductsCardContainer = styled.div`
  display: flex !important;
  flex-direction: row !important;
  width: 95% !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  @media (max-width: 1200px) {
    flex-direction: column !important;
  }
`;
