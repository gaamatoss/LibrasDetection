import React, { useContext } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import { AuthContext } from './context/auth';
import login from './view/login';
import cadastro from './view/cadastro';
import alfabeto from './view/alfabeto';
import gestos from './view/gestos';


const Routes = () => {
    const [auth] = useContext(AuthContext);
  
    const isLogin = () => {
      return auth;
    };
  
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) =>
            isLogin() ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      );
    };
  
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/alfabeto" exact component={alfabeto} />
          <PrivateRoute path="/gestos" exact component={gestos} />
          <Route path="/" exact component={login} />
          <Route path="/cadastro" exact component={cadastro} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  