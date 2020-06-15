import React, { FC } from "react";
import styled from "styled-components";

export const StartButton = styled.button`
	font-family: Sunflower, sans-serif;
	font-size: 2rem;
	line-height: 2.5rem;
	color: #ffffff;
	padding: 0.125rem 1.5rem;
	background: linear-gradient(
			194.6deg,
			rgba(255, 255, 255, 0.45) 22.72%,
			rgba(255, 255, 255, 0) 73.92%
		),
		#006278;
	border: 0.37rem solid #63a03d;
	box-sizing: border-box;
	border-radius: 0.125rem;
	cursor: pointer;
`;

export const CancelButton = styled(StartButton)`
	background: linear-gradient(
			192.34deg,
			rgba(255, 255, 255, 0.45) 22.72%,
			rgba(255, 255, 255, 0) 73.92%
		),
		#5d7980;
	border: 0.37rem solid #99ab8e;
`;
