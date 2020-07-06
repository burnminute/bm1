import React, { FC } from "react";
import { AppComponent, BackgroundColumnLeft } from "./";
import { Header, IHeader } from "./header";
import { IBreadcrumb } from "./header/breadcrumb";
import {
	Content,
	ContentPanel,
	ContentWrapper,
	IContentPanel,
} from "./content";
import { IContent } from "../../config//definitions";

export interface IView extends IHeader, IBreadcrumb, IContent {}
export interface IPanelView extends IView {
	panels: IContent[];
}

export const View: FC<IView> = ({
	breadcrumbTrail,
	contentTitle,
	sectionTitle,
	children,
}) => {
	return (
		<AppComponent>
			<BackgroundColumnLeft />
			<Header breadcrumbTrail={breadcrumbTrail} sectionTitle={sectionTitle} />
			<Content contentTitle={contentTitle}>{children}</Content>
		</AppComponent>
	);
};

export const PanelView: FC<IPanelView> = ({
	breadcrumbTrail,
	panels,
	sectionTitle,
}) => {
	return (
		<AppComponent>
			<BackgroundColumnLeft />
			<Header breadcrumbTrail={breadcrumbTrail} sectionTitle={sectionTitle} />
			<ContentWrapper panelCount={panels.length}>
				{panels.map((panel: IContentPanel, index) => (
					<ContentPanel
						background={panel.background}
						key={index}
						contentTitle={panel.contentTitle}
					>
						{panel.children}
					</ContentPanel>
				))}
			</ContentWrapper>
		</AppComponent>
	);
};
