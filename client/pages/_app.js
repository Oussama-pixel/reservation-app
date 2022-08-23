import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import {store} from '../store';
import {Provider} from 'react-redux';
import React from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store = {store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}

export default  MyApp;
