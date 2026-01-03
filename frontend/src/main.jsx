import React from 'react';
import ReactDOM,{createRoot} from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
import App from './App.jsx'

import { ImpactProvider } from "./context/ImpactContext";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ImpactProvider>
    <App />
  </ImpactProvider>
    </BrowserRouter>
)

