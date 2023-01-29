import styled from "styled-components";

export const FormsContainer = styled.form`
  min-width: 450px;
  max-width: 450px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
  }
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
