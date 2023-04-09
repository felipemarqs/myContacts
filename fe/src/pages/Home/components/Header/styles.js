import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  margin-bottom: 8px;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]} ;
  padding-bottom: 16px;
  strong {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary[500]};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.4s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[500]};
      color: #fff;
    }
  }
`;
