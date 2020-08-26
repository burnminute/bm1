import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { IContent, IContentPanel } from "../../config//definitions";

export interface IContentWrapperProps {
	panelCount?: number;
}

export const CenteredContentWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const ContentWrapper = styled("div")<IContentWrapperProps>`
	border: 0.125rem solid rgba(255, 255, 255, 0.87);
	border-radius: 0px 0px 0.75rem 0.75rem;
	display: flex;
	flex-direction: ${(props) => (props.panelCount ? "row" : "column")};
	overflow: hidden;
	margin: 0.4rem;
	z-index: 0;
	height: 100%;
`;

export const ContentPanelWrapper = styled("div")<IContentPanel>`
	background: linear-gradient(
			188.79deg,
			rgba(241, 252, 248, 0.5) 12.88%,
			rgba(255, 255, 255, 0) 88.9%
		),
		${(props) =>
			props.background ? props.background : "rgba(255, 255, 255, 0.74);"};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	width: ${(props) => (props.pctWidth ? props.pctWidth : "100")}%;
	height: 100%;
`;

export interface IContentTitleProps {
	color?: any;
}

export const ContentTitle = styled("div")<IContentTitleProps>`
	font-family: Rubik, sans-serif;
	font-size: 1.5rem;
	padding: 0.75rem 1.75rem 0rem 1.5rem;
	height: 2.5rem;
	background-color: rgba(251, 253, 255, 0.37);
	color: ${(props) => (props.color ? `${props.color}` : `rgba(49, 96, 99, 1)`)};
`;

export const ContentBody = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0.5rem;
	overflow: hidden;
	justify-content: center;
	height: 100%;
`;

export const ContentPanel: FC<IContentPanel> = ({
	background,
	children,
	contentTitle,
	pctWidth,
}) => {
	const TitleElement: ReactNode = contentTitle ? (
		typeof contentTitle === "string" ? (
			<ContentTitle>{contentTitle}</ContentTitle>
		) : (
			contentTitle
		)
	) : (
		<ContentTitle />
	);
	return (
		<ContentPanelWrapper background={background} pctWidth={pctWidth}>
			{TitleElement}
			<ContentBody>{children}</ContentBody>
		</ContentPanelWrapper>
	);
};

export const Content: FC<IContent> = ({ children, contentTitle }) => {
	return (
		<ContentWrapper>
			<ContentPanel contentTitle={contentTitle}>
				<>{children}</>
			</ContentPanel>
		</ContentWrapper>
	);
};
