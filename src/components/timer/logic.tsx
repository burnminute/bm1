import { Duration } from "luxon";
import React, { FC, useEffect, useRef, useState } from "react";

const TIME_UNIT: number = 1000;
const DEFAULT_FORMAT: string = "hh:mm:ss";

const formatTime = (
	milliseconds: number,
	format: string = DEFAULT_FORMAT
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
			setCurrentTime(currentTime - TIME_UNIT);
			if (currentTime <= TIME_UNIT) {
				clearTimer();
				if (handleComplete) {
					handleComplete();
				}
			}
		}, TIME_UNIT);

		timer.current = timerIntervalID;
		return () => clearTimer();
	});

	const clearTimer = () => clearInterval(timer.current);

	const DisplayComponent = component || "span";

	return <DisplayComponent>{formatTime(currentTime)}</DisplayComponent>;
};
