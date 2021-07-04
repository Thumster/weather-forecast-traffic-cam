import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
    currentStep: 1,
    date_time: null,
    all_locations: [],
    location: null,
    weather_data: null,
};

const AppContext = createContext(initialState);

export const ACTIONS = {
    RESET: "RESET",
    SET_DATE_TIME: "SET_DATE_TIME",
    SET_ALL_LOCATIONS: "SET_ALL_LOCATIONS",
    SET_LOCATION: "SET_LOCATION",
    SET_WEATHER_DATA: "SET_WEATHER_DATA",
};

const appReducer = (state, action) => {
    let updatedState;
    switch (action.type) {
        case ACTIONS.RESET:
            updatedState = { ...initialState };
            break;
        case ACTIONS.SET_DATE_TIME:
            updatedState = {
                ...state,
                date_time: action.payload.date_time,
                currentStep: 2,
            };
            break;
        case ACTIONS.SET_ALL_LOCATIONS:
            updatedState = {
                ...state,
                all_locations: action.payload.all_locations,
            };
            break;
        case ACTIONS.SET_LOCATION:
            updatedState = {
                ...state,
                location: action.payload.location,
                currentStep: 3,
            };
            break;
        case ACTIONS.SET_WEATHER_DATA:
            updatedState = {
                ...state,
                weather_data: action.payload.weather_data,
            };
            break;
        default:
            updatedState = state;
            break;
    }

    console.log(action.type, state, updatedState);
    return updatedState;
};

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContext;
