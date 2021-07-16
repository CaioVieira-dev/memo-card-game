import { Bg, Title, Message } from './styles'
export function GameOver() {
    return (
        <Bg>
            <Title>Você perdeu</Title>
            <Message>Pressione "Esc" para voltar ao inicio.</Message>
        </Bg>
    )
}