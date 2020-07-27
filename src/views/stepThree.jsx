import React, { useState } from 'react';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import CreatableSelect from 'react-select/creatable';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import ItemPatientForm from './ItemPatientForm';
import OptionsDiabetesTherapyDrop from './optionDiabetesTherapyDrop';
import OptionsVisualAquityDrop from './optionVisualAquityDrop';

const StepThree = ({ setForm, formData, setDateHbA1ctaken, dateHbA1ctaken, dateReviewNurse, setDateReviewNurse, setDateImagesTaken, dateImagesTaken, setDateElectronicReferal, ...props }) => {

  const optionsSymptoms = [
    { label: "", value: "" },
    { label: "Blurred vision", value: "Blurred vision" },
    { label: "Change of spectacles", value: "Change of spectacles" },
    { label: "Dark empty areas in your vision", value: "Dark empty areas in your vision" },
    { label: "Discharge", value: "Discharge" },
    { label: "Dryness of eyes", value: "Dryness of eyes" },
    { label: "Flashes of light", value: "Flashes of light" },
    { label: "Floaters", value: "Floaters" },
    { label: "Fluctuating vision", value: "Fluctuating vision" },
    { label: "Impaired color vision", value: "Impaired color vision" },
    { label: "Itchiness", value: "Itchiness" },
    { label: "Pain", value: "Pain" },
    { label: "Poor vision", value: "Poor vision" },
    { label: "Redness", value: "Redness" },
    { label: "Stys", value: "Stys" },
    { label: "None", value: "None" },
  ];

  const optionsIntraOcularPressure = [
    { label: "", value: "" },
    { label: "Not Done", value: "Not Done" }
  ];

  const { optionsDiabetesTherapy, mostRecentHbA1c, optionsVisualAquity, otherOccularFindings } = formData;
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedIntraOcularPressure, setSelectedIntraOcularPressure] = useState([]);

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
                    <ItemPatientForm
                      className="col-md-12"
                      type="text"
                      placeholder=""
                      disabled={true}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Date Review</ControlLabel>
                    <DatePickerInput
                      name="dateReviewNurse"
                      placeholder="DD/MM/YYYY"
                      dateFormat="MM-dd-yyyy"
                      value={dateReviewNurse}
                      onChange={dateReviewNurse => setDateReviewNurse(dateReviewNurse)}
                    />
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Symptoms</ControlLabel>
                    <CreatableSelect
                      isMulti
                      name="optionSymptoms"
                      options={optionsSymptoms}
                      selected={selectedSymptoms}
                      onChange={setSelectedSymptoms}
                    />
                  </Col>
               
                  <Col className="col-md-6">
                    <ControlLabel>Diabetes Therapy</ControlLabel>
                    <OptionsDiabetesTherapyDrop className="col-md-12" name="optionsDiabetesTherapy" value={optionsDiabetesTherapy} onChange={setForm} />
                  </Col>
                </Row>
                <br/>
                <Row>
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
                  <Col className="col-md-6">
                    <ControlLabel>Date HbA1C taken</ControlLabel>
                    <DatePickerInput
                      name="dateHbA1ctaken"
                      placeholder="DD/MM/YYYY"
                      dateFormat="MM-dd-yyyy"
                      value={dateHbA1ctaken}
                      onChang={dateHbA1ctaken => setDateHbA1ctaken(dateHbA1ctaken)}
                    />
                  </Col>

                </Row>
                <br />
                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Visual Aquity Right</ControlLabel>
                    <OptionsVisualAquityDrop className="col-md-12" name="optionsVisualAquity" value={optionsVisualAquity} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Visual Aquity Left</ControlLabel>
                    <OptionsVisualAquityDrop className="col-md-12" name="optionsVisualAquity" value={optionsVisualAquity} onChange={setForm} />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Intra Ocular Pressure Right</ControlLabel>
                    <CreatableSelect
                      isMulti
                      name="optionsIntraOcularPressure"
                      options={optionsIntraOcularPressure}
                      selected={selectedIntraOcularPressure}
                      onChange={setSelectedIntraOcularPressure}
                    />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Intra Ocular Pressure Left</ControlLabel>
                    <CreatableSelect
                      isMulti
                      name="optionsIntraOcularPressure"
                      options={optionsIntraOcularPressure}
                      selected={selectedIntraOcularPressure}
                      onChange={setSelectedIntraOcularPressure}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="col-md-12">
                    <ControlLabel>Other Ocular findings</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
                      rows="3"
                      componentClass="textarea"
                      type="text"
                      placeholder="enter text"
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