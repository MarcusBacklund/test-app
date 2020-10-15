import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/pricing" component={Pricing}/>
            <Route component={Error}/>
           </Switch>
           </div>
           <div className="Footer">
            <Footer />
          </div>  
      </BrowserRouter>
    )}
}

export default App;