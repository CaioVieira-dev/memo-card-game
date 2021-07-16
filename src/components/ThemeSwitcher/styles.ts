import styled from "styled-components";

export const Container = styled.div`
width:110px;
margin-top: 16px;
align-self: flex-end;
position: relative;

`

export const ThemeBox = styled.div`
width: 100%;
padding: 8px;
background-color: hsl(${props => props.theme.colors.hue}, 100%,97%);
display: flex;
justify-content:space-between;
align-items: center;
border-radius: 200px;

`
export const ColorCircle = styled.div`
width: 17px;
height:17px;
background-color: hsl(${props => props.theme.colors.hue}, 100%, 80%);
border-radius: 16px;
cursor: pointer;
.lightBlue&{
background-color: hsl(184, 100%, 80%);
}
.red&{
background-color: hsl(0, 100%, 80%);
}
.blue&{
background-color: hsl(200, 100%, 80%);
}
.orange&{
background-color: hsl(20, 100%, 80%);
}
.yellow&{
background-color: hsl(60, 100%, 80%);
}
.lemon&{
background-color: hsl(80, 100%, 80%);
}
.green&{
background-color: hsl(140, 100%, 80%);
}
.purple&{
background-color: hsl(240, 100%, 80%);
}
.malva&{
background-color: hsl(280, 100%, 80%);
}
.pink&{
background-color: hsl(310, 100%, 80%);
}

`
export const CustomColorInput = styled.input.attrs({
    type: 'color'
})`
width: 17px;
height:17px;
border:none;
background:blue;
border-radius: 16px;
cursor:pointer;
opacity: 0;
z-index: 2;
`
export const InputColorWrapper = styled.div`
width: 17px;
height:17px;
border-radius: 16px;
background: rgb(255,0,0);
background: linear-gradient(344deg, rgba(255,0,0,1) 0%, rgba(252,255,0,1) 9%, rgba(146,255,0,1) 24%, rgba(0,254,255,1) 36%, rgba(0,142,255,1) 52%, rgba(0,18,225,1) 63%, rgba(169,0,170,1) 77%, rgba(210,0,152,1) 90%, rgba(255,0,0,1) 100%);
z-index: 0;
`


export const ThemeName = styled.p`
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);

`
export const SwitchBox = styled.div`
visibility:hidden;
width: 100%;
background-color: hsl(${props => props.theme.colors.hue}, 100%,97%);
padding: 8px;
display: flex;
justify-content: space-evenly;
gap: 12px;
flex-wrap: wrap;
position: absolute;
border-radius: 16px;


.visible&{
    visibility:visible;
}
`
