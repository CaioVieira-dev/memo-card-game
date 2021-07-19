import styled from 'styled-components'
//184.7058823529412
export const GameBg = styled.div`
    height: 100vh;
    background-color: hsl(${props => props.theme.colors.hue} , 100%, 90%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Center = styled.div`
max-width: 892px;
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: stretch;
flex-direction:column;

position: relative;
background-color: hsl(${props => props.theme.colors.hue}, 100%, 80%);
border-radius: 32px;
padding:0 112px;
-webkit-box-shadow: 2px 5px 16px 0px #222, 1px 0px 26px -8px hsla(${props => props.theme.colors.hue},58%,12%,40%); 
box-shadow: 2px 5px 16px 0px #222, 1px 0px 26px -8px hsla(${props => props.theme.colors.hue},58%,12%,40%);
@media(max-width:768px){
    padding: 0 2%;
    margin: 0 2%;
}

`
export const Wrapper = styled.div`
.playing&{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;
}
`
export const Logo = styled.img`
margin-top: 60px;
    .playing&{
        height:67px;
        align-self: flex-start;
        margin-top: 0px;
        width:98px;
    };
    .victory&{
        transform: scale(0.7);
    }

    @media(max-width:768px){
        width:300px;
        margin-top: 0;
        .gameOver&{
        transform: scale(0.7);

        }
    }
`
export const Score = styled.p`
font-size:24px;
color: hsl(${props => props.theme.colors.hue}, 59%, 12%);
@media(max-width:768px){
    font-size: 20px;
  }
`