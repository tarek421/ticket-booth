import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Tickets from './components/Tickets/Tickets';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>  
    <div className="container">
    <Router>
    <Header />
    <Switch>
 
      
          <Route path="/home">
              <Home />
            </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <PrivetRoute path="/ticket/:name">
            <Destination />
          </PrivetRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
      
      
      </Switch>
    </Router>
    </div>
    </userContext.Provider>
    </>
  );
}

export default App;
