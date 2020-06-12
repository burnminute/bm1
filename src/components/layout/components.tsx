import styled, { createGlobalStyle } from "styled-components";

export const BodyGlobalStyle = createGlobalStyle`
body {
	background-color: #354147;
}`

export const AppComponent = styled.div`
	background-color: #354147;
	background: linear-gradient(217deg, #2B3134, rgba(31,32,33,0.1) 70.71%),
				linear-gradient(336deg,  #354147, rgba(76,77,78,0.3) 70.71%),
				linear-gradient(127deg, rgba(22,25,28,.8), #2B3134 70.71%)
				;	
	height: 100vh; 
	display:flex;
	position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    overflow: hidden;
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
	padding: 1.75rem;
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
