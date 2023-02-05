import styled from "styled-components";

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #EDEBE1;
    border-radius: 5px;
    p:first-child {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #B2B1A5;
    }
    p:last-child {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 22px;
        color: #000000;
    }
`