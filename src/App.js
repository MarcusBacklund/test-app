import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="background">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pricing" component={Pricing} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route component={Error} />
          </Switch>
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;