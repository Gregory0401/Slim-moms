import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import GlobalStyle from './GlobalStyles';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Slim-moms">
          <ThemeProvider theme={(darkTheme, lightTheme)}>
            <App />
            {/* <GlobalStyle /> */}
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
