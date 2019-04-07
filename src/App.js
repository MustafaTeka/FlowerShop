import React, { Component } from 'react';
import {BrowserRouter,Route ,Switch} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import Navbar1 from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar1 /> 
          <Switch> 
            <Route path="/" component ={Home} exact />
            <Route path="/about" component ={About} exact />
            <Route path="/services" component ={Services} exact />
            <Route path="/products" component ={Products} exact  />
            <Route path="/contact" component ={Contact} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
