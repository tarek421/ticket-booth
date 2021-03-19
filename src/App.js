import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Tickets from './components/Tickets/Tickets';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <Header />
    <div className="container">
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/ticket/:name">
            <Destination />
          </Route>
          <Route path="/login">
            <Login />
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
