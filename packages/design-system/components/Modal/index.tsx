import styled from '@emotion/styled';

import Portal from './Portal';
import { theme } from '../../theme';
import { StrictPropsWithChildren } from '../../utils/helperTypes';
import React from 'react';
import ModalContext from './ModalContext';

interface Props {
  isOpen: boolean;
  isClickBackgroundClose?: boolean;
  onClose?: () => void;
}

function Modal({
  isOpen,
  isClickBackgroundClose = true,
  onClose: _onClose,
  children,
}: StrictPropsWithChildren<Props>) {
  const id = React.useMemo(() => String(new Date().getTime()), []);

  const onClose = React.useCallback(() => {
    if (typeof _onClose !== 'undefined') {
      _onClose();
    }
    window.document.getElementById(id)?.remove();
  }, []);

  return isOpen ? (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <Portal id={id}>
        <Wrapper onClick={isClickBackgroundClose ? onClose : undefined}>
          <ModalContent>{children}</ModalContent>
        </Wrapper>
      </Portal>
    </ModalContext.Provider>
  ) : null;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.gray50};
`;

export default Modal;
