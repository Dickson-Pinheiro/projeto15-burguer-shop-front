import styled from "styled-components"
import sandwichSvg from "../../assets/images/sandwich.svg"

export const ContainerRegister = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(81, 166, 93);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    background-image: url(${sandwichSvg});
    background-repeat: no-repeat;
    background-size: 600px;
    background-position: 100% calc(100% + 140px);
    & {
        @media (max-width: 1000px){
        background-image: none;
        }
    }

    a {
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        text-decoration: none;
    }
`

export const LogoStyle = styled.h1`
    font-family: 'Unbounded', cursive;
    font-size: 30px;
    color: #ffffff;
    text-decoration: underline;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    input {
        width: 326px;
        height: 58px;
        font-weight: 400;
        border-radius: 5px;
        border: none;
        color: #000000;
        font-size: 20px;
        padding-left: 15px;
        font-family: 'Poppins', sans-serif;
        &::placeholder {
            color: #000000;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
        }
    }
    p {
        font-family: 'Poppins', sans-serif;
        color: yellow;
        font-size: 15px;
        width: 326px;
        
    }
    button {
        width: 326px;
        height: 46px;
        border-radius: 5px;
        background-color: #affe77;
        border: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 23.48px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000000;
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
            background-color: #cafe90;
        }
    }
`

export const ContainerInputForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    span {
        display: block;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        color: yellow;
    }
`