import logo from '../../assets/logo.png';
import { Button } from '../../components/Button'
import { Difficulty } from '../../components/Difficulty'
import { Board } from '../../components/Board'

import styled from 'styled-components'
import { useGame } from '../../hooks/useGame'

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
    const { changeGameState, gameState, prepareGameBoard } = useGame()

    function play() {
        prepareGameBoard();
        changeGameState('playing');
    }

    return (
        <GameBg>
            <Center>
                <img src={logo} alt="logo" />
                {gameState === 'menuScreen' &&
                    <>
                        <Difficulty />
                        <Button onClick={() => play()}>Novo Jogo</Button>
                    </>
                }
                {gameState === 'playing' &&
                    <Board />
                }
            </Center>

        </GameBg>

    )
}