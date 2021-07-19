import { useGame } from '../../hooks/useGame';
import { Bg, Title, Message, ExitButton } from './styles'
export function GameOver() {
    const { endGame, changeGameState, resetScore, resetMoves } = useGame();
    function handleExit() {
        endGame();
        changeGameState('menuScreen');
        resetScore();
        resetMoves();
    }

    return (
        <Bg>
            <Title>Você perdeu</Title>
            <Message>Clique <ExitButton onClick={handleExit}>aqui</ExitButton> ou pressione "Esc" para voltar ao inicio.</Message>
        </Bg>
    )
}