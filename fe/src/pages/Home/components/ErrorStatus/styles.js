import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:  16px;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.red[500]};
      display: block;
    }

    small {
      color: ${({ theme }) => theme.colors.red[500]};
      display: block;
    }

    button {
      margin-top: 8px;
    }
  }
`;