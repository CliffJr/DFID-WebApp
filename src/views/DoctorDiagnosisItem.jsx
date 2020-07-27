import React, { useState } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx'
import Button from "components/CustomButton/CustomButton.jsx";
import 'react-datetime/css/react-datetime.css';

const DoctorDiagnosisItem = ({ dateReviewDoctor, setDateReviewDoctor, ...pros }) => {
    const optionsDiagnosis = [
        { label: "No abnormalities detected", value: "No abnormalities detected" },
        { label: "Cataracts", value: "Cataracts" },
        { label: "Cataracts, suspected", value: "Cataracts, suspected", },
        { label: "Maculophaty", value: "Maculophaty" },
        { label: "Macular degeneration, Age related (ARMD)", value: "Macular degeneration, Age related (ARMD)" },
        { label: "Macula Edema, Clinical Significant (CSME)", value: "Macula Edema, Clinical Significant (CSME)" },
        { label: "Retinopathy, hypertensive", value: "Retinopathy, hypertensive" },
        { label: "Retinopathy, NPDR", value: "Retinopathy, NPDR" },
        { label: "Retinopathy, PDR", value: "Retinopathy, PDR" },
        { label: "Retinal dystrophy", value: "Retinal dystrophy" },
    ];

    const optionsRecommendedManagement = [
        { label: "Anti VEGF", value: "Anti VEGF" },
        { label: "Cateract extraction", value: "Cateract extraction" },
        { label: "Control Risk Factors", value: "Control Risk Factors" },
        { label: "Evaluation Cataract", value: "Evaluation Cataract" },
        { label: "Evaluation Refraction", value: "Evaluation Refraction" },
        { label: "Evaluation Slit lamp", value: "Evaluation Slit lamp" },
        { label: "Laser", value: "Laser" },
        { label: "Observe & Monitor", value: "Observe & Monitor" },
    ];

    const optionsAdditionalEyePathologies = [
        { label: "Age related macular edema (ARMD)", value: "Age related macular edema (ARMD)" },
        { label: "Amblyopia", value: "Amblyopia" },
        { label: "Cataracts", value: "Cataracts" },
        { label: "Glaucoma", value: "Glaucoma" },
    ];

    const optionsRepeatFundoscopy = [
        { label: "", value: "" },
        { label: "3 months", value: "3 months" },
        { label: "6 months", value: "6 months" },
        { label: "Annual", value: "Annual" },
    ];

    const optionsReferralConsultant = [
        { label: "", value: "" },
        { label: "No referal", value: "No referal" },
        { label: "Urgent", value: "Urgent" },
        { label: "3 months", value: "3 months" },
        { label: "6 months", value: "6 months" },
    ];

    //Hooks
    const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);
    const [selectedRecommendedManagement, setSelectedRecommendedManagement] = useState([]);
    const [selectedAdditionalEyePathologies, setSelectedAdditionalEyePathologies] = useState([]);
    const [selectedRepeatFundoscopy, setSelectedRepeatFundoscopy] = useState([]);
    const [selectedReferralConsultant, setSelectedReferralConsultant] = useState([]);
    const [doctorName] = useState([]);


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
                                    ncols={["col-md-6"]}
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
                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Date Review</ControlLabel>
                                        <DatePickerInput
                                            name="dateReviewDoctor"
                                            placeholder="DD/MM/YYYY"
                                            dateFormat="MM-dd-yyyy"
                                            value={dateReviewDoctor}
                                            onChange={dateReviewDoctor => setDateReviewDoctor(dateReviewDoctor)}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Signs of Diabetic retinopathy </ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                <option value="Not able to assess">Not able to assess</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Non Proliferative Diabetic Retinopathy - Right Eye</ControlLabel>
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
                                            <ControlLabel>Non Proliferative Diabetic Retinopathy - Left Eye</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Mild">Low Risk</option>
                                                <option value="Moderate">High Risk</option>
                                                <option value="Not able to access">Not able to assess</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Proliferative Diabetic Retinopathy - Right Eye</ControlLabel>
                                            <FormControl componentClass="select" placeholder="">
                                                <option>...</option>
                                                <option value="Mild">Low Risk</option>
                                                <option value="Moderate">High Risk</option>
                                                <option value="Not able to access">Not able to assess</option>
                                            </FormControl>

                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Proliferative Diabetic Retinopathy - Left Eye</ControlLabel>
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

                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Additional suspected  eye pathologies - Right Eye</ControlLabel>
                                        <CreatableSelect
                                            isMulti
                                            options={optionsAdditionalEyePathologies}
                                            selected={selectedAdditionalEyePathologies}
                                            onChange={setSelectedAdditionalEyePathologies}
                                        />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Additional suspected  eye pathologies - Left Eye</ControlLabel>
                                        <CreatableSelect
                                            isMulti
                                            options={optionsAdditionalEyePathologies}
                                            selected={selectedAdditionalEyePathologies}
                                            onChange={setSelectedAdditionalEyePathologies}
                                        />
                                    </Col>

                                </Row>
                                <br />

                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Diagnosis</ControlLabel>
                                        <CreatableSelect
                                            label={"Diagnosis"}
                                            options={optionsDiagnosis}
                                            value={selectedDiagnosis}
                                            onChange={setSelectedDiagnosis}
                                            labelledBy={"Diagnosis"}
                                        />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Recommended Management</ControlLabel>
                                        <CreatableSelect
                                            label={"Notes"}
                                            options={optionsRecommendedManagement}
                                            selected={selectedRecommendedManagement}
                                            onChange={setSelectedRecommendedManagement}
                                            labelledBy={"Recommended Management"}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                {/* <Row>
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
                                </Row> */}
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Repeat fundoscopy </ControlLabel>
                                            <CreatableSelect
                                                isMulti
                                                options={optionsRepeatFundoscopy}
                                                selected={selectedRepeatFundoscopy}
                                                onChange={setSelectedRepeatFundoscopy}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Referral to consultant</ControlLabel>
                                            <CreatableSelect
                                                isMulti
                                                options={optionsReferralConsultant}
                                                selected={selectedReferralConsultant}
                                                onChange={setSelectedReferralConsultant}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date of Review</ControlLabel>
                                            <Datetime
                                                inputProps={{ placeholder: "date of review" }}
                                                timeFormat={false}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row> */}

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