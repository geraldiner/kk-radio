import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from "./App";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

const url = process.env.NODE_ENV !== "production" ? "http://localhost:4000" : "https://kk-radio.herokuapp.com";

const client = new ApolloClient({
	uri: url,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
