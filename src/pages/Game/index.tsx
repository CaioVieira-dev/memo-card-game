import logo from '../../assets/logo.png';
import { Button } from '../../components/Button'
import { Difficulty } from '../../components/Difficulty'
import { Board } from '../../components/Board'
import { Timer } from '../../components/Timer'
import { Victory } from '../../components/Victory'
import { GameOver } from '../../components/GameOver'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import { ModeSelect } from '../../components/Mode'
import { MoveCounter } from '../../components/MoveCounter'

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
        gameMaxTime,
        gameMode,
        resetMoves } = useGame()

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
                resetMoves();
            }
        }
        document.addEventListener('keydown', (e) => event(e))
        return () => document.removeEventListener('keydown', event)
    }, [changeGameState, resetScore, endGame, resetMoves])

    function GameScreen() {
        switch (gameState) {
            case 'menuScreen':
                return <>
                    <ModeSelect />
                    <Difficulty />
                    <Button onClick={() => play()}>Novo Jogo</Button>
                </>
            case 'playing':
                return <Board />
            case 'victory':
                return <Victory />
            case 'gameOver':
                return <GameOver />
        }

    }
    function headerText() {
        switch (gameMode) {
            case 'normal':
                return <Timer time={gameMaxTime} />
            case 'limited':
                return <MoveCounter />
            case 'challenge':
                return <div>
                    <Timer time={gameMaxTime} />
                    <MoveCounter />
                </div>
        }
    }

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
                            {headerText()}
                            <Score>Pontuação: {gameScore}</Score>
                        </>
                    }
                </Wrapper>
                {GameScreen()}
            </Center>

        </GameBg>

    )
}
