import logo from '../../assets/logo.png';
import { Button } from '../../components/Button'
import { Difficulty } from '../../components/Difficulty'
import { Board } from '../../components/Board'
import { Timer } from '../../components/Timer'
import { Victory } from '../../components/Victory'
import { GameOver } from '../../components/GameOver'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'

import { useGame } from '../../hooks/useGame'
import { useEffect } from 'react';
import { Center, GameBg, Logo, Score, Wrapper } from './styles'

type GameProps = {
    handleThemeSwitch: (themeTitle: string, hue?: number) => void;
}

export function Game(props: GameProps) {
    const { changeGameState,
        gameState,
        prepareGameBoard,
        gameScore,
        resetScore,
        startGame,
        endGame,
        gameMaxTime } = useGame()

    function play() {
        prepareGameBoard();
        changeGameState('playing');
        startGame();
    }
    useEffect(() => {
        const event = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                endGame();
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
                <ThemeSwitcher handleThemeSwitch={props.handleThemeSwitch} />
                <Wrapper
                    className={gameState === 'playing' ? "playing" : ""}>
                    <Logo
                        src={logo}
                        alt="logo"
                        className={gameState === 'playing' ? "playing" :
                            gameState === 'victory' ? "victory" :
                                gameState === "gameOver" ? "gameOver" : ""} />
                    {gameState === 'playing' &&
                        <>
                            <Timer time={gameMaxTime} />
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
                {gameState === 'victory' &&
                    <Victory />
                }
                {gameState === 'gameOver' &&
                    <GameOver />
                }
            </Center>

        </GameBg>

    )
}