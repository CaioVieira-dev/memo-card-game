import styled from "styled-components";

export const StyledButton = styled.button`
padding: 16px 24px;
font-size: 24px;
color: hsl(184, 59%, 12%);
background-color: hsl(184, 100%, 97%);
border-radius: 16px;
border:0;
cursor: pointer;
transition: background-color linear 0.2s;
:hover&{
    background-color: hsl(184, 100%, 60%);
};
`
