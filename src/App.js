import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login'
import Sign_up from './pages/Sign_up'

import CustomHeader from './components/Navbar';
import CustomFooter from './components/Footer';
import CreateGroup from './pages/CreateGroup'
import EditGroup from './pages/EditGroup'
import Yelp from './pages/YelpAPITest'
import Feed from './pages/Feed'


import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';


import Result from './pages/Result'


class App extends Component {

  render() {
  return (
    <div>

    <CustomHeader />
    <CustomFooter />

      <Router>
        <Switch>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" render={(props) => <Login logout="YES"/>}/>
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/CreateGroup" component={CreateGroup}/>} />
          <Route path={'/EditGroup'} component={EditGroup}/>} />
          <Route exact path="/yelp" component={Yelp}/>} />
          <Route exact path="/feed" component={Feed}/>} />
          <Route exact path="/Result" component={Result}/>} />
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          <Route exact path="/about" component={About}/>} />
          <Route exact path="/team" component={Team}/>} />
          <Route exact path="/contact" component={Contact}/>} />
        </Switch>
      </Router>

    </div>
  );
}
}

export default App;
