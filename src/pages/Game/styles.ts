import styled from 'styled-components'

export const GameBg = styled.div`
    height: 100vh;
    background-color: hsl(184.7058823529412, 100%, 90%);
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
gap:16px;
position: relative;
background-color: hsl(184.70588235294116, 100%, 80%);
border-radius: 32px;
padding:0 112px;
-webkit-box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4); 
box-shadow: 2px 5px 16px 0px #0B325E, 1px 0px 26px -8px rgba(13,46,49,0.4);


`
export const Wrapper = styled.div`
.playing&{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
`
export const Logo = styled.img`
margin-top: 60px;
    .playing&{
        height:67px;
        align-self: flex-start;
        margin-top: 24px;
    };
    .victory&{
        transform: scale(0.7);
    }
`
export const Score = styled.p`
font-size:24px;
color:hsl(184.61538461538458, 100%, 97%);
`