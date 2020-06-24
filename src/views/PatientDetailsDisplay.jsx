import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';



class PatientReferalDisplay extends Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Col md={12}>
                        <Card
                            title="Referal Notes"
                            content={
                                <form>
                                    <FormInputs
                                        ncols={["col-md-12"]}
                                        properties={[
                                            {
                                                label: "Name of Health Care Worker",
                                                type: "text",
                                                bsClass: "form-control",
                                                disabled: true
                                            }
                                        ]}
                                    />
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date of electronic Referral</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date Images Taken</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Symptoms</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formBasicText" >
                                                <ControlLabel>Other Symptoms</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                                <FormControl.Feedback />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Diabetes Type</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Diabetes Therapy</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    disabled = {true}  
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="clearfix" />
                                </form>
                            }
                        />
                    </Col>
                </Col>
            </Row>

        );
    }
}

export default PatientReferalDisplay;