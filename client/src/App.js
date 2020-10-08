import React from "react";
import Splash from "./pages/Splash";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"

function App() {
    return (
            <Router>
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/profile" exact component={Profile} />
                </Switch>
            </Router>
    );
}

export default App;
