import React from 'react';
import './App.css';
import BasicModule from './components/BasicModule';
import BasicPropsModule from './components/BasicPropsModule';
import DefaultPropsModule from './components/DefaultPropsModule';
import BasicStateModule from './components/BasicStateModule';
import StateArrayModule from './components/StateArrayModule';
import LocalJSONModule from './components/LocalJSONModule';
import Checklist from './components/Checklist';
import Characters from './components/characters';


const App = () => {
  return(
    <div className='app'>
      <Characters />
      <Checklist />
      <DefaultPropsModule />
       <BasicPropsModule value='pink' />
  <BasicModule />
  <BasicStateModule />
  <StateArrayModule />
  <LocalJSONModule />

  

  </div>
    
  )
}

export default App;
