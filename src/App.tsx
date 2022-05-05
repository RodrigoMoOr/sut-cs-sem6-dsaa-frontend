import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {NavBar} from "./components/navbar/NavBar";


function App() {

  return (
    <Router>
      <NavBar/>
      <Switch
    </Router>
  );
}

export default App;
