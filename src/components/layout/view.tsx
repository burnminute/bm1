import React, { FC } from "react";
import { AppComponent, BackgroundColumnLeft, ContentBodyWrapper } from "./components";
import { Header } from "./header";

export const View: FC = ({ children }) => {
	return (
		<AppComponent>
			<BackgroundColumnLeft />
			<Header />
			<ContentBodyWrapper>
				{children}
			</ContentBodyWrapper>
		</AppComponent>
	)
};
