import React, { FC } from "react";
import { IDimensions } from "../../config/definitions";

export const NavMenuToggleIcon: FC<IDimensions> = ({
	width,
	height = 22,
	...rest
}) => {
	return (
		<svg
			width="40"
			height="34"
			viewBox="0 0 40 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 6.18182C0 2.76769 2.75517 0 6.15385 0H33.8462C37.2448 0 40 2.76769 40 6.18182V27.8182C40 31.2323 37.2448 34 33.8462 34H6.15385C2.75517 34 0 31.2323 0 27.8182V6.18182Z"
				fill="white"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33.8462 3.09091H6.15385C4.45451 3.09091 3.07692 4.47476 3.07692 6.18182V27.8182C3.07692 29.5252 4.45451 30.9091 6.15385 30.9091H33.8462C35.5455 30.9091 36.9231 29.5252 36.9231 27.8182V6.18182C36.9231 4.47476 35.5455 3.09091 33.8462 3.09091ZM6.15385 0C2.75517 0 0 2.76769 0 6.18182V27.8182C0 31.2323 2.75517 34 6.15385 34H33.8462C37.2448 34 40 31.2323 40 27.8182V6.18182C40 2.76769 37.2448 0 33.8462 0H6.15385Z"
				fill="#328294"
			/>
			<path
				d="M11.3426 19.4402C10.5939 19.4402 9.96036 19.1799 9.44203 18.6592C8.9237 18.1385 8.66454 17.5195 8.66454 16.8021C8.66454 16.0731 8.91794 15.4425 9.42475 14.9103C9.94308 14.378 10.5824 14.1119 11.3426 14.1119C12.0797 14.1119 12.7017 14.378 13.2086 14.9103C13.7154 15.4425 13.9688 16.0731 13.9688 16.8021C13.9688 17.5195 13.7154 18.1385 13.2086 18.6592C12.7017 19.1799 12.0797 19.4402 11.3426 19.4402Z"
				fill="#006278"
			/>
			<path
				d="M19.5322 19.4402C18.7835 19.4402 18.15 19.1799 17.6316 18.6592C17.1133 18.1385 16.8541 17.5195 16.8541 16.8021C16.8541 16.0731 17.1075 15.4425 17.6144 14.9103C18.1327 14.378 18.772 14.1119 19.5322 14.1119C20.2694 14.1119 20.8913 14.378 21.3982 14.9103C21.905 15.4425 22.1584 16.0731 22.1584 16.8021C22.1584 17.5195 21.905 18.1385 21.3982 18.6592C20.8913 19.1799 20.2694 19.4402 19.5322 19.4402Z"
				fill="#006278"
			/>
			<path
				d="M27.7218 19.4402C26.9731 19.4402 26.3396 19.1799 25.8212 18.6592C25.3029 18.1385 25.0437 17.5195 25.0437 16.8021C25.0437 16.0731 25.2971 15.4425 25.804 14.9103C26.3223 14.378 26.9616 14.1119 27.7218 14.1119C28.459 14.1119 29.081 14.378 29.5878 14.9103C30.0946 15.4425 30.348 16.0731 30.348 16.8021C30.348 17.5195 30.0946 18.1385 29.5878 18.6592C29.081 19.1799 28.459 19.4402 27.7218 19.4402Z"
				fill="#006278"
			/>
		</svg>
	);
};
