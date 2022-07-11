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
        text-decoration: underline;
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
    padding-left: 5%;

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`