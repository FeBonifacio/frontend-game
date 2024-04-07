import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    min-height: 68vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    
    .card-body {
        height: 300px;
        
    }
`;

const shadowAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 1px #380833;
    }

    25% {
        box-shadow: 10px 10px 20px 0px rgb(41, 3, 54);
    }

    50% {
        box-shadow: 20px 20px 40px 0px rgb(43, 39, 139);
    }

    75% {
        box-shadow: 30px 30px 60px 0px rgb(6, 2, 25);
    }

    100% {
        box-shadow: 40px 40px 80px 0px rgb(48, 8, 31);
    }
`;

export const GameDetailsContainer = styled.div`
    width: calc(33.33% - 20px);
    padding: 20px;
    border-radius: 10px;
    position: relative;
    margin: 10px;
    animation: ${shadowAnimation} 5s infinite;

    @media (max-width: 922px) {
        width: calc(50% - 20px);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const SeachInput = styled.div`
    width: 50%;
    margin: 10px;
    
    @media (max-width: 500px) {
        width: 50%;
        text-align: center;

        h1 {
            font-size: 20px;
        }
    }
`;
