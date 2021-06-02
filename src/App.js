import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import AddRentHouse from './Components/Dashboard/AddRentHouse/AddRentHouse';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/Dashboard/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/bookingList">
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path="/addRentHouse">
              <AddRentHouse />
            </PrivateRoute>
            {/* Admin  */}
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/addHouse">
              <AddHouse />
            </Route>
            <Route path="/bookingList">
              <BookingList />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
