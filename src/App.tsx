import React, { useState } from 'react';

import { Container, Button, ModalOverlayer, ModalContainer } from './styles';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Container>
        <Button onClick={() => setModalState(true)}>Abrir modal</Button>
      </Container>

      <ModalOverlayer modal={modalState} />

      <ModalContainer modal={modalState}>
        <button onClick={() => setModalState(false)}>
          <div className="bar-1" />
          <div className="bar-2" />
        </button>

        <h1>Modal</h1>
      </ModalContainer>
      <GlobalStyles />
    </>
  );
}

export default App;
