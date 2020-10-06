import React from "react";
import Splash from "./pages/Splash";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
            <Router>
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Router>
    );
}

export default App;
