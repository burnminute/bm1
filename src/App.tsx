import React from "react";
import styled from "styled-components";
import { ViewRouter } from "./views";

const App = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	text-align: center;
	height: 100vh;
	display:flex;
`;

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Montserrat', sans-serif;
//     box-sizing: border-box;
//     background-color: ${({ theme }) => theme.backgroundColor};
//     margin:0;
//     min-height: 100vh;
//   }
// `;

// const lightMode = {
// 	backgroundColor: "#F6F8FC",
// 	link: "rgb(112, 76, 182)",
// 	text: "black"
// };

// const darkMode = {
// 	backgroundColor: "black",
// 	link: "rgb(112, 76, 182)",
// 	text: "white"
// };

export default () => {
	return (
		<App>
			<ViewRouter />
		</App>
	);
};
