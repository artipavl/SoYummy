import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #8baa36;
  padding: 1%;
  border-radius: 20%;
  width: 15vw;
  height: 15vw;
  @media ${props => props.theme.device.tablet} {
    width: 5vw;
    height: 5vw;
  }
`;

export const LoaderImage = styled.img`
  color: red;
  height: 100%;
  transform-origin: 50% 100%;

  &:nth-child(1) {
    animation: rotate-50-1 1.5s infinite;
    margin-right: 4px;
  }

  &:nth-child(2) {
    animation: rotate-50-2 1.5s infinite;
  }

  @keyframes rotate-50-1 {
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(40deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
  @keyframes rotate-50-2 {
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(-40deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
`;
