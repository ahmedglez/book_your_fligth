
import {MuralComponent} from "./components/MuralComponent"
import {TitleComponent} from "./components/TitleComponent"
import {OptionsBoardComponent} from "./components/OptionsBoardComponent"

import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment> 
           
      <MuralComponent>        
        <TitleComponent/>        
      </MuralComponent>
      <OptionsBoardComponent/>
      


    </React.Fragment>
  );
}

export default App;
