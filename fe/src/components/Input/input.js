import styled, { css } from "styled-components";

export default styled.input`
    width:100%;
    border: none;
    outline: none;
    background: #fff;
    border: 2px solid #fff;
    box-shadow: 8px 4px 18px rgba(0,0,0, 0.14);
    height: 52px;
    border-radius: 4px;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[500]};
    }

    ${({ theme, error }) => error && css`
        color: ${theme.colors.red[500]};
        border-color: ${theme.colors.red[500]} !important;
    `}

    &[disabled] {
        background-color: ${({ theme }) => theme.colors.gray[100]};
        border-color: ${({ theme }) => theme.colors.gray[200]};
    }
`;