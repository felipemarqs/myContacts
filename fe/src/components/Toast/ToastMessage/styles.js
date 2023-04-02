import styled, { css } from "styled-components";

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary[500]};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success[500]};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.red[500]};
  `,
};

export const Container = styled.div`
  padding: 16px 23px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  //Background color
  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
