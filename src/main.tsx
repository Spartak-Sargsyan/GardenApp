import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./style/global.css"
import "./i18n/i18.ts"
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from "react-redux"
import { store } from "./store/store.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
