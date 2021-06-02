
import './App.css';
import './app/utils/css/Colors.css'
import HomePage from './app/pages/Home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HouseDetails from './app/pages/HouseDetails/HouseDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/details/:id'>
          <HouseDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
