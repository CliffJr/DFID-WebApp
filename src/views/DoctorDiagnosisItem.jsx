import React, { useState } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx'
import Button from "components/CustomButton/CustomButton.jsx";
import MultiSelect from "react-multi-select-component";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const DoctorDiagnosisItem = (props) => {
    const optionsDiagnosis = [
        { label: "No abnormalities detected", value: "grapes" },
        { label: "Cataracts", value: "mango" },
        { label: "Cataracts, suspected", value: "strawberry", },
        { label: "Maculophaty", value: "Maculophaty" },
        { label: "Macular degeneration, Age related (ARMD)", value: "Macular degeneration, Age related (ARMD)" },
        { label: "Macula Edema, Clinical Significant (CSME)", value: "Macula Edema, Clinical Significant (CSME)" },
        { label: "Retinopathy, hypertensive", value: "Retinopathy, hypertensive" },
        { label: "Retinopathy, NPDR", value: "Retinopathy, NPDR" },
        { label: "Retinopathy, PDR", value: "Retinopathy, PDR" },
        { label: "Retinal dystrophy", value: "Retinal dystrophy" },
        { label: "Other", value: "Other" }
    ];

    const optionsRecommendedManagement = [
        { label: "Anti VEGF", value: "Anti VEGF" },
        { label: "Cateract extraction", value: "Cateract extraction" },
        { label: "Control Risk Factors", value: "Control Risk Factors" },
        { label: "Evaluation Anterior Segment (ASE)", value: "Evaluation Anterior Segment (ASE)" },
        { label: "Evaluation Cataract", value: "Evaluation Cataract" },
        { label: "Evaluation Refraction", value: "Evaluation Refraction" },
        { label: "Evaluation Slit lamp", value: "Evaluation Slit lamp" },
        { label: "Laser", value: "Laser" },
        { label: "Observe & Monitor", value: "Observe & Monitor" },
        { label: "Other", value: "Other" }
    ];

    const optionsAdditionalEyePathologies = [
        { label: "Cataracts", value: "Cataracts" },
        { label: "Age related macular edema (ARMD)", value: "Age related macular edema (ARMD)" },
        { label: "Glaucoma", value: "Glaucoma" },
        { label: "Amblyopia", value: "Amblyopia" },
        { label: "Other", value: "Other" }
    ];
    //Hooks
    const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);
    const [selectedRecommendedManagement, setSelectedRecommendedManagement] = useState([]);
    const [selectedAdditionalEyePathologies, setSelectedAdditionalEyePathologies] = useState([]);
    const [doctorName ] = useState([]);

    //Handle Hooks

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
                                            label: "Name Doctor / Consultant",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "",
                                            value: doctorName,
                                            disabled: true
                                        }
                                    ]}
                                />
                                <hr />
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Signs of Diabetic retinopathy</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                <option value="Not able to assess">Not able to assess></option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Additional suspected  eye pathologies</ControlLabel>
                                        <MultiSelect
                                            label={"Additional suspected  eye pathologies"}
                                            options={optionsAdditionalEyePathologies}
                                            value={selectedAdditionalEyePathologies}
                                            onChange={setSelectedAdditionalEyePathologies}
                                            labelledBy={"Additional suspected  eye pathologies"}
                                        />
                                    </Col>
                                </Row>

                                <h5>Non Proliferative Diabetic Retinopathy</h5>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Left Eye</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                                <option value="Not able to access">Not able to assess</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Right Eye</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                                <option value="Not able to access">Not able to assess</option>
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
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                                <option value="Not able to access">Not able to assess</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Right Eye</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Severe">Severe</option>
                                                <option value="Not able to access">Not able to assess</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Diagnosis</ControlLabel>
                                        <MultiSelect
                                            label={"Diagnosis"}
                                            options={optionsDiagnosis}
                                            value={selectedDiagnosis}
                                            onChange={setSelectedDiagnosis}
                                            labelledBy={"Diagnosis"}
                                        />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Recommended Management</ControlLabel>
                                        <MultiSelect
                                            label={"Notes"}
                                            options={optionsRecommendedManagement}
                                            value={selectedRecommendedManagement}
                                            onChange={setSelectedRecommendedManagement}
                                            labelledBy={"Recommended Management"}
                                        />
                                    </Col>
                                </Row>
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
                                            <ControlLabel>Repeat fundoscopy </ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="3 months">3 months</option>
                                                <option value="6 months">6 months </option>
                                                <option value="Annual">Annual</option>
                                                <option value="Other">Other</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Referral to consultant</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="No referal">No referal</option>
                                                <option value="urgent">Urgent</option>
                                                <option value="3 months">3 months</option>
                                                <option value="6 months">6 months </option>
                                                <option value="Other">Other</option>
                                            </FormControl>
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
                                            <ControlLabel>Date of Review</ControlLabel>
                                            <Datetime
                                                inputProps={{ placeholder: "date of review" }}
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


export default DoctorDiagnosisItem;