import styled from 'styled-components';

type VictoryProps = {
    score: number,
}

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

export function Victory(props: VictoryProps) {

    return (
        <Bg>
            <Title>Você Venceu!</Title>
            <Score>Seu placar foi: {props.score}</Score>
        </Bg>
    )
}