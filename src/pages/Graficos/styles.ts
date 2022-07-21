import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;

`

export const SideBar = styled.div`
    left: 0;
    width: 30%;
    height: 100%;
    background-color: white;
    // border-radius: 5px;
    flex-direction: column;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.7);
    background:linear-gradient(to top, #359830, white);
    display: flex;
    justify-content: center;
    align-items: center;

    .logoIF{
        margin-top: 1%;
        width: 10%;
        top: 0;
        position: absolute;
    }

    .contentButton{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        margin-top: 8%;
        height: 7%;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
        border-radius: 40px;
        background-color: #FFFFFF;
        color: #359830;
        font-size: 3vh;
    }
    .contentButton:hover{
        color: #c90c0f;
    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .grafico1{
        width: 90%;
        margin-left: 5%;
    }
    .grafico2{
        width: 90%;

    }

`

export const Footer = styled.div`
    background-color: black;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8%;
    padding-top: 1%;
    h1{
        font-size: 4vh;
        color: white;
    }
`