import React, { Component, Form, FormInput } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login'
import Sign_up from './pages/Sign_up'
import Yelp from './pages/YelpAPI'
import CreateGroup from './pages/CreateGroup'

class App extends Component {
  render() {
  return (
    <div>
    <h1>NEXT COURSE</h1>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>} />
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/CreateGroup" component={CreateGroup}/>} />
          <Route exact path="/" render={() => (
          <Redirect to="/login"/>

          )}/>
        </Switch>
      </Router>

    </div>
  );
}
}

export default App;
