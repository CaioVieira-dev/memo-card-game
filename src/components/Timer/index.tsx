
import { useEffect } from "react";
import styled from "styled-components";
import { useTimer } from '../../hooks/useTimer'

const TimerDisplay = styled.p`
font-size:24px;
color:hsl(184.61538461538458, 100%, 97%);
`
type TimerProps = {
    time: number;
}


export function Timer(props: TimerProps) {
    const { timer, stopTimer } = useTimer(props.time);

    useEffect(() => {
        const event = (e: KeyboardEvent) => {

            if (e.code === 'KeyT')
                stopTimer();
        }
        document.addEventListener("keydown", (e) => event(e));
        return () => document.removeEventListener("keydown", event);
    }, [])

    return (
        <TimerDisplay>Tempo: {timer}</TimerDisplay>
    )
}