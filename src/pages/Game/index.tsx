import logo from '../../assets/logo.png';
import { Button } from '../../components/Button'
import { Difficulty } from '../../components/Difficulty'

import styled from 'styled-components'
import { useEffect, useState } from 'react';

const GameBg = styled.div`
    min-height: 100vh;
    background-color: hsl(184.7058823529412, 100%, 90%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Center = styled.div`
max-width: 892px;
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
gap:16px;

`

export function Game() {
    const [gameState, setGameState] = useState('menuScreen');
    const [gameDifficulty, setGameDifficulty] = useState('easy');



    useEffect(() => {
        console.log(gameDifficulty)
    }, [gameDifficulty])
    function changeGameDifficulty(difficulty: string) {
        setGameDifficulty(difficulty)
    }
    return (
        <GameBg>
            <Center>
                <img src={logo} alt="logo" />
                {gameState === 'menuScreen' &&
                    <>
                        <Difficulty
                            changeGameDifficulty={changeGameDifficulty} />
                        <Button>Novo Jogo</Button>
                    </>
                }
            </Center>

        </GameBg>

    )
}