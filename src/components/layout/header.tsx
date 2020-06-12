import React, { FC } from "react";
import styled from "styled-components";
import { ILinkElement } from "../../config/definitions";
import { Breadcrumb } from "./header/breadcrumb";
import { BurnminuteLogoTitle } from "../logo-title";
import { Link } from "react-router-dom";

export interface IHeader {
	breadcrumb: ILinkElement[];
	sectionTitle: string;
}

export const ContentHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	height: 9rem;
	left: 2.5rem;
	right: 2.5rem;
	top: 2rem;
	background-color: transparent;
	background-image: url("./images/burnminute-logo-title.png");
	background-repeat: no-repeat;
	`

const SectionTitle = styled.div`
	user-select: none;
    color: #5b5280;
    font-family: Sunflower,sans-serif;
    font-size: 2rem;
    font-weight: bold;
    margin-top: -0.87rem;
    text-transform: lowercase;
`

const SubHeaderWrapper = styled.div`
	padding: 0.75rem 0rem 0rem 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow: hidden;
`

export const Header: FC<IHeader> = ({ breadcrumb, sectionTitle }) => {
	return (
		<ContentHeaderWrapper>
			<Link to="/">
				<BurnminuteLogoTitle />
			</Link>
			<SubHeaderWrapper>
				<Breadcrumb trail={breadcrumb} />
				<SectionTitle>{sectionTitle}</SectionTitle>
			</SubHeaderWrapper>
		</ContentHeaderWrapper>
	)
};
