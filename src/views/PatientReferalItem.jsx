import React, {useState} from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import OptionsSymptomsDrop from './optionSymptomsDrop';
import ItemPatientForm from './ItemPatientForm';
import OptionsDiabetesTherapyDrop from './optionDiabetesTherapyDrop';
import OptionsVisualAquityDrop from './optionVisualAquityDrop';
import OptionsIntraOcularPressureDrop from './optionIntraOcularPressureDrop';

const PatientReferalItem = ({ setForm, formData, navigation }) => {
    
    const [dateElectronicReferal, setDateElectronicReferal] = useState(new Date());
    const [dateImagesTaken, setDateImagesTaken] = useState(new Date());
    const [dateHbA1ctaken, setDateHbA1ctaken] = useState(new Date());
    const [dateReviewNurse, setDateReviewNurse] = useState(new Date());

    const {optionsSymptoms, otherSymptoms, optionsDiabetesTherapy, mostRecentHbA1c, optionsVisualAquity, optionsIntraOcularPressure, otherOccularFindings} = formData;
    
    const {next} = navigation;

    return (
        <Row>
            <Col md={12}>
                <Col md={12}>
                    <Card
                        title="Referal Notes"
                        content={
                            <>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date of electronic Referral</ControlLabel>
                                            <Datetime
                                                inputProps={{ placeholder: "date of electronic Referal" }}
                                                timeFormat={false}
                                                selected={dateElectronicReferal}
                                                onChange={dateElectronicReferal => setDateElectronicReferal(dateElectronicReferal)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date Images Taken</ControlLabel>
                                            <Datetime
                                                inputProps={{ placeholder: "Date Picker" }}
                                                timeFormat={false}
                                                selected={dateImagesTaken}
                                                onChange={dateImagesTaken => setDateImagesTaken(dateImagesTaken)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Symptoms</ControlLabel>
                                        <OptionsSymptomsDrop className="col-md-6" name="optionsSymptoms" value={optionsSymptoms} onChange={setForm} />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Other Symptoms</ControlLabel>
                                        <ItemPatientForm
                                            type="text"
                                            placeholder="other diabetic systems"
                                            name="otherSymptoms"
                                            value={otherSymptoms}
                                            onChange={setForm}
                                        />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Diabetes Therapy</ControlLabel>
                                        <OptionsDiabetesTherapyDrop className="col-md-6" name="optionsDiabetesTherapy" value={optionsDiabetesTherapy} onChange={setForm} />

                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Most recent HbA1c</ControlLabel>

                                        <ItemPatientForm
                                            type="text"
                                            placeholder="00.0"
                                            name="mostRecentHbA1c"
                                            value={mostRecentHbA1c}
                                            onChange={setForm}
                                        />
                                    </Col>
                                </Row>
                                <Row>

                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date HbA1C taken</ControlLabel>
                                            <Datetime
                                                type="date"
                                                inputProps={{ placeholder: "Date HbA1C taken" }}
                                                timeFormat={false}
                                                selected={dateHbA1ctaken}
                                                onChang={dateHbA1ctaken => setDateHbA1ctaken(dateHbA1ctaken)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date Review</ControlLabel>
                                            <Datetime
                                                inputProps={{ placeholder: "Date Review" }}
                                                timeFormat={false}
                                                selected={dateReviewNurse}
                                                onChange={dateReviewNurse => setDateReviewNurse(dateReviewNurse)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6">
                                        <ControlLabel>Visual Aquity Left</ControlLabel>
                                        <OptionsVisualAquityDrop className="col-md-12" name="optionsVisualAquity" value={optionsVisualAquity} onChange={setForm} />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Visual Aquity Right</ControlLabel>
                                        <OptionsVisualAquityDrop className="col-md-12" name="optionsVisualAquity" value={optionsVisualAquity} onChange={setForm} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6">

                                        <ControlLabel>Intra Ocular Pressure Left</ControlLabel>
                                        <OptionsIntraOcularPressureDrop className="col-md-6" name="optionsIntraOcularPressure" value={optionsIntraOcularPressure} onChange={setForm} />
                                    </Col>
                                    <Col className="col-md-6">
                                        <ControlLabel>Intra Ocular Pressure Right</ControlLabel>
                                        <OptionsIntraOcularPressureDrop className="col-md-6" name="optionsIntraOcularPressure" value={optionsIntraOcularPressure} onChange={setForm} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-12">
                                        <ControlLabel>Other Occular findings</ControlLabel>
                                        <FormControl
                                            rows="3"
                                            componentClass="textarea"
                                            type="textarea"
                                            placeholder="Other Occular findings"
                                        />
                                        <ItemPatientForm
                                            rows="3"
                                            componentClass="textarea"
                                            type="textarea"
                                            placeholder="Other Occular findings"
                                            name="otherOccularFindings"
                                            value={otherOccularFindings}
                                            onChange={setForm}
                                        />
                                    </Col>
                                </Row>
                                <div className="clearfix" />
                                <div>
                                    <button onClick={next}>Next</button>
                                </div>
                                <div className="clearfix" />
                            </>
                        }
                    />
                </Col>
            </Col>
        </Row>

    );
}

export default PatientReferalItem;