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
import DestinationDetail from './components/DestinationDetail/DestinationDetail';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/tickets">
                <Tickets />
              </Route>
              <Route path="/destinationDetail/:ticketInfo">
                <DestinationDetail />
              </Route>
              <Route path="/destination/:price">
                <Destination />
              </Route>
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
      </userContext.Provider>
    </>
  );
}

export default App;
