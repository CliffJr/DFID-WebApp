import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";

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
                                                <ControlLabel>Diabetes Therapy</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option>Diet</option>
                                                    <option>None</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup
                                                controlId="formBasicText"
                                                validationState={this.getValidationState()}
                                            >
                                                <ControlLabel>Most recent HbA1c</ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="00.0"
                                                    onChange={this.handleChange}
                                                />
                                                <FormControl.Feedback />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date HbA1C taken</ControlLabel>
                                                <Datetime
                                                    inputProps={{ placeholder: "Date HbA1C taken" }}
                                                    timeFormat={false}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Date Review</ControlLabel>
                                                <Datetime
                                                    inputProps={{ placeholder: "Date Review" }}
                                                    timeFormat={false}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Visual Aquity Left</ControlLabel>
                                                <FormControl componentClass="select" placeholder="" value={this.value}>
                                                    <option>...</option>
                                                    <option value='Light Perception' >Light Perception</option>
                                                    <option value='No Light Perception' >No Light Perception</option>
                                                    <option value='Not Done' >Not done</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Visual Aquity Right</ControlLabel>
                                                <FormControl componentClass="select" placeholder="" value={this.value}>
                                                    <option>...</option>
                                                    <option value='Light Perception' >Light Perception</option>
                                                    <option value='No Light Perception' >No Light Perception</option>
                                                    <option value='Not Done' >Not done</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Intra Ocular Pressure Left</ControlLabel>
                                                <FormControl componentClass="select" placeholder="" value={this.value}>
                                                    <option>...</option>
                                                    <option value='mmHg' >mmHg</option>
                                                    <option value='Not Done' >Not done</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Intra Ocular Pressure Right</ControlLabel>
                                                <FormControl componentClass="select" placeholder="" value={this.value}>
                                                    <option>...</option>
                                                    <option value='mmHg' >mmHg</option>
                                                    <option value='Not Done' >Not done</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-12">
                                            <FormGroup
                                                controlId="formBasicText"
                                                validationState={this.getValidationState()}
                                            >
                                                <ControlLabel>Other Occular findings</ControlLabel>
                                                <FormControl
                                                 rows="3"
                                                 componentClass="textarea"
                            
                                                    type="textarea"
                                                    value={this.state.value}
                                                    placeholder="Other Occular findings"
                                                    onChange={this.handleChange}
                                                />
                                                <FormControl.Feedback />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <input type="submit" value="Submit" />
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