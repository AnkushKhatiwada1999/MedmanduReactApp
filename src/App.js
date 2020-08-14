import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Header from'./components/header'
import Body from'./components/body'
import Footer from'./components/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
<Route path="/contact" component={Body} />
     </Switch>
      </BrowserRouter>

      <Footer/>

    </div>
  );
}

export default App;
