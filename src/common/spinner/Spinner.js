import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  margin-top: 30px;
  border-radius: 50px;
  border-bottom: 3px dotted orange;
  border-right: 3px dotted orange;
  border-top: 6px ridge orange;
  border-left: 3px dotted orange;
  width: ${props => props.width || '60px'};
  height: ${props => props.height || '60px'};
  animation: ${spinAnimation} 2s linear infinite;
  position: absolute;
  z-index: 9999;
  top: 23vh;
`;
