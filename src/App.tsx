import React from "react";
import { ViewRouter } from "./views/view-router";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/create-apollo-client";


export default () => {
	return (
		<ApolloProvider client={apolloClient}>
			<ViewRouter />
		</ApolloProvider>
	);
};
