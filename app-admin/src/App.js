//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Home from './containers/Home';
import PrivateRoute from './components/HOC/PrivateRoute';
// Signin and Signup are public routers

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <Route path='/signin' component={Signin} /> 
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
