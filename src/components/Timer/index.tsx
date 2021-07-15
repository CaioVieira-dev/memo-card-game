
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useInterval } from '../../hooks/useInterval'
import { useGame } from '../../hooks/useGame'

const TimerDisplay = styled.p`
font-size:24px;
color:hsl(184.61538461538458, 100%, 97%);
`
type TimerProps = {
    time: number;
}


export function Timer(props: TimerProps) {
    const [timer, setTimer] = useState(props.time);
    const [isRunning, setIsRunning] = useState(true);
    const { setRemainingTime, gameOver } = useGame();


    function stopTimer() {
        setIsRunning(false);
    }
    useInterval(() => {
        if (timer > 0) {
            setTimer(timer - 1)
            setRemainingTime(timer - 1);
        } else {

            setIsRunning(false)
            //chamar perdeu jogo
            gameOver();
        }
    }, isRunning ? 1000 : null)

    useEffect(() => {
        const event = (e: KeyboardEvent) => {

            if (e.code === 'KeyT')
                stopTimer();
        }
        document.addEventListener("keydown", (e) => event(e));
        return () => {
            document.removeEventListener("keydown", event)

        };
    }, [])

    return (
        <TimerDisplay>Tempo: {timer}</TimerDisplay>
    )
}