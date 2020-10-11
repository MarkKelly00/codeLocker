import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


const Auth0Info = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub } = user;
  console.log("user is: ", user);
  
  return {user};
};

export default Auth0Info;