import styled from "styled-components";

export const FormsContainer = styled.form`
  max-width: 450px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const HeaderForms = styled.div`
  height: 40px;
  background-color: #51a65d;
  color: #fff;
  padding: 12px;
  font-size: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export const BodyForms = styled.div`
  background-color: #eeeeee;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  padding: 40px;
`;
