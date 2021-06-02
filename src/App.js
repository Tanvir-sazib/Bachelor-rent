
import './App.css';
import './app/utils/css/Colors.css'
import HomePage from './app/pages/Home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import data from './fakeData'

console.log(JSON.stringify(data));
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
