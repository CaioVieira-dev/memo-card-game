import styled from 'styled-components';
import { useGame } from '../../hooks/useGame'



const Bg = styled.div`
width: 100%;
padding: 16px;
background-color:hsl(184, 100%, 97%);
border-radius: 16px;
text-align: center;
`
const Title = styled.h1`
color: hsl(184, 59%, 12%);
font-size:48px;
`
const Score = styled.p`
color: hsl(184, 59%, 12%);
font-size: 24px;
margin-top:16px;
`
const Message = styled.p`
color: hsl(184, 59%, 12%);
margin-top:24px;

`

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