import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children, item }) => {
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-e0kk6pg3.us.auth0.com"
      clientId="Kp5dMVqPxEzovXVjECEiWbY4P8IbG2O1"
      redirectUri="http://localhost:3000/dashboard"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
      
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;