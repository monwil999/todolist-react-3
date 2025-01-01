import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import GlobalStyle from './GlobalStyle'; // Import GlobalStyle
import App from './App';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <GlobalStyle />
        <App />
      </>
    </Provider>
  </React.StrictMode>
);

export default App;
