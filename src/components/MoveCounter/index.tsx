import { MovementsDisplay } from './styles'
import { useGame } from '../../hooks/useGame'

export function MoveCounter() {
    const { limitedMoves } = useGame()
    return (
        <MovementsDisplay>Movimentos restantes: {limitedMoves}</MovementsDisplay>
    )
}