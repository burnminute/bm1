import React, { FC } from "react";
import { IDimensions } from "../../config/definitions";

export const EditIcon: FC<IDimensions> = ({ width, height = 41, ...rest }) => {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M26.1414 7.73504L25.5169 8.35952L27.1822 10.0247L27.8066 9.40025C27.8085 9.39814 27.8113 9.39491 27.815 9.3906C27.8289 9.37426 27.8529 9.34432 27.881 9.30302C27.9393 9.21708 28.0009 9.1025 28.0356 8.97417C28.0853 8.79042 28.1322 8.44008 27.6169 7.92475C27.1016 7.40943 26.7513 7.4564 26.5675 7.5061C26.4392 7.54082 26.3246 7.60239 26.2387 7.66071C26.1974 7.68874 26.1674 7.71281 26.1511 7.72667C26.1468 7.73033 26.1435 7.73316 26.1414 7.73504ZM23.2983 10.5782L15.5735 18.303L14.521 21.0207L17.2387 19.9682L24.9635 12.2434L23.2983 10.5782ZM26.0453 5.57549C26.9168 5.33973 28.0068 5.48616 29.0311 6.51054C30.0555 7.53493 30.2019 8.62484 29.9662 9.49641C29.8582 9.89574 29.6808 10.2126 29.5358 10.4262C29.4622 10.5346 29.3935 10.6215 29.3401 10.6845C29.3133 10.7161 29.2899 10.7421 29.2713 10.7623C29.2619 10.7723 29.2537 10.781 29.2468 10.7881L29.2374 10.7978L29.2335 10.8018L29.2317 10.8036L29.2309 10.8044C29.2305 10.8049 29.2301 10.8053 28.5229 10.0982L29.2301 10.8053L18.3545 21.6808L11.0207 24.521L13.8609 17.1872L24.7364 6.31162L25.4433 7.01855C24.7364 6.31162 24.7368 6.31122 24.7372 6.31081L24.7381 6.30997L24.7399 6.30819L24.7439 6.30424L24.7535 6.29485C24.7607 6.28794 24.7693 6.27975 24.7794 6.27041C24.7996 6.25176 24.8256 6.22842 24.8572 6.20158C24.9202 6.14813 25.007 6.07947 25.1155 6.00586C25.3291 5.8609 25.6459 5.68351 26.0453 5.57549ZM30 28.5213H11V26.5213H30V28.5213Z"
				fill="#006278"
			/>
		</svg>
	);
};
