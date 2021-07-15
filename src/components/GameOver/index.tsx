import styled from "styled-components";
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
const Message = styled.p`
color: hsl(184, 59%, 12%);
margin-top:24px;

`

export function GameOver() {
    return (
        <Bg>
            <Title>Você perdeu</Title>
            <Message>Pressione "Esc" para voltar ao inicio.</Message>
        </Bg>
    )
}