import styled from 'styled-components'

export const Select = styled.select`
/*
*/
-webkit-appearance: none;
  -moz-appearance: none;
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
background-color: hsl(${props => props.theme.colors.hue}, 100%, 97%);
font-size: 24px;
padding: 16px 24px;
border-radius: 16px;
border:0;
outline: 0;
width:163px;
background-image:
    linear-gradient(45deg, transparent 50%, hsl(${props => props.theme.colors.hue}, 59%, 12%) 50%),
    linear-gradient(135deg, hsl(${props => props.theme.colors.hue}, 59%, 12%) 50%, transparent 50%),
    linear-gradient(to right, hsl(${props => props.theme.colors.hue}, 100%, 60%), hsl(${props => props.theme.colors.hue}, 100%, 60%));
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
  margin-top: 8px;
  @media(max-width:768px){
    padding: 12px 20px;
    font-size: 20px;
  }
`
export const Option = styled.option`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
background-color: hsl(${props => props.theme.colors.hue}, 100%, 97%);
cursor:pointer;

`
export const Label = styled.label`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
font-size: 24px;
font-weight: bold;
width: 163px;

margin-top: 16px;
@media(max-width:768px){
    font-size: 20px;
  }
`