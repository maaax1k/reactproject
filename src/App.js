import React, {useState} from 'react';
import './styles/App.css'
import TableApi from "./components/TableApi";
import Header from "./components/Header";

function App() {


  return (
    <div className="App">
        <Header/>
      <TableApi/>
    </div>
  );
}

export default App;
