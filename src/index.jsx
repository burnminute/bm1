import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
// import { Provider } from "react-redux";
import App from "./App";
// import store from "./app/store";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="burnminute1.us.auth0.com"
			clientId="JVCzJNu40JDRuFmN8HNquW4Wys3H5OWX"
			redirectUri={window.location.origin}
		>
			<RecoilRoot>
				{/* <Provider store={store}> */}
				<App />
				{/* </Provider> */}
			</RecoilRoot>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
