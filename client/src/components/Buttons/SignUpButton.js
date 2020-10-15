import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
    className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md m-4"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      variant="primary"
      
    >
      Sign Up
    </button>
  );
};

export default SignupButton;