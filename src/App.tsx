import React from 'react';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
 
import './App.css';

import { Header } from './Parts/header/header';
import { NavBar } from './Parts/navBar/navBar';

function App() {
  return (
    <div className="base-container">
      <Header></Header>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
