import styled from "styled-components";
import Button from "../../components/Button/Button";

export const AppHeader = styled.header`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;
export const AppFormContainer = styled.div`
    padding: 3rem;
    background-color: #ffff;
    height: auto;
    width: 75vw;
    display: flex;
    border-radius: 10px;
    @media (max-width: 768px) {
        min-width: 100vw;
        border-radius: 0;
        padding: 3rem 1rem;
    }
`;

export const HeaderLabel = styled.div`
    margin: 1rem 0;
    width: 75vw;
    font-size: calc(10px + 3vmin);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        min-width: 100vw;
        margin: 1rem;
        padding: 0 1rem;
    }
`;

export const StyledResetButton = styled(Button)`
    float: right;
    margin-left: auto;
    @media (max-width: 470px) {
        margin-left: 1rem;
    }
`;
