import styled from "styled-components";

export const Container = styled.header`
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img { 
        width:201px;
    }
`;

export const InputSearchContainer = styled.form`
    margin-top: 48px;
    width: 100%;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 25px;
        margin-top: 50px;
        height: 50px;
        box-shadow: 8px 4px 10px rgba(0 ,0,0,0.14);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            color: #BCBCBC
        }
    }
`;