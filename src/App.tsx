import React from 'react';
import './App.css';
import {Item, ItemProps} from "./components/Item";
import {Carousel, mockItems} from "./components/Carousel";

function App() {

  return (
    <>
      <Carousel items={mockItems} title='Books in this Genre'/>
    </>
  );
}

export default App;
