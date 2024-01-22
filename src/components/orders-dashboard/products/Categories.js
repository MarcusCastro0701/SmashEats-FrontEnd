import React from 'react';
import styled from 'styled-components';
import burger from '../../../assets/images/burger.jpeg';
import combo from '../../../assets/images/combo.jpeg';
import porcao from '../../../assets/images/porcao.jpeg';
import sobremesa from '../../../assets/images/sobremesa.jpeg';

export default function Categories() {
  const categoriesArr = [
    {
      name: 'Sanduíches',
      img: burger,
      scroll: 0,
    },
    {
      name: 'Combos',
      img: combo,
      scroll: 0,
    },
    {
      name: 'Porções',
      img: porcao,
      scroll: 0,
    },
    {
      name: 'Sobremesas',
      img: sobremesa,
      scroll: 0,
    },
  ];

  return (
    <Container>
      <h2> Selecione uma categoria</h2>

      <CategoryContainer>
        {categoriesArr.map(c => (
          <CategoryCard>
            <img src={c.img} alt={c.name} />
            <p>{c.name}</p>
          </CategoryCard>
        ))}
      </CategoryContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  margin-top: 10vh;
  h2 {
    color: black;
    font-size: 2vh;
    font-weight: 700;
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryCard = styled.div`
  height: 26vh;
  width: 34vh;
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
    font-size: 2.2vh;
  }
`;
