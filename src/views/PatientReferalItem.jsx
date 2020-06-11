import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';



class PatientReferalItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

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
                                                placeholder: "Name of Health Care Worker",
                                                disabled: true
                                            }
                                        ]}
                                    />
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date of electronic Referral</ControlLabel>
                                                <Datetime
                                                    inputProps={{ placeholder: "Date Picker" }}
                                                    timeFormat={false}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date Images Taken</ControlLabel>
                                                <Datetime
                                                    inputProps={{ placeholder: "Date Picker" }}
                                                    timeFormat={false}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Symptoms</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option>Blurred vision</option>
                                                    <option>Fluctuating vision</option>
                                                    <option>Impaired color vision</option>
                                                    <option>Dark empty areas in your vision</option>
                                                    <option>Poor vision</option>
                                                    <option>Change of spectacles</option>
                                                    <option>Discharge</option>
                                                    <option>Dryness of eyes</option>
                                                    <option>Flashes of light</option>
                                                    <option>Floaters</option>
                                                    <option>Itchiness</option>
                                                    <option>Pain</option>
                                                    <option>Redness</option>
                                                    <option>Stys</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup
                                                controlId="formBasicText"
                                                validationState={this.getValidationState()}
                                            >
                                                <ControlLabel>Other Symptoms</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Other diabetic systems"
                                                    onChange={this.handleChange}
                                                />
                                                <FormControl.Feedback />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Diabetes Type</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option>Type 1</option>
                                                    <option>Type 2</option>
                                                    <option>Gestational</option>
                                                    <option>Prediabetes</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Diabetes Therapy</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option>Insulin</option>
                                                    <option>Oral anti-diabetes</option>
                                                    <option>Both (I ans O)</option>
                                                    <option>Diet</option>
                                                    <option>None</option>
                                                </FormControl>
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
export default PatientReferalItem;