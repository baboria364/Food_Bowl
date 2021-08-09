import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbars from './Components/Navbars';


const App = () => {
  return (
    <>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
export default App;
