import { useEffect, useState } from "react";

function useTimer(initialState = 0) {
    const [time, setTime] = useState(initialState);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return { time, isRunning, start, pause, reset };
}

export default useTimer;
