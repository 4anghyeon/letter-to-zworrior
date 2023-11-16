import AppRouter from './shared/AppRouter';
import {GlobalStyle} from './shared/GloabalStyle';
import {Provider} from 'react-redux';
import store from './redux/config/store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
