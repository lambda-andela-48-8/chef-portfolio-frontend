import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './home';
import Login  from './pages/login';
import SignUp from './pages/signup';


function App() {
  return (
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
  <Route exact path='/' component={Home}></Route>
  <Route path='/login' component={Login}></Route>
  <Route path='/signup' component={SignUp}></Route>
  </Switch>
  </BrowserRouter>
  </Provider>  
  );
}

export default App;
