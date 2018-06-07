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
import Header from './components/Header'

import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

import Game from './pages/Game';



class App extends Component {

  render() {
  return (
    <div>

    <CustomHeader />
    <CustomFooter />




      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>} />
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/CreateGroup" component={CreateGroup}/>} />
          <Route exact path="/yelp" component={Yelp}/>} />
          <Route exact path="/feed" component={Feed}/>} />
          <Route exact path="/feed" render={(props) => <Feed />} />
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          <Route exact path="/about" component={About}/>} />
          <Route exact path="/team" component={Team}/>} />
          <Route exact path="/contact" component={Contact}/>} />
          <Route exact path="/game" component={Game}/>} />
        </Switch>
      </Router>

    </div>
  );
}
}

export default App;
