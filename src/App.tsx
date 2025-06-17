import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let state:{count:number,name:string}={
    count:1,
    name:"ram"
  }
  let {count,name}=state;
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{name}</h1>
    </div>
  );

}

export default App;
