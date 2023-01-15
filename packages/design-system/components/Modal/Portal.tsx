import React from 'react';
import ReactDOM from 'react-dom';

import { StrictPropsWithChildren } from '../../utils/helperTypes';

interface Props {
  id: string;
}

function Portal({ id, children }: StrictPropsWithChildren<Props>) {
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const portalElement = document.getElementById(id);

    if (portalElement) {
      setElement(portalElement);
      return;
    }
    const newPortalElementInstance = document.createElement('div');
    newPortalElementInstance.id = id;
    newPortalElementInstance.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 9995;
      width: 100vw;
      height: 100vh;
    `;
    window.document.body.appendChild(newPortalElementInstance);
  }, []);

  if (!element) {
    return null;
  }
  return ReactDOM.createPortal(children, element);
}

export default Portal;
