import cardBack from '../../assets/cardBack.png'

import styled, { keyframes } from 'styled-components'


const Image = styled.img`
`

const wobble = keyframes`
0%,100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
`
const reveal = keyframes`
  from {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
            transform: rotate3d(-1, 1, 0, 0deg);
  }
  to {
    -webkit-transform: rotate3d(-1, 1, 0, 180deg);
            transform: rotate3d(-1, 1, 0, 180deg);
  }
`
const GameCard = styled.div`
width:147px;
height:145px;
cursor:pointer;
:hover&:not(.flipped)&{
    animation: ${wobble} 0.8s ease-in-out alternate both;
};
:hover&.flipped&{
    animation: ${reveal} 0.8s ease-in-out forwards;
};
`

export function Card() {
    return (
        <GameCard >
            <Image src={cardBack}></Image>
        </GameCard>
    )
}