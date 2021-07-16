import styled from "styled-components";
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
`
export const Message = styled.p`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
margin-top:24px;

`
