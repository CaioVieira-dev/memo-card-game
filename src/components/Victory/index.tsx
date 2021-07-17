import { useGame } from '../../hooks/useGame'

import { Bg, Message, Score, Title } from './styles'

export function Victory() {
    const { gameRemainingTime, gameScore, gameMode, limitedMoves } = useGame();

    function showScore() {
        switch (gameMode) {
            case 'normal':
                return <>
                    <Score>Pontuação por cartas viradas: {gameScore}</Score>
                    <Score>Pontuação extra por tempo: {gameRemainingTime * 10}</Score>
                    <Score>Sua pontuação final é: {gameScore + (gameRemainingTime * 10)}</Score>
                </>
            case 'limited':
                return <>
                    <Score>Pontuação por cartas viradas: {gameScore}</Score>
                    <Score>Pontuação por movimentos restantes: {limitedMoves * 30}</Score>
                    <Score>Sua pontuação final é: {gameScore + (limitedMoves * 30)}</Score>
                </>
            case 'challenge':
                return <>
                    <Score>Pontuação por cartas viradas: {gameScore}</Score>
                    <Score>Pontuação extra por tempo: {gameRemainingTime * 10}</Score>
                    <Score>Pontuação por movimentos restantes: {limitedMoves * 30}</Score>
                    <Score>Multiplicador por modo de jogo: 20%</Score>
                    <Score>Sua pontuação final é: {(gameScore + (limitedMoves * 30) + (gameRemainingTime * 10)) * 1.2}</Score>
                </>
        }
    }

    return (
        <Bg>
            <Title>Você Venceu!</Title>
            {showScore()}
            <Message>Pressione "Esc" para voltar ao inicio.</Message>
        </Bg>
    )
}