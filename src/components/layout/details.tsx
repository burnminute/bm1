import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { CenteredContentWrapper } from "../layout/";

export const DetailsContentWrapper = styled(CenteredContentWrapper)`
	background-color: rgba(251, 253, 255, 0.37);
	border-radius: 0.5rem;
	justify-content: space-between;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 1rem 2rem;
	position: relative;
`;

export const DetailsFooterWrapper = styled.div`
	background-color: rgba(251, 253, 255, 0.37);
	border-radius: 0 0 0.5rem 0.5rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 1.5rem 0 1.5rem 0;
	padding: 1rem;
	width: 100%;
`;
export const DetailsHeaderWrapper = styled(DetailsFooterWrapper)`
	background-color: rgba(251, 253, 255, 0.37);
	border-radius: 0.5rem 0.5rem 0 0;
	color: rgba(41, 53, 57, 0.51);
	font-family: Sunflower, sans-serif;
	font-size: 1.25rem;
	font-weight: 700;
	justify-content: flex-end;
	margin: 0 0 1.5rem 0;
	text-align: end;
	width: 100%;
`;
export const DetailsBodyWrapper = styled(DetailsContentWrapper)`
	background-color: rgba(251, 253, 255, 0.17);
	border-radius: 0;
	flex-direction: row;
	font-family: Quantico, sans-serif;
	font-size: 1.5rem;
	height: unset;
	justify-content: space-between;
	margin: 0;
	padding: 0 1rem;
	text-align: center;
	width: 100%;
`;

export const DetailsTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 1rem 0 0;
	width: 100%;
	text-overflow: ellipsis;
`;
