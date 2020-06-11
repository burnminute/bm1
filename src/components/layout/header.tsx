import React, { FC } from "react";
import styled from "styled-components";
import { ContentHeaderWrapper } from "./components";
import { Breadcrumb } from "./header/breadcrumb";
import { BurnminuteLogoTitle } from "../logo-title";
import { Link } from "react-router-dom";

export const Header: FC = () => {
	return (
		<ContentHeaderWrapper>
			<Link to="/">
				<BurnminuteLogoTitle />
			</Link>
			<Breadcrumb />
		</ContentHeaderWrapper>
	)
};
