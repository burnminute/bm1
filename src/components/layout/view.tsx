import React, { FC } from "react";
import { AppComponent, BackgroundColumnLeft, ContentBodyWrapper } from "./components";
import { Header, IHeader } from "./header";
import { ILinkElement } from "../../config/definitions";

export interface IView {
	breadcrumb: ILinkElement[];
	sectionTitle: string;
}

export const View: FC<IView> = ({ breadcrumb, sectionTitle, children }) => {
	return (
		<AppComponent>
			<BackgroundColumnLeft />
			<Header breadcrumb={breadcrumb} sectionTitle={sectionTitle} />
			<ContentBodyWrapper>
				{children}
			</ContentBodyWrapper>
		</AppComponent>
	)
};
