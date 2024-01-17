import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: #171717;
  }
`;
