import { Duration } from "luxon";
import React, { FC, useEffect, useRef, useState } from "react";

const TIMER_MS_UNIT: number = 1000;
const HOUR_IN_MS: number = 60 * 60 * 1000;
const DEFAULT_FORMAT_HOURS: string = "hh:mm:ss";
const DEFAULT_FORMAT_MINUTES: string = "mm:ss";

const formatTime = (
	milliseconds: number,
	format: string = milliseconds > HOUR_IN_MS
		? DEFAULT_FORMAT_HOURS
		: DEFAULT_FORMAT_MINUTES
): string => Duration.fromObject({ milliseconds }).toFormat(format);

export interface ITimer {
	fullTime: number;
	component?: any;
	handleComplete?(): any;
}

export const Timer: FC<ITimer> = ({ fullTime, component, handleComplete }) => {
	const timer = useRef<any>(null);
	const [currentTime, setCurrentTime] = useState(fullTime);

	useEffect(() => {
		const timerIntervalID = setInterval(() => {
			setCurrentTime(currentTime - TIMER_MS_UNIT);
			if (currentTime <= TIMER_MS_UNIT) {
				clearTimer();
				if (handleComplete) {
					handleComplete();
				}
			}
		}, TIMER_MS_UNIT);

		timer.current = timerIntervalID;
		return () => clearTimer();
	});

	const clearTimer = () => clearInterval(timer.current);

	const DisplayComponent = component || "span";

	return <DisplayComponent>{formatTime(currentTime)}</DisplayComponent>;
};
