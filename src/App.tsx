import React from 'react';
import './App.css';
import {ItemComponent} from "./components/Item";

function App() {
  return (
    <>
      <ItemComponent
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg'
        text='Rodrigo'
      />
    </>
  );
}

export default App;
