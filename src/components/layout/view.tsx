import React, { FC } from "react";
import { AppComponent, BackgroundColumnLeft } from "./";
import { Header, IHeader } from "./header";
import { IBreadcrumb } from "./header/breadcrumb";
import { Content, IContent } from "./content";

export interface IView extends IHeader, IBreadcrumb, IContent {
}

export const View: FC<IView> = ({ breadcrumbTrail, contentTitle, sectionTitle, children }) => {
	return (
		<AppComponent>
			<BackgroundColumnLeft />
			<Header breadcrumbTrail={breadcrumbTrail} sectionTitle={sectionTitle} />
			<Content contentTitle={contentTitle}>
				{children}
			</Content>
		</AppComponent>
	)
};
