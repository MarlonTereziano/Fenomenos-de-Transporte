import styled from 'styled-components';
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;

    .aletas{
        align-items: center;
        justify-content: center;
        display: flex;
        border-radius: 15px;
        display: flex;
        width: 70%;
        height: 70%;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
        font-size: 5rem;

        .blocoHorizontal{
            position: relative;
            left: -35%;
            width: 10%;
            height: 90%;
            background-color: #D9D9D9;
            border-radius: 30px;
            z-index: 1;
        }
        
        .blocoVerticalCobre{
            position: absolute;
            background-color: #B87333;
            top: 25%;
            width: 38%;
            height: 7%;
            border-radius: 30px;

            h1{
                margin-left: 9%;
                margin-top: -6vh;
                font-size: 4vh;
            }
        }
        .blocoVerticalAco{
            position: absolute;
            background-color: #A4A0A8;
            width: 38%;
            height: 7%;
            border-radius: 30px;
            h1{
                margin-left: 9%;
                margin-top: -6vh;
                font-size: 4vh;
            }
        }
        .blocoVerticalFerro{
            position: absolute;
            background-color: #3F3F46;
            top: 67%;
            width: 38%;
            height: 7%;
            border-radius: 30px;
            h1{
                margin-left: 9%;
                margin-top: -6vh;
                font-size: 4vh;
            }
        }


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