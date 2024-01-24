import React from 'react';
import styled from 'styled-components';

export default function AditionalsCheckBox({
  aditional,
  productOrder,
  setProductOrder,
  changeBool,
  setChangeBool,
  categoryId,
}) {
  function addAditionalPrice(checked) {
    if (checked) {
      const arr = productOrder;
      console.log(aditional);
      arr.push(aditional);

      setProductOrder(arr);
      setChangeBool(!changeBool);
    } else {
      const filtered = productOrder.filter(o => o.name !== aditional.name);
      setProductOrder(filtered);
      setChangeBool(!changeBool);
    }
  }

  if (categoryId === 3 || categoryId === 4) {
    return '';
  }

  return (
    <>
      <h3>Adicionais</h3>
      <p>Selecione ingredientes para adicionar ao seu lanche</p>
      <Container>
        <Side>
          <img src={aditional.ImageUrl} alt={aditional.name} />
          <div>
            <h2>{aditional.name}</h2>
            <p>{aditional.description}</p>
          </div>
        </Side>

        <Side>
          <h2>R${Number(aditional.price).toFixed(2)}</h2>
          <CheckBox
            type="checkbox"
            onChange={e => addAditionalPrice(e.target.checked)}
          />
        </Side>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  align-items: center;
  width: 100% !important;
  margin: 4vh 0;
  h2 {
    margin: 0 !important;
  }
  p {
    margin-top: 2vh !important;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: center !important;
  img {
    width: 15vh;
    height: 15vh;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    margin-right: 3vh;
  }
  div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
  }
  @media (max-width: 1200px) {
    margin-top: 3vh;
  }
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 2vh !important;
  height: 2vh !important;
  border-radius: 50% !important;
  border: 2px solid #333 !important;
  margin: 0 0 0 4vh !important;
`;
