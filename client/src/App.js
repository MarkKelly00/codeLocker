import React from "react";
import Splash from "./pages/Splash";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Locker from "./pages/Locker";
import Loading from "./components/AuthO/Loading";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import UserInfo from "./pages/UserInfo"
import ProtectedRoute from "./components/AuthO/ProtectedRoute";
import FAQ from "./pages/FAQ"
import AboutUs from "./pages/AboutUs"

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

    return (
            <Router>
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/aboutus" component={AboutUs} />
                <ProtectedRoute path="/userinfo" exact component={UserInfo} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                <ProtectedRoute path="/profile" exact component={Profile} />
                <ProtectedRoute path="/locker" exact component={Locker} />
                </Switch>
            </Router>
    );
}

export default App;
