import { useContext, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { HeaderText, StyledForm } from "./SectionStyles";
import Button from "../Button/Button";
import { appLabels, section2Labels } from "../../config/App";
import AppContext, { ACTIONS } from "../../contexts/AppContext";
import { fetchTraffic, fetchWeather, fetchLocation } from "../../contexts/API";

const Section2 = () => {
    const context = useContext(AppContext);
    const { dispatch } = context;
    const { date_time, all_locations } = context.state;

    useEffect(() => {
        fetchTraffic(date_time).then((resp) => {
            const all_locations = resp?.data?.items[0]?.cameras;
            const promises = all_locations.map((item) => {
                const { latitude, longitude } = item.location;
                return fetchLocation(latitude, longitude).then(
                    (locationResp) => {
                        const roadName =
                            locationResp?.data?.GeocodeInfo[0]?.ROAD;
                        if (roadName) {
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
            });
        });

        fetchWeather(date_time).then((resp) => {
            console.log("WEATHER", resp);
            dispatch({
                type: ACTIONS.SET_AREA_METADATA,
                payload: {
                    area_metadata: resp?.data?.area_metadata,
                },
            });
        });
    }, [date_time]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const input_location = event.target.elements.input_location.value;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            dispatch({
                type: ACTIONS.SET_LOCATION,
                payload: { location: input_location },
            });
        }
    };

    return (
        <StyledForm noValidate onSubmit={handleSubmit} id="section2Form">
            <HeaderText>{section2Labels.header}</HeaderText>
            <Row>
                <Form.Group as={Col} md={10} xs={12}>
                    <Form.Control as="select" name="input_location">
                        {all_locations &&
                            all_locations.map((location, idx) => {
                                return (
                                    <option
                                        key={location.camera_id}
                                        value={idx}
                                    >
                                        {location.location.road_name}
                                    </option>
                                );
                            })}
                    </Form.Control>
                </Form.Group>
                <Col s={12} md={2}>
                    <Button type="submit" style={{ float: "right" }}>
                        {appLabels.btn_search}
                    </Button>
                </Col>
            </Row>
        </StyledForm>
    );
};

export default Section2;
