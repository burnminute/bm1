import React from "react";
import { ViewRouter } from "./views/view-router";
import { AppComponent, BackgroundColumnLeft, ContentBodyWrapper } from "./components/layout";
import { Header } from "./components/header";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/create-apollo-client";


export default () => {
	return (
		<ApolloProvider client={apolloClient}>
			<AppComponent>
				<BackgroundColumnLeft />
				<Header />
				<ContentBodyWrapper>
					<ViewRouter />
				</ContentBodyWrapper>
			</AppComponent>
		</ApolloProvider>
	);
};
