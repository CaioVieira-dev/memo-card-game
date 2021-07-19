import styled from 'styled-components';


export const Bg = styled.div`
width: 100%;
padding: 16px;
background-color:hsl(${props => props.theme.colors.hue}, 100%, 97%);
border-radius: 16px;
text-align: center;
`
export const Title = styled.h1`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
font-size:48px;

@media(max-width:768px){
       font-size: 36px;
    }
`
export const Score = styled.p`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
font-size: 24px;
margin-top:16px;
@media(max-width:768px){
       font-size: 20px;
    }
`
export const Message = styled.p`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
margin-top:24px;
`
export const ExitButton = styled.span`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
font-weight: bold;
text-decoration: underline;
cursor:pointer;

`

