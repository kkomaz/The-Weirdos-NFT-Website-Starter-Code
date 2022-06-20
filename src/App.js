import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>

      </ThemeProvider>
      App
    </>
  );
}

export default App;
