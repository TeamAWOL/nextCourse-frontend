import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/Login'
import Sign_up from './pages/Sign_up'
import CreateGroup from './pages/CreateGroup'
import Yelp from './pages/YelpAPITest'
import Feed from './pages/Feed'
import Header from './components/Header'


class App extends Component {

  render() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>} />
          <Route exact path="/sign_up" component={Sign_up}/>} />
          <Route exact path="/CreateGroup" component={CreateGroup}/>} />
          <Route exact path="/yelp" component={Yelp}/>} />
          <Route exact path="/feed" component={Feed}/>} />
          <Route exact path="/feed" render={(props) => <Feed />} />
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
        </Switch>
      </Router>

    </div>
  );
}
}

export default App;
