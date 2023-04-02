

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';
import TotastContainer from '../Toast/ToastContainer';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TotastContainer/>
      <Container>
        <Header />
        <Routes/>
      </Container>
    </ThemeProvider>


  );
}

export default App;

