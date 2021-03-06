

import styled, { keyframes } from 'styled-components'

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
const hide = keyframes`
from {
    -webkit-transform: rotate3d(-1, 1, 0, 180deg);
            transform: rotate3d(-1, 1, 0, 180deg);
  }
  to {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
            transform: rotate3d(-1, 1, 0, 0deg);
  }
`
export const GameCard = styled.div`
perspective: 600px;
width:147px;
height:145px;
:hover&:not(.flipped)&{
    animation: ${wobble} 0.8s ease-in-out alternate both 1.2s;
};
@media(max-width:768px){
width: 100px;
height: 100px;
}
@media(max-width:450px){
width: 74.5px;
height: 74.5px;
}
`
export const CardObject = styled.div`
width:100%;
height:100%;
transform-style: preserve-3d;
cursor:pointer;

    animation: ${hide} 0.8s ease-in-out forwards;
    -webkit-transform: rotate3d(1, 1, 0, 0deg) 0.8s;
                transform: rotate3d(1, 1, 0, 0deg) 0.8s;

.flipped&{
    animation: ${reveal} 0.8s ease-in-out forwards;
    -webkit-transform: rotate3d(-1, 1, 0, 180deg) 0.8s;
            transform: rotate3d(-1, 1, 0, 180deg) 0.8s;
};
`
export const Image = styled.img`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
:first-of-type&{
    z-index: 20;
}
:last-of-type&{
    z-index:10;
    transform: rotate3d(-1,1,0,
-180deg
);
}
`