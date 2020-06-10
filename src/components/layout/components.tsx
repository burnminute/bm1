import styled from "styled-components";

export const AppComponent = styled.div`
	background-color: #354147;
	/* background: linear-gradient(217deg, rgba(43,42,41,.7), rgba(31,32,33,0.1) 70.71%),
				linear-gradient(127deg, rgba(22,25,28,.8), rgba(54,53,52,0.2) 70.71%),
				linear-gradient(336deg, rgba(11,12,13,.9), rgba(76,77,78,0.3) 70.71%);	 */
	background: linear-gradient(217deg, #2B3134, rgba(31,32,33,0.1) 70.71%),
				linear-gradient(336deg,  #354147, rgba(76,77,78,0.3) 70.71%),
				linear-gradient(127deg, rgba(22,25,28,.8), #2B3134 70.71%)
				;	
	/* background: conic-gradient(from 166.31deg at 50% 50%, #2B3134 0deg, rgba(255, 255, 255, 0) 240deg, #2B3134 360deg), #354147;	*/
	height: 100vh; 
	display:flex;
	`;

export const ListWrapper = styled.div`
	background-color: rgba(213,223,233,0.1);
`

export const BackgroundColumnLeft = styled.div`
	position: absolute;
	width: 33%;
	left: 1rem;
	top: 1rem;
	bottom: 1rem;
	background: rgba(25, 26, 28, 0.37);
	border-radius: 1rem 0px 0px 1rem;
`

export const ContentBodyWrapper = styled.div`
	position: absolute;
	left: 2.5rem;
	right: 2.5rem;
	bottom: 2.5rem;
	top: 10rem;
	background: linear-gradient(188.79deg, rgba(241, 252, 248, 0.5) 12.88%, rgba(255, 255, 255, 0) 88.9%), rgba(255, 255, 255, 0.74);
	border: 0.09rem solid rgba(255, 255, 255, 0.87);
	box-sizing: border-box;
	border-radius: 0px 0px 0.75rem 0.75rem;
`

export const CenteredContentWrapper = styled.div`
	align-items: center; 
	display: flex;
	flex-direction: column;
	height:100%;
	justify-content: center; 
	position: relative;
	width:100%;
`

export const ContentHeaderWrapper = styled.div`
	position: absolute;
	height: 7rem;
	left: 2.5rem;
	right: 2.5rem;
	top: 2.5rem;
	background-color: transparent;
	background-image: url("./images/burnminute-logo-title.png");
	background-repeat: no-repeat;
`
