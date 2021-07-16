import { useGame } from '../../hooks/useGame'

import { Bg, Message, Score, Title } from './styles'

export function Victory() {
    const { gameRemainingTime, gameScore } = useGame();

    return (
        <Bg>
            <Title>Você Venceu!</Title>
            <Score>Pontuação por cartas viradas: {gameScore}</Score>
            <Score>Pontuação extra por tempo: {gameRemainingTime * 10}</Score>
            <Score>Sua pontuação final é: {gameScore + (gameRemainingTime * 10)}</Score>
            <Message>Pressione "Esc" para voltar ao inicio.</Message>
        </Bg>
    )
}