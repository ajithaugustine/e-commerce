
import './App.css';
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/login/Login';
import Products from './Components/Products/products';
import View from './Components/View/Viewproduct';

function App() {
  return (
    <div className="App">
      <Router>

<Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/signup' component={Signup} exact/>
          <Route path='/products' component={Products} exact/>
          <Route path='/view/:id' component={View} exact/>
</Switch>
         
        
      </Router>
    </div>
  );
}

export default App;
