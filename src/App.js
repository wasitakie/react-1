import React from 'react';
import './App.css';
import Reserve from './conponents/Reserve';
import './conponents/TextItem.css'

function App() {
  const design ={color:"red",textAlign:"center"}
  return (
    <div className="container">
    
      <h1 style={design}>โปรแกรมจองรถยนต์</h1>
      <Reserve/>

    </div>
  );
}

export default App;
