import styled from 'styled-components'
import { Card } from '../Card'


const GameBoard = styled.div`
width:668px;
height: 660px;
background-color:hsl(184, 100%, 97%);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius:32px;
-webkit-box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4); 
box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4);
padding: 16px;

display: flex;
gap: 16px;
flex-wrap: wrap;
`

export function Board() {
    return (
        <GameBoard className="board">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </GameBoard>
    )
}