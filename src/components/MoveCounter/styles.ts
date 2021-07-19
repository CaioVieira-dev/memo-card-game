import styled from "styled-components";

export const MovementsDisplay = styled.p`
font-size:24px;
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
@media(max-width:768px){
    font-size: 20px;
  }
`