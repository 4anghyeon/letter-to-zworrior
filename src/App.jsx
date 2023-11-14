import {BrowserRouter, Router, Routes} from 'react-router-dom';
import AppRouter from './shared/AppRouter';
import {GlobalStyle} from './shared/GloabalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
