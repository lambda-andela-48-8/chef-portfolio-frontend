import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './home';
import Login  from './pages/login';
import SignUp from './pages/signup';
import UserPage from './pages/user';
import CreateRecipe from './pages/create_recipe';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';
import SingleRecipe from './pages/single_recipe';

function App() {
  if(localStorage.jwt){
    setAuthorizationToken(localStorage.jwt);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwt)));
  }
  
  return (
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/user' component={UserPage}></Route>
      <Route path='/create_recipe' component={CreateRecipe}></Route>
      <Route path='/recipe/:id' component={SingleRecipe}></Route>
    </Switch>
  </BrowserRouter>
  </Provider>  
  );
}

export default App;
