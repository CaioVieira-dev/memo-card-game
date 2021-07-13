import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

export function useGame() {
    const value = useContext(GameContext);
    return value;
}