
import styled from 'styled-components'
export const GameBoard = styled.div`
width:668px;

background-color:hsl(${props => props.theme.colors.hue}, 100%, 97%);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius:32px;
-webkit-box-shadow: 2px 5px 16px 0px #222, 1px 0px 26px -8px hsla(${props => props.theme.colors.hue},58%,12%,40%); 
box-shadow: 2px 5px 16px 0px #222, 1px 0px 26px -8px hsla(${props => props.theme.colors.hue},58%,12%,40%);
padding: 16px;

display: flex;
gap: 16px;
flex-wrap: wrap;

@media (max-width: 768px){
    padding:16px 8px;
    width:96%;
    gap: 0;
    justify-content:space-evenly;
    row-gap: 8px;
    top:60%;
   max-width:500px;
}

`
// max-width: 350px;