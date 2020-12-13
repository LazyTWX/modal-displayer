import styled from 'styled-components';

export const Container = styled.div`
  height: 60vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 4px;
  
  background-color: var(--purple);

  border: 0;
  outline: 0;

  font-size: 1.6rem;

  color: #fff;
  font-family: sans-serif;

  transition: filter .2s;

  &:hover {
    filter: brightness(90%);
  }
`;

interface Props {
  modal: boolean;
}

export const ModalOverlayer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  background-color: rgba(0, 0, 0, .30);
  z-index: -1;

  opacity: ${({ modal }) => modal ? 1 : 0};

  transition: opacity .3s;
`;

export const ModalContainer = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  height: 580px;
  width: 580px;

  background-color: #121214;

  visibility: ${({ modal }) => modal ? 'visible' : 'hidden'};

  > button {
    position: absolute;
    right: 10px;
    top: 10px;

    padding: 10px 5px;
    
    background-color: transparent;

    border: 0;
    outline: 0;

    > .bar-1 {
      height: 4px;
      width: 30px;

      border-radius: 4px;

      background-color: #fff;

      transform: rotate(45deg);
    }

   > .bar-2 {
      height: 4px;
      width: 30px;

      border-radius: 4px;

      background-color: #fff;

      transform: rotate(-45deg) translate(2px, -3px);
    }
  }

  > h1 {
    font-size: 2.6rem;
    font-family: sans-serif;

    color: var(--purple);
    text-align: center;
  }
`;