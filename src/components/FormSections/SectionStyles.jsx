import styled from "styled-components";
import { Form, Col } from "react-bootstrap";

export const StyledForm = styled(Form)`
    text-align: left;
    width: 100%;
`;

export const StyledContainer = styled.div`
    width: 100%;
`;

export const HeaderText = styled.p``;

export const SubHeaderText = styled.p`
    font-size: calc(7px + 1vmin);
    margin-bottom: 0.1rem;
`;

export const StyledInvalidFeedback = styled.div`
    font-size: calc(10px + 1vmin);
`;

export const TrafficImageContainer = styled.div`
    height: 100%;
    background-color: black;
`;

export const TrafficImage = styled.img`
    width: 100%;
    height: auto;
`;

export const StyledCol = styled(Col)`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
`;

export const BadgeIdx = styled.p`
    font: bold 1.25rem/1 Montserrat, Roboto, Helvetica, Arial, sans-serif;
    width: auto;
    height: auto;
    padding: 5px;
    float: none;

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
    border-radius: 5px;
`;

export const WeatherContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    color: ${(props) => props.theme.clear};
    padding: 0.5rem 1rem;
    background: rgb(33, 105, 15);
    background: linear-gradient(
        190deg,
        ${(props) => props.theme.third} 40%,
        ${(props) => props.theme.fourth} 100%
    );
    border-radius: 5px;
    background-color: black;
`;

export const WeatherHeader = styled.div`
    font-size: 70%;
`;

export const WeatherDate = styled.div`
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    font-size: 70%;
`;

export const WeatherForecast = styled.div`
    text-align: end;
    font-size: 70%;
`;
