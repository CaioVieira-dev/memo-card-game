import { useEffect, useState } from 'react';

export function useTimer(timeInSeconds: number) {
    const [timer, setTimer] = useState(0);
    const [stop, setStop] = useState(true);

    function stopTimer() {
        setStop(true);
    }
    useEffect(() => {
        setTimer(timeInSeconds)
    }, [])


    useEffect(() => {
        let interval: any;
        if (stop) {
            clearInterval(interval);
            setStop(false);
            return;
        }
        interval = setInterval(() => { if (timer > 0) setTimer(timer - 1) }, 1000);
        if (timer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer])


    return { timer, stopTimer };
}