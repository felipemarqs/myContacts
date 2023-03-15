import styled from "styled-components";

export const Container = styled.header`
    margin-bottom: 24px;
    
    a {
        text-decoration: none;

        span {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary[500]};
           
        }

        img {
            margin-right: 8px;
            transform: rotate(-90deg);
        }
    }

    h1 {
        font-size: 24px;
    }

`;