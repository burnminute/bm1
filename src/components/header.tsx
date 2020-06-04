import React, { FC } from "react";
import { ContentHeaderWrapper } from "./layout";
import { BurnminuteLogoTitle } from "./logo-title";

export const Header: FC = () => {
	return (
		<ContentHeaderWrapper>
			<BurnminuteLogoTitle />
		</ContentHeaderWrapper>
	)
};
