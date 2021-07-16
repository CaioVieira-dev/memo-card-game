import { StyledButton } from './styles'
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

};


export function Button(props: ButtonProps) {

    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}