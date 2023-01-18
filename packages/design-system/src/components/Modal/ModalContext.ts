import {
  createGenericContext,
  createGenericUseContext,
} from '../../utils';

interface ModalEvent {
  isOpen: boolean;
  onClose: () => void;
}

const context = createGenericContext<ModalEvent>();
export default context;

export const useModalContext = createGenericUseContext<ModalEvent>(context);
