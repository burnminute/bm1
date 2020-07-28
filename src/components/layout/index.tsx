import styled from "styled-components";
import { Colors } from "../../config/styles";

export { PanelView, View } from "./view";
export {
	CenteredContentWrapper,
	Content,
	ContentPanel,
	ContentTitle,
} from "./content";
export {
	DetailsContentWrapper,
	DetailsFooterWrapper,
	DetailsHeaderWrapper,
	DetailsBodyWrapper,
	DetailsTextWrapper,
} from "./details";

export const AppComponent = styled.div`
	background: linear-gradient(217deg, #2b3134, rgba(31, 32, 33, 0.1) 70.71%),
		linear-gradient(336deg, #354147, rgba(76, 77, 78, 0.3) 70.71%),
		linear-gradient(127deg, rgba(22, 25, 28, 0.8), #2b3134 70.71%);
	background-color: ${Colors.DEEP_BLUE_GRAY};
	bottom: 0;
	display: flex;
	flex-direction: column;
	left: 0;
	margin: 0;
	overflow: hidden;
	padding: 1rem 1rem 2rem 1rem;
	position: absolute;
	right: 0;
	top: 0;
`;

export const BackgroundColumnLeft = styled.div`
	position: absolute;
	width: 33%;
	left: 1rem;
	top: 1rem;
	bottom: 1rem;
	background: rgba(25, 26, 28, 0.37);
	border-radius: 1rem 0px 0px 1rem;
`;
