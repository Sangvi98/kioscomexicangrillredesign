import React from 'react';
import './App.css';
import Slideshow from '../Slideshow/Slideshow';
import { render } from '@testing-library/react';
import NavBar from '../NavBar/NavBar';
import Menu from '../Menu/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div> 
          <NavBar />
          <Switch>
            <Route path="/kioscomexicangrillredesign/" exact component={Slideshow}/>
            <Route path="/kioscomexicangrillredesign/menu" component={Menu}/>
          </Switch>    
        </div>
      </Router>
        
    )
  }
}

export default App;
