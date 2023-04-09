import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
 
  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    margin-top: 50px;
    height: 50px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.14);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;