import { Card } from '../Card'
import { useGame } from '../../hooks/useGame'
import { GameBoard } from './styles'

export function Board() {
    const { gameBoard } = useGame()
    return (
        <GameBoard className="board">
            {gameBoard?.map((card) => <Card key={card.id} cardId={card.id} cardState={card.cardState} fruit={card.fruit} />)}
        </GameBoard>

    )
}