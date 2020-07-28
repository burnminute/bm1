import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/create-apollo-client";
import { ViewRouter } from "./views/view-router";
import { GlobalStyle } from "./config/styles";

export default () => {
	return (
		<>
			<GlobalStyle />
			<ApolloProvider client={apolloClient}>
				<ViewRouter />
			</ApolloProvider>
		</>
	);
};
