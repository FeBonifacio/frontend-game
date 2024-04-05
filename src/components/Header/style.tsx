import styled from "styled-components";

export const ContainerDiv = styled.div`
    
    color: white;
    width: 100%;

    .row {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 10px;
        width: 100%;
    }

    .btn {
        margin-left: 5px;
        background-color: transparent;
    }

    .btn-custom {
    background-color: transparent; 
    color: #ffffff; 
    border: none; 
    border-radius: 5px;
    padding: 8px 16px; 
    font-size: 16px; 
}

    .btn-custom:hover {
        background-color: #0056b3;
    }
`;