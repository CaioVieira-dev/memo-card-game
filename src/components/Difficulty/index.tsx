import { useGame } from '../../hooks/useGame'
import { Select, Option } from './styles'

type DifficultyProps = {

}

export function Difficulty(props: DifficultyProps) {
  const { changeGameDifficulty, gameDifficulty } = useGame()

  function handleSelectDifficulty(difficulty: "easy" | "normal" | "hard") {
    changeGameDifficulty(difficulty)
  }

  return (
    <Select
      onChange={(e) => {
        if (e.target.value === "easy" ||
          e.target.value === "normal" ||
          e.target.value === "hard")
          handleSelectDifficulty(e.target.value)
      }}
      name="difficulty"
      value={gameDifficulty}
    >
      <Option value="easy">Fácil</Option>
      <Option value="normal">Normal</Option>
      <Option value="hard">Difícil</Option>
    </Select>
  )
}