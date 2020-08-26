import { Duration } from "luxon";
import React, { FC, useEffect, useRef, useState } from "react";
import { DateTimeFormats, DateTimeUnits } from "../config/defaults";

const { Hour, Minute, Second } = DateTimeUnits;

const formatTime = (
	milliseconds: number,
	format: string = milliseconds > Hour
		? DateTimeFormats.Hours
		: DateTimeFormats.Minutes
): string => Duration.fromObject({ milliseconds }).toFormat(format);

export interface ITimerProps {
	component?: any;
	fullTime?: number;
	handleComplete?(): any;
}

const handleTimerEnd = (handler?: any): any => {
	if (handler && typeof handler === "function") {
		handler();
	}
	console.log("Time's Up!");
};

/**
 *
 * Defaults:
 * 30 minute timer
 * displayed as a `<span/>`
 * which stops and does nothing.
 */
export const Timer: FC<ITimerProps> = ({
	fullTime = Minute * 30,
	component,
	handleComplete,
}) => {
	const [currentTime, setCurrentTime] = useState(fullTime);
	const timer = useRef<any>(null);
	const clearTimer = () => clearInterval(timer.current);

	useEffect(() => {
		const timerIntervalID = setInterval(() => {
			const newTime: number = Math.max(0, currentTime - Second);
			setCurrentTime(newTime);
			if (currentTime <= 0) {
				clearTimer();
				handleTimerEnd(handleComplete);
				return;
			}
		}, Second);

		timer.current = timerIntervalID;
		return () => clearTimer();
	});

	const DisplayComponent = component || "span";

	return <DisplayComponent>{formatTime(currentTime)}</DisplayComponent>;
};
