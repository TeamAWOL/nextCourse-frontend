import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login'
import Sign_up from './pages/Sign_up'

import CustomHeader from './components/Navbar';
import CustomFooter from './components/Footer';

import CreateGroup from './pages/CreateGroup'
import Yelp from './pages/YelpAPITest'
import Feed from './pages/Feed'
import Game from './pages/Game'
import Header from './components/Header'



class App extends Component {


  render() {
  return (
    <div>

      <CustomHeader />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>} />
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/CreateGroup" component={CreateGroup}/>} />
          <Route exact path="/yelp" component={Yelp}/>} />
          <Route exact path="/feed" component={Feed}/>} />
          <Route exact path="/game" component={Game}/>} />
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
        </Switch>
      </Router>
      <CustomFooter />
    </div>
  );
}
}

export default App;
