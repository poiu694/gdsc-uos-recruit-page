import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from 'gdsc-uos-design-system';

import MainRoute from './routes';
import { context as APIContext, TestAPI } from './api';

const apiInstance = {
  test: new TestAPI(),
} as const;

function App() {
  const [isReadyRender, setIsReadyRender] = React.useState(
    import.meta.env.VITE_API_MOCKING_ON !== 'enable',
  );
  const api = React.useMemo(() => apiInstance, []);

  React.useLayoutEffect(() => {
    async function runMockServer() {
      const { initMocks } = await import('gdsc-uos-api');
      await initMocks();
      setIsReadyRender(true);
    }
    const isMockingServerOn = import.meta.env.VITE_API_MOCKING_ON === 'enable';
    if (isMockingServerOn && !isReadyRender) {
      runMockServer();
    }
  }, []);

  if (!isReadyRender) {
    return null;
  }

  return (
    <APIContext.Provider value={api}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <MainRoute />
      </ThemeProvider>
    </APIContext.Provider>
  );
}

export default App;
