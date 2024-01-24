/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import Scroll from '../../../hooks/Scroll';

export default function Categories({ categories }) {
  function scrollVerification(id) {
    if (id === 1) {
      if (window.innerWidth <= 1200 && window.innerHeight < 800) {
        Scroll(1300);
        return;
      }
      if (window.innerWidth <= 1200 && window.innerHeight > 800) {
        Scroll(1600);
        return;
      }
      Scroll(700);
    }

    if (id === 2) {
      if (window.innerWidth <= 1200 && window.innerHeight < 800) {
        Scroll(2400);
        return;
      }
      if (window.innerWidth <= 1200 && window.innerHeight > 800) {
        Scroll(3000);
        return;
      }
      Scroll(1100);
    }

    if (id === 3) {
      if (window.innerWidth <= 1200 && window.innerHeight < 800) {
        Scroll(3250);
        return;
      }
      if (window.innerWidth <= 1200 && window.innerHeight > 800) {
        Scroll(4050);
        return;
      }
      Scroll(1600);
    }

    if (id === 4) {
      if (window.innerWidth <= 1200 && window.innerHeight < 800) {
        Scroll(4100);
        return;
      }
      if (window.innerWidth <= 1200 && window.innerHeight > 800) {
        Scroll(5100);
        return;
      }
      Scroll(2000);
    }
  }

  return (
    <Container>
      <h2> Selecione uma categoria</h2>

      <CategoryContainer>
        {categories.map(c => (
          <CategoryCard onClick={() => scrollVerification(c.id)}>
            <img src={c.ImageUrl} alt={c.name} />
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
    @media (max-width: 1200px) {
      text-align: center;
    }
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  margin-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
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
    font-size: 2.2vh;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 4vh;
    margin-right: 0;
  }
`;
