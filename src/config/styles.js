import { createGlobalStyle } from "styled-components";

/**
 * Color constants
 * @enum {string}
 */
export const Colors = {
	BLACK_BLUE: "#101F27",
	DEEP_BLUE_GRAY: "#354147",
	BLUE: "#14219C",
	LILAC: "#B69DDB",
	WHISPER: "#F8F6FA",
	WHITE: "#FFFFFF",
};

/**
 * Font families
 * @enum {string}
 */
export const Fonts = {
	OXYGEN: `Oxygen, sans-serif;`,
	RUBIK: `Rubik, sans-serif;`,
	SUNFLOWER: `Sunflower, sans-serif;`,
	QUANTICO: `Quantico, sans-serif;`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${Colors.WHISPER};
    font-family: ${Fonts.OXYGEN};
    font-size: 16px;
    margin: 0;
    overflow: hidden;
    width: 100%;
  }
`;
