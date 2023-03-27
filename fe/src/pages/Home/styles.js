import styled from "styled-components";

export const InputSearchContainer = styled.form`
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

export const Container = styled.div`
  margin-top: 32px;

`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ hasError }) => hasError ? 'flex-end' : 'space-between'};
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
    border: 2px solid #5061fc;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.4s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[500]};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;


    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      img {
        transform : ${({ orderBy }) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.2s ease-in;
      }
    }

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    
  
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.14);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

   & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary[200]};
        color: ${({ theme }) => theme.colors.primary[500]};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
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
