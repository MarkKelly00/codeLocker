import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

import "./styles/index.css";

ReactDOM.render(
    <Auth0Provider
        domain="dev-e0kk6pg3.us.auth0.com"
        clientId="Kp5dMVqPxEzovXVjECEiWbY4P8IbG2O1"
        redirectUri={window.location.origin}>
            <React.StrictMode>
                <Root>
                    <App />
                </Root>
            </React.StrictMode>
    </Auth0Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
