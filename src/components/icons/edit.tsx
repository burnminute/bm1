import React, { FC } from "react";
import { IDimensions } from "../../config/definitions";

export const EditIcon: FC<IDimensions> = ({ width, height = 41, ...rest }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="18.5" cy="18.5" r="17.5" fill="white" stroke="#328294" strokeWidth="2" />
			<path d="M24.3424 9.11985C24.3424 9.11985 25.7843 7.67795 27.4401 9.33376C29.0959 10.9896 27.654 12.4315 27.654 12.4315L26.2121 13.8734L25.347 14.7385L16.1188 23.9667L10.7141 26.0598L12.8072 20.655L22.0354 11.4269L22.9005 10.5617L24.3424 9.11985Z" fill="white" />
			<path d="M25.347 14.7385L16.1189 23.9667L10.7141 26.0598L12.8072 20.655L22.0354 11.4269M25.347 14.7385L22.0354 11.4269M25.347 14.7385L26.2121 13.8734M22.0354 11.4269L22.9005 10.5617M22.9005 10.5617L26.2121 13.8734M22.9005 10.5617L24.3424 9.11985C24.3424 9.11985 25.7843 7.67795 27.4401 9.33376C29.0959 10.9896 27.654 12.4315 27.654 12.4315L26.2121 13.8734" stroke="#006278" strokeWidth="2" />
			<path d="M11 29.5213H26" stroke="#006278" strokeWidth="2" />
		</svg>
	)
}
