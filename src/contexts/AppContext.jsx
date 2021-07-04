import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
    currentStep: 1,
    date_time: null,
    all_locations: [],
    location: null,
    area_metadata: [],
};

const AppContext = createContext(initialState);

export const ACTIONS = {
    SET_DATE_TIME: "SET_DATE_TIME",
    SET_ALL_LOCATIONS: "SET_ALL_LOCATIONS",
    SET_LOCATION: "SET_LOCATION",
    SET_AREA_METADATA: "SET_AREA_METADATA",
};

const appReducer = (state, action) => {
    console.log(action.type);
    console.log("ORIGINAL STATE", state);
    let updatedState;
    switch (action.type) {
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
        case ACTIONS.SET_AREA_METADATA:
            updatedState = {
                ...state,
                area_metadata: action.payload.area_metadata,
            };
            break;
        default:
            updatedState = state;
            break;
    }
    console.log("UPDATED STATE", updatedState);
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
