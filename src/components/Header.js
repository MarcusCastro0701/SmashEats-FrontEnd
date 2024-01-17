/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import scroll from '../hooks/Scroll';

export default function Header() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = item => {
    setSelectedItem(item.item);
    scroll(item.position);
  };

  return (
    <Container>
      <HeaderItems>
        <Logo>
          <img alt="Logo" />
        </Logo>

        <>
          <div
            onClick={() => handleItemClick({ item: 'pedidos', position: 0 })}
            className={selectedItem === 'pedidos' ? 'selected' : ''}
          >
            Pedidos
          </div>

          <div
            className={selectedItem === 'cozinha' ? 'selected' : ''}
            onClick={() => handleItemClick({ item: 'cozinha', position: 0 })}
          >
            Cozinha
          </div>

          <div
            className={selectedItem === 'retirada' ? 'selected' : ''}
            onClick={() => handleItemClick({ item: 'retirada', position: 0 })}
          >
            Retirada
          </div>
        </>
      </HeaderItems>
    </Container>
  );
}

const Container = styled.div`
  z-index: 10000;
  background: orange;
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 150vh;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (max-width: 1200px) {
    height: 12vh;
    width: 100vw;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  width: 90%;

  div {
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
  }

  .selected {
    color: #00efff;
  }
  @media (max-width: 1200px) {
    width: 95%;
    justify-content: space-between;
    div {
      cursor: pointer;
      font-size: 2.3vw;
      font-weight: 600;
    }
  }
`;

const Logo = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 32px;
  }
  img {
    width: 120px;
    height: 100px;
    @media (max-width: 1200px) {
      width: 72px;
      height: 60px;
    }
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 10vw;
    border-radius: 30px;
    h1 {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 10vw;
      height: 10vw;
    }
  }
`;
