import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  /* width: 100%; */
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({ theme, danger }) => danger ? theme.colors.red[500] : theme.colors.primary[500]};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  box-shadow: 8px 4px 18px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: background 0.1s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[400]};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[300]} !important;
    cursor: default !important;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.red[500]};

      &:hover {
        background: ${theme.colors.red[400]};
      }

      &:active {
        background: ${theme.colors.red[600]};
      }
    `}
`;
