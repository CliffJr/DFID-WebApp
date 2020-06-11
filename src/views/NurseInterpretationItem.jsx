import React, { Component } from 'react';

import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx'
import Checkbox from 'components/CustomCheckbox/CustomCheckbox.jsx';

class NurseInterpretationItem extends Component {

    render() {

        return (
            <Row>
                <Col md={12}>
                    <Col md={12}>
                        <Card
                            title="Nurse Interpretation"
                            className="content-center"
                            content={
                                <form>
                                    <h5>Eye Fundoscopy</h5>

                                    <Row>
                                        <Col className="col-md-6">
                                            <FormGroup controlId="formControlsSelect" >
                                                <ControlLabel>Signs of Diabetic retinopathy</ControlLabel>
                                                <FormControl componentClass="select" placeholder="">
                                                    <option>...</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col className="col-md-6">
                                            <h6><strong>Additional suspected  eye pathologies</strong></h6>
                                            <Checkbox number="1" label="Cataracts" />
                                            <Checkbox number="2" label="Refractive error" />
                                            <Checkbox number="3" label="Age related macular edema (ARMD)" />
                                            <Checkbox number="4" label="Glaucoma" />
                                            <Checkbox number="5" label="Amblyopia" />
                                            <Checkbox number="6" label="Strabismus" />
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
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
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
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormInputs
                                        ncols={["col-md-6", "col-md-6"]}
                                        properties={[
                                            {
                                                label: "Additonal Ocular Findings",
                                                type: "textarea",
                                                bsClass: "form-control",
                                                placeholder: "",
                                                defaultValue: ""
                                            },
                                            {
                                                label: "Additonal Comments",
                                                type: "textarea",
                                                bsClass: "form-control",
                                                placeholder: "",
                                                defaultValue: ""
                                            }

                                        ]}
                                    />
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

export default NurseInterpretationItem;