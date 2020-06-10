import React, { FC } from "react";
import { ContentHeaderWrapper } from "./components";
import { BurnminuteLogoTitle } from "../logo-title";
import { Link } from "react-router-dom";

export const Header: FC = () => {
	return (
		<ContentHeaderWrapper>
			<Link to="/">
				<BurnminuteLogoTitle />
			</Link>
		</ContentHeaderWrapper>
	)
};
