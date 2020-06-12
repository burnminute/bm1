import React, { FC } from "react";
import styled from "styled-components";
import { IDimensions } from "../config/definitions";
import { CenteredContentWrapper } from "./layout/components";

const LoadingSvg: FC<IDimensions> = ({ width = 47, height = 47, ...rest }) => {
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="23.5" cy="23.5" r="22" fill="white" stroke="#328294" strokeWidth="3" />
		</svg>
	)
}

const IconWrapper = styled.div`
	display:flex;
	flex-direction:row;
	justify-content: space-evenly;
	width: 9rem;
`
type IDelaySeconds = { delay?: number }
const FadeInOut = styled.div<IDelaySeconds>`
	animation-duration: 1s;
	animation-name: fadeInOut;
	animation-delay: ${props => props?.delay || 0}s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	@keyframes fadeInOut {
	from {
		opacity:1;
	}
	to {
		opacity:0.1;
	}
}
`

export const LoadingAnimation: FC = () => {
	return (
		<CenteredContentWrapper>
			<IconWrapper>
				<FadeInOut><LoadingSvg /></FadeInOut>
				<FadeInOut delay={0.5}><LoadingSvg /></FadeInOut>
				<FadeInOut delay={1}><LoadingSvg /></FadeInOut>
			</IconWrapper>
		</CenteredContentWrapper>
	)
}
