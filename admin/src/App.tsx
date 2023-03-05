import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from 'gdsc-uos-design-system';
import React from 'react';

import { context as APIContext, TestAPI } from './api';
import MainRoute from './routes';

const apiInstance = {
  test: new TestAPI(),
} as const;

function App() {
  const api = React.useMemo(() => apiInstance, []);

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
