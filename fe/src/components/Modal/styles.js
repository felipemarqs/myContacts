import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0;}
    to { opacity: 1;}
`;

const scaleIn = keyframes`
    from {transform: scale(0);}
    to { transform: scale(1);}
`;

const fadeOut = keyframes`
    from { opacity: 1;}
    to { opacity: 0;}
`;

const scaleOut = keyframes`
from {transform: scale(1);}
to { transform: scale(0);}
`;

export const Overlay = styled.div`
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation:  ${fadeIn} .3s;
   
    ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s forwards`}
`;

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 8px 4px 18px rgba(0,0,0, 0.14);
    max-width: 450px;
    width: 100%;
    animation: ${scaleIn} .3s;

    ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s forwards`}



    > h1 {
        font-size: 22px;
        color: ${({ theme, danger }) => danger ? theme.colors.red[500] : theme.colors.gray[900]};
        margin-bottom: 32px;
    }

 
`;

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancelButton {
        background: transparent;
        border: none;
        font-size: 16px;
        margin-right: 24px;
        color: ${({ theme }) => theme.colors.gray[300]}

        &[disabled] {
            cursor: default;
        }
    }
`;