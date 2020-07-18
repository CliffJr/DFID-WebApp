import React from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import OptionsSymptomsDrop from './optionSymptomsDrop';
import ItemPatientForm from './ItemPatientForm';
import OptionsDiabetesTherapyDrop from './optionDiabetesTherapyDrop';
import OptionsVisualAquityDrop from './optionVisualAquityDrop';
import OptionsIntraOcularPressureDrop from './optionIntraOcularPressureDrop';

const StepThree = ({ setForm, formData, setDateHbA1ctaken, dateHbA1ctaken, dateReviewNurse, setDateReviewNurse, setDateImagesTaken, dateImagesTaken, setDateElectronicReferal, dateElectronicReferal, ...props }) => {



  const { optionsSymptoms, otherSymptoms, optionsDiabetesTherapy, mostRecentHbA1c, optionsVisualAquity, optionsIntraOcularPressure, otherOccularFindings } = formData;


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
                      <DatePickerInput
                        name="dateElectronicReferal"
                        dateFormat="MM-dd-yyyy"
                        selected={dateElectronicReferal}
                        onChange={dateElectronicReferal => setDateElectronicReferal(dateElectronicReferal)}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="col-md-6">
                    <FormGroup>
                      <ControlLabel>Date Images Taken</ControlLabel>
                      <DatePickerInput
                        name="dateImagesTaken"
                        dateFormat="MM-dd-yyyy"
                        selected={dateImagesTaken}
                        onChange={dateImagesTaken => setDateImagesTaken(dateImagesTaken)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Symptoms</ControlLabel>
                    <OptionsSymptomsDrop className="col-md-12" name="optionsSymptoms" value={optionsSymptoms} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Other Symptoms</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
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
                    <OptionsDiabetesTherapyDrop className="col-md-12" name="optionsDiabetesTherapy" value={optionsDiabetesTherapy} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Most recent HbA1c</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
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
                    <ControlLabel>Date HbA1C taken</ControlLabel>
                    <DatePickerInput
                      name="dateHbA1ctaken"
                      dateFormat="MM-dd-yyyy"
                      selected={dateHbA1ctaken}
                      onChang={dateHbA1ctaken => setDateHbA1ctaken(dateHbA1ctaken)}
                    />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Date Review</ControlLabel>
                    <DatePickerInput
                      name="dateReviewNurse"
                      dateFormat="MM-dd-yyyy"
                      selected={dateReviewNurse}
                      onChange={dateReviewNurse => setDateReviewNurse(dateReviewNurse)}
                    />

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
                    <OptionsIntraOcularPressureDrop className="col-md-12" name="optionsIntraOcularPressure" value={optionsIntraOcularPressure} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Intra Ocular Pressure Right</ControlLabel>
                    <OptionsIntraOcularPressureDrop className="col-md-12" name="optionsIntraOcularPressure" value={optionsIntraOcularPressure} onChange={setForm} />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-12">
                    <ControlLabel>Other Occular findings</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
                      rows="3"
                      componentClass="textarea"
                      type="text"
                      placeholder="Other Occular findings"
                      name="otherOccularFindings"
                      value={otherOccularFindings}
                      onChange={setForm}
                    />
                  </Col>
                </Row>
                
                <div className="jumbotron">
                  <Row>
                    <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                    <Col className="col-md-2"><button onClick={props.nextStep}>Next Step</button></Col>
                  </Row>
                </div>

              </>
            }
          />
        </Col>
      </Col>
    </Row>

  );
}

export default StepThree;