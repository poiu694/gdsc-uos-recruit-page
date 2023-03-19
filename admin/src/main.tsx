import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { initMocks } = await import('@gdsc-uos/api');
    await initMocks();
  }
};

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
