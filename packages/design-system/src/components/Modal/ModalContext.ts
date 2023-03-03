import { createGenericContext, createGenericUseContext } from '../../utils';

interface ModalEvent {
  isOpen: boolean;
  onClose: () => void;
}

export const context = createGenericContext<ModalEvent>();

export const useModalContext = createGenericUseContext<ModalEvent>(context);
