import styled from "styled-components";

export const FormWizardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SectionContainer = styled.div`
    color: ${(props) => props.theme.primary};
    display: flex;
    width: 100%;
    padding: 1rem;

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
`;

export const SectionIdx = styled.div`
    font: bold 2.25rem/1 Montserrat, Roboto, Helvetica, Arial, sans-serif;
    width: 4rem;
    height: 4rem;
    float: left;
    color: ${(props) => props.theme.clear};
    background: linear-gradient(
        to bottom right,
        ${(props) => props.theme.secondary} 25%,
        ${(props) => props.theme.fourth}
    );
    text-shadow: 0 0 2px ${(props) => props.theme.third};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 20px 5px;
    margin-right: 5rem;
    @media (max-width: 768px) {
        margin-right: 1rem;
    }
`;
