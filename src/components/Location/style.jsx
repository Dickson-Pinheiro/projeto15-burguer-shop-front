import styled from "styled-components";

export const InputStyle = styled.input`
  width: 326px;
  height: 58px;
  font-weight: 400;
  border-radius: 5px;
  border: none;
  color: #000000;
  font-size: 20px;
  padding-left: 15px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
  &::placeholder {
    color: #000000;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }
`;

export const SelectPayment = styled.select`
  width: 326px;
  height: 58px;
  font-weight: 400;
  border-radius: 5px;
  background-color: white;
  border: none;
  color: #000000;
  font-size: 20px;
  padding-left: 15px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
`;
