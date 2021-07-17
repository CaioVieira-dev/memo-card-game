import { Option, Select, Label } from './styles'
import { useGame } from '../../hooks/useGame'

export function ModeSelect() {
    const { changeGameMode, gameMode } = useGame();
    function handleChangeMode(mode: "normal" | "limited" | "challenge") {
        changeGameMode(mode)
    }

    return (
        <>
            <Label>Modo de Jogo:</Label>
            <Select
                value={gameMode}
                onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'normal' ||
                        val === 'limited' ||
                        val === 'challenge') {
                        handleChangeMode(val)
                    }
                }}>

                <Option value="normal">Normal</Option>
                <Option value="limited">Limitado</Option>
                <Option value="challenge">Desafio</Option>
            </Select>
        </>
    )
}