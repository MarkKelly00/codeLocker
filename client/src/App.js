import React from "react";
import Splash from "./pages/Splash";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/AuthO/Loading";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import UserInfo from "./pages/UserInfo"
import ProtectedRoute from "./components/AuthO/ProtectedRoute";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

    return (
            <Router>
              <Switch>
                <Route exact path="/" component={Splash} />
                <ProtectedRoute path="/userinfo" exact component={UserInfo} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                <ProtectedRoute path="/profile" exact component={Profile} />
                </Switch>
            </Router>
    );
}

export default App;
