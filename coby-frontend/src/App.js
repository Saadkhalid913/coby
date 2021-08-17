import './index.css';
import "./index.css"
import MainComponent from "./components/MainComponent"
import React from 'react';
import Aboutpage from './components/Aboutpage';
import { BrowserRouter, Route } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/about" component={Aboutpage}/>
      <Route path ="/" exact component={MainComponent}/>
    </BrowserRouter>
  )
}

export default App;
