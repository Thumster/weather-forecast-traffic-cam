import { useState, useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { HeaderText, StyledForm, StyledInvalidFeedback } from "./SectionStyles";
import Button from "../Button/Button";
import { appLabels, section1Labels } from "../../config/App";
import AppContext, { ACTIONS } from "../../contexts/AppContext";

const Section1 = () => {
    const context = useContext(AppContext);
    const { dispatch } = context;
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const input_date = event.target.elements.input_date.value;
        const input_time = event.target.elements.input_time.value;

        const date_time = input_date + "T" + input_time + ":00";
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            dispatch({
                type: ACTIONS.SET_DATE_TIME,
                payload: { date_time: date_time },
            });
        }

        setValidated(true);
    };

    return (
        <StyledForm
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            id="section1Form"
        >
            <HeaderText>{section1Labels.header}</HeaderText>
            <Row>
                <Form.Group as={Col}>
                    <Form.Control type="date" required name="input_date" />
                    <StyledInvalidFeedback className="invalid-feedback">
                        {section1Labels.invalid_date}
                    </StyledInvalidFeedback>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Control type="time" required name="input_time" />
                    <StyledInvalidFeedback className="invalid-feedback">
                        {section1Labels.invalid_time}
                    </StyledInvalidFeedback>
                </Form.Group>
                <Col xs={12}>
                    <Button type="submit" style={{ float: "right" }}>
                        {appLabels.btn_search}
                    </Button>
                </Col>
            </Row>
        </StyledForm>
    );
};

export default Section1;
