import { useContext, useEffect, useState } from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
import { HeaderText, StyledForm } from "./SectionStyles";
import Loader from "../Loader/Loader";
import { section2Labels } from "../../config/App";
import { section2Errors } from "../../config/ErrorMessage";
import AppContext, { ACTIONS } from "../../contexts/AppContext";
import { fetchTraffic, fetchWeather, fetchLocation } from "../../contexts/API";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

const Section2 = () => {
    const context = useContext(AppContext);
    const { promiseInProgress } = usePromiseTracker();

    const { dispatch } = context;
    const { date_time, all_locations } = context.state;
    const [loading, setLoading] = useState(true);
    // const [locationsSet, setLocationsSet] = useState(new Set());

    let locationsSet = new Set();
    const [uniqueLocations, setUniqueLocations] = useState([]);

    useEffect(() => {
        fetchTraffic(date_time).then((resp) => {
            const all_locations = resp?.data?.items[0]?.cameras || [];
            locationsSet = new Set();
            const promises = all_locations.map((item) => {
                const { latitude, longitude } = item.location;
                return fetchLocation(latitude, longitude).then(
                    (locationResp) => {
                        const roadName =
                            locationResp?.data?.GeocodeInfo[0]?.ROAD;
                        if (roadName) {
                            locationsSet.add(roadName);
                            const new_item = {
                                ...item,
                                location: {
                                    ...item.location,
                                    road_name: roadName,
                                },
                            };
                            return Promise.resolve(new_item);
                        } else {
                            return Promise.reject("undefined");
                        }
                    }
                );
            });
            setLoading(false);
            trackPromise(
                Promise.allSettled(promises).then((results) => {
                    const filteredResults = results
                        .filter((result) => result.status !== "rejected")
                        .map((result) => {
                            return result.value;
                        });
                    dispatch({
                        type: ACTIONS.SET_ALL_LOCATIONS,
                        payload: {
                            all_locations: filteredResults,
                        },
                    });

                    setUniqueLocations(
                        [...locationsSet].sort((a, b) => {
                            return a < b ? -1 : 1;
                        })
                    );
                })
            );
        });

        fetchWeather(date_time).then((resp) => {
            dispatch({
                type: ACTIONS.SET_WEATHER_DATA,
                payload: {
                    weather_data: resp?.data,
                },
            });
        });
    }, [date_time]);

    useEffect(() => {
        if (uniqueLocations.length === 0) {
            return;
        }
        dispatch({
            type: ACTIONS.SET_LOCATION,
            payload: { location: uniqueLocations[0] },
        });
    }, [uniqueLocations]);

    const handleChange = (event) => {
        event.preventDefault();

        const selectedLocation = event.target.value;
        dispatch({
            type: ACTIONS.SET_LOCATION,
            payload: { location: selectedLocation },
        });
    };

    if (promiseInProgress || loading) {
        return <Loader></Loader>;
    }

    return (
        <>
            {all_locations && all_locations.length !== 0 ? (
                <StyledForm noValidate id="section2Form">
                    <HeaderText>{section2Labels.header}</HeaderText>
                    <Row>
                        <Form.Group as={Col} md={6} xs={12}>
                            <Form.Control
                                as="select"
                                name="input_location"
                                onChange={handleChange}
                            >
                                {uniqueLocations &&
                                    uniqueLocations.map((location) => {
                                        return (
                                            <option
                                                key={location}
                                                value={location}
                                            >
                                                {location}
                                            </option>
                                        );
                                    })}
                            </Form.Control>
                        </Form.Group>
                    </Row>
                </StyledForm>
            ) : (
                <Alert
                    variant="danger"
                    style={{ textAlign: "left", width: "100%" }}
                >
                    {section2Errors.no_data}
                </Alert>
            )}
        </>
    );
};

export default Section2;
