import React, { Component } from 'react';

import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx'
import Checkbox from 'components/CustomCheckbox/CustomCheckbox.jsx';
import Button from "components/CustomButton/CustomButton.jsx";

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class DoctorDiagnosisItem extends Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Col md={12}>
                        <Card
                            title="Doctor's Interpretation"
                            className="content-center"
                            content={
                                <form>
                                    <FormInputs
                                        ncols={["col-md-12"]}
                                        properties={[
                                            {
                                                label: "Name of Health Care Worker",
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Test User",
                                                disabled: true
                                            }
                                        ]}
                                    />
                                    <hr />
                                    <h5>Eye Fundoscopy</h5>

                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Signs of Diabetic retinopathy</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <h6><strong>Additional suspected  eye pathologies</strong></h6>
                                            <Checkbox number="2d" label="Cataracts" />
                                            <Checkbox number="3d" label="Refractive error" />
                                            <Checkbox number="4d" label="Age related macular edema (ARMD)" />
                                            <Checkbox number="5d" label="Glaucoma" />
                                            <Checkbox number="6d" label="Amblyopia" />
                                            <Checkbox number="2d" label="Strabismus" />
                                        </Col>
                                    </Row>
                                    <h5>Intra Ocular Pressure</h5>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Left Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Right Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <h5>Non Proliferative Diabetic Retinopathy</h5>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Left Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Right Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <h5>Proliferative Diabetic Retinopathy</h5>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Left Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Right Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <h5>Clinically Signifcant Macular Edema</h5>
                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Left Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Right Eye</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Yes</option>
                                                    <option value="other">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormInputs
                                        ncols={["col-md-6", "col-md-6"]}
                                        properties={[
                                            {
                                                label: "Notes",
                                                type: "textarea",
                                                bsClass: "form-control",
                                                placeholder: "",
                                                defaultValue: ""
                                            },
                                            {
                                                label: "Diagnosis",
                                                type: "textarea",
                                                bsClass: "form-control",
                                                placeholder: "",
                                                defaultValue: ""
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
                                            <FormGroup>
                                                <ControlLabel>Recommended Management(For Low Vision)</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="select">Refer;</option>
                                                    <option value="observe">Observe/Monitor </option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <FormGroup>
                                                <ControlLabel>Recommendated Date</ControlLabel>
                                                <Datetime
                                                    inputProps={{ placeholder: "Date Picker" }}
                                                    timeFormat={false}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-4 col-md-offset-4">
                                            <Button bsStyle="info" block pullRight fill type="submit">
                                                Save
                                            </Button>
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

export default DoctorDiagnosisItem;