import styled from 'styled-components'
import { useGame } from '../../hooks/useGame'


const Select = styled.select`
/*
*/
-webkit-appearance: none;
  -moz-appearance: none;
color: hsl(184, 59%, 12%);
background-color: hsl(184, 100%, 97%);
font-size: 24px;
padding: 16px 24px;
border-radius: 16px;
border:0;
outline: 0;
width:163px;
background-image:
    linear-gradient(45deg, transparent 50%, blue 50%),
    linear-gradient(135deg, blue 50%, transparent 50%),
    linear-gradient(to right, skyblue, skyblue);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    100% 0;
  background-size:
    5px 10px,
    5px 10px,
    40px 61px;
  background-repeat: no-repeat;
  cursor:pointer;
`
const Option = styled.option`
color: hsl(184, 59%, 12%);
background-color: hsl(184, 100%, 97%);
cursor:pointer;

`
type DifficultyProps = {

}

export function Difficulty(props: DifficultyProps) {
  const { changeGameDifficulty, gameDifficulty } = useGame()

  function handleSelectDifficulty(difficulty: string) {
    changeGameDifficulty(difficulty)
  }

  return (
    <Select
      onChange={(e) => handleSelectDifficulty(e.target.value)}
      name="difficulty"
      value={gameDifficulty}
    >
      <Option value="easy">Fácil</Option>
      <Option value="normal">Normal</Option>
      <Option value="hard">Difícil</Option>
    </Select>
  )
}