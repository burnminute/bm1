import React, { FC } from "react";
import styled from "styled-components";

export const ContentWrapper = styled.div`
	position: absolute;
	left: 2.5rem;
	right: 2.5rem;
	bottom: 2.5rem;
	top: 9.5rem;
	background: linear-gradient(
			188.79deg,
			rgba(241, 252, 248, 0.5) 12.88%,
			rgba(255, 255, 255, 0) 88.9%
		),
		rgba(255, 255, 255, 0.74);
	border: 0.125rem solid rgba(255, 255, 255, 0.87);
	box-sizing: border-box;
	border-radius: 0px 0px 0.75rem 0.75rem;
	display: flex;
	flex-direction: column;
`;

export const ContentTitle = styled.div`
	font-family: Rubik, sans-serif;
	font-size: 1.25rem;
	position: relative;
	padding: 0.75rem 1.75rem 0rem 1.5rem;
	height: 2.5rem;
	background-color: rgba(251, 253, 255, 0.37);
	color: rgba(49, 96, 99, 1);
`;

export const ContentBody = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
	padding: 1.5rem;
	overflow: hidden;
`;

export interface IContent {
	contentTitle?: string;
}

export const Content: FC<IContent> = ({ children, contentTitle }) => {
	return (
		<ContentWrapper>
			{contentTitle && <ContentTitle>{contentTitle}</ContentTitle>}
			<ContentBody>{children}</ContentBody>
		</ContentWrapper>
	);
};
