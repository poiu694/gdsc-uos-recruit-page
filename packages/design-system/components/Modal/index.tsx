import React from 'react';
import styled from '@emotion/styled';

import Portal from './Portal';
import { theme } from '../../theme';
import ModalContext from './ModalContext';
import { StrictPropsWithChildren } from '../../utils';

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

  const onClose = () => {
    if (typeof _onClose !== 'undefined') {
      _onClose();
    }
    window.document.getElementById(id)?.remove();
  };

  return isOpen ? (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <Portal id={id}>
        <ModalContent>{children}</ModalContent>
        <Background onClick={isClickBackgroundClose ? onClose : undefined} />
      </Portal>
    </ModalContext.Provider>
  ) : null;
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border-radius: 8px;
  background-color: ${theme.palette.gray50};
  box-shadow: 0px 2px 4px 0px ${theme.palette.gray450};
`;

export default Modal;
export { default as QNAGeneratorModal } from './QNAGeneratorModal';
