import logo from '../../assets/logo.png';
import { Button } from '../../components/Button'
import { Difficulty } from '../../components/Difficulty'
import { Board } from '../../components/Board'
import { Timer } from '../../components/Timer'

import styled from 'styled-components'
import { useGame } from '../../hooks/useGame'
import { useEffect } from 'react';

const GameBg = styled.div`
    height: 100vh;
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
justify-content: stretch;
flex-direction:column;
gap:16px;
position: relative;
background-color: hsl(184.70588235294116, 100%, 80%);
border-radius: 32px;
padding:0 112px;
-webkit-box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4); 
box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4);


`
const Wrapper = styled.div`
.playing&{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
`
const Logo = styled.img`
margin-top: 60px;
    .playing&{
        height:67px;
        align-self: flex-start;
        margin-top: 24px;
    }
`
const Score = styled.p`
font-size:24px;
color:hsl(184.61538461538458, 100%, 97%);
`
export function Game() {
    const { changeGameState, gameState, prepareGameBoard, gameScore, resetScore } = useGame()

    function play() {
        prepareGameBoard();
        changeGameState('playing');
    }
    useEffect(() => {
        const event = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                changeGameState('menuScreen');
                resetScore();
            }
        }
        document.addEventListener('keydown', (e) => event(e))
        return () => document.removeEventListener('keydown', event)
    }, [])

    return (
        <GameBg>
            <Center>
                <Wrapper className={gameState === 'playing' ? "playing" : ""}>
                    <Logo
                        src={logo}
                        alt="logo"
                        className={gameState === 'playing' ? "playing" : ""} />
                    {gameState === 'playing' &&
                        <>
                            <Timer time={30} />
                            <Score>Pontuação: {gameScore}</Score>
                        </>
                    }
                </Wrapper>
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