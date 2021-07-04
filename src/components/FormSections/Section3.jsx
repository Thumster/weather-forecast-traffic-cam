import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import AppContext from "../../contexts/AppContext";
import {
    StyledContainer,
    HeaderText,
    TrafficImageContainer,
    TrafficImage,
    StyledCol,
    SubHeaderText,
    BadgeIdx,
} from "./SectionStyles";

const Section3 = () => {
    const context = useContext(AppContext);
    const { all_locations, location } = context.state;
    return (
        <StyledContainer>
            <Row>
                <Col>
                    <HeaderText style={{ marginBottom: "0" }}>
                        Traffic Images
                    </HeaderText>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BadgeIdx>
                        {
                            all_locations.filter(
                                (item) => item.location.road_name === location
                            ).length
                        }{" "}
                        image(s) found
                    </BadgeIdx>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                {all_locations
                    .filter((item) => item.location.road_name === location)
                    .map((item) => {
                        return (
                            <StyledCol lg={5} s={11} key={item.camera_id}>
                                <Row style={{ textAlign: "left" }}>
                                    <Col s={12} md="auto">
                                        <SubHeaderText>
                                            <b>Latitude</b>{" "}
                                            {item.location.latitude.toFixed(2)}
                                        </SubHeaderText>
                                    </Col>
                                    <Col s={12} md="auto">
                                        <SubHeaderText>
                                            <b>Longitude</b>{" "}
                                            {item.location.longitude.toFixed(2)}
                                        </SubHeaderText>
                                    </Col>
                                </Row>
                                <TrafficImageContainer>
                                    <TrafficImage src={item.image} />
                                </TrafficImageContainer>
                            </StyledCol>
                        );
                    })}
            </Row>
        </StyledContainer>
    );
};

export default Section3;
