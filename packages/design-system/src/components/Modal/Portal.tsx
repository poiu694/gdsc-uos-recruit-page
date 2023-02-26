import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  id: string;
}

export function Portal({ id, children }: React.PropsWithChildren<Props>) {
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
    `;
    window.document.body.appendChild(newPortalElementInstance);
    setElement(newPortalElementInstance);
  }, [id]);

  if (!element) {
    return null;
  }
  return ReactDOM.createPortal(children, element);
}
