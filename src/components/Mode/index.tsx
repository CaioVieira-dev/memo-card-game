import { Option, Select, Label } from './styles'

export function ModeSelect() {

    return (
        <>
            <Label>Modo de Jogo:</Label>
            <Select>
                <Option value="normal">Normal</Option>
                <Option value="limited">Limitado</Option>
                <Option value="challenge">Desafio</Option>
            </Select>
        </>
    )
}