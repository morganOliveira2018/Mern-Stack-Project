//import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Home from './containers/Home';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
// Signin and Signup are public routers 

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => { // Hooks - React
    if (!auth.authenticate) { // o usuário é autenticado sempre que for verdadeiro
      dispatch(isUserLoggedIn()); // esse usuário já está logado?
    }

  }, []);


  return (
    <div className="App">
      <Switch>
        {/* privateRoute pq só pode ser acessada após o signin */}
        <PrivateRoute path='/' exact component={Home} /> 
        <PrivateRoute path='/produtos' component={Products} />
        <PrivateRoute path='/pedidos' component={Orders} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
