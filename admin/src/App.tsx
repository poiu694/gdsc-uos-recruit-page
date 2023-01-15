import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from 'gdsc-uos-design-system';
import MainRoute from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <MainRoute />
    </ThemeProvider>
  );
}

export default App;
