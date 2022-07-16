import styled from 'styled-components';
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;

    .maps{
        align-items: center;
        justify-content: center;
        display: flex;
        border-radius: 15px;
        display: flex;
        width: 70%;
        height: 70%;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
        font-size: 5rem;
    }

    .ft{
        position: absolute;
        top: 0;
        margin-top: 1%;
        font-size: 7vh;
        color: #1816C4;
    }

`

export const SideBar = styled.div`
    left: 0;
    width: 30%;
    height: 100%;
    background-color: #1816C4;
    // border-radius: 5px;
    flex-direction: column;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    .logoIF{
        margin-top: 1%;
        width: 10%;
        top: 0;
        position: absolute;
    }

    .buttonTempAleta{
        h1{
            font-size: 3.5vh;
        }
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
    }

    .buttonTempAmbiente{
        h1{
            font-size: 3.5vh;
        }
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
    }

    .contentTemp{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
        height: 30%;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
        border-radius: 15px;
        background-color: #FFFFFF;
    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .buttons{
        width: 100%;
        height: 10%;
        position:absolute;
        bottom: 0;
        align-items: center;
        justify-content: center;
        display: flex;

        button{
            margin:5px;
        }
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