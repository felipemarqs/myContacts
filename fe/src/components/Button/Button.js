import styled from "styled-components";

export default styled.button`
    width: 100%;
    height: 52px;
    border: none;
    background: ${({ theme }) => theme.colors.primary[500]};
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    box-shadow: 8px 4px 18px rgba(0,0,0, 0.14);
    border-radius: 4px;
    transition: background 0.2s ease-in;

    &:hover {
        background:${({ theme }) => theme.colors.primary[400]};
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary[600]};
    }

    &[disabled] {
        background: ${({ theme }) => theme.colors.gray[300]};
        cursor: default;
    }
`;