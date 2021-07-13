import { createContext, useState, useEffect, ReactNode } from 'react'

type GameContextType = {
    gameState: string;
    gameDifficulty: string;
    changeGameState: (state: "playing" | "menuScreen") => void;
    changeGameDifficulty: (difficulty: string) => void;
}
type GameContextProviderProps = {
    children: ReactNode;
}
export const GameContext = createContext({} as GameContextType);

export function GameContextProvider(props: GameContextProviderProps) {
    const [gameState, setGameState] = useState('menuScreen');
    const [gameDifficulty, setGameDifficulty] = useState('easy');

    function changeGameState(state: "playing" | "menuScreen") {
        setGameState(state);
    }
    function changeGameDifficulty(difficulty: string) {
        setGameDifficulty(difficulty);
    }

    return (
        <GameContext.Provider value={{
            changeGameState,
            changeGameDifficulty,
            gameState,
            gameDifficulty
        }}>
            {props.children}
        </GameContext.Provider>
    )
}