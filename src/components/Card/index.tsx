import cardBack from '../../assets/cardBack.png'

import styled from 'styled-components'

const GameCard = styled.div`
width:147px;
height:145px;
`
const Image = styled.img`

`

export function Card() {
    return (
        <GameCard>
            <Image src={cardBack}></Image>
        </GameCard>
    )
}