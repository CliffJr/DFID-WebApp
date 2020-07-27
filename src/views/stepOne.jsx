import React, {useState} from 'react';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import CreatableSelect from 'react-select/creatable';

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import ItemPatientForm from "./ItemPatientForm";
import OptionsDrop from "./optionDrop";

const StepOne = ({ formData, setForm, dobPatient, setDobPatient, yearDMPatient, setYearDMPatient, ...props }) => {

  const { firstnamePatient, lastnamePatient, ncdNumberPatient, dfidStudyNumberPatient, optionsGender } = formData;

  const optionTypeDiabetes = [
    { label: "", value: ""},
    { label: "DM 1", value: "DM 1"},
    { label: "DM 2", value: "DM 2"},
    { label: "Gestational", value: "Gestational"},
    { label: "Other -->", value: " & "}
  ];

  //Hooks
  const [selectedTypesDiabetes, setSelectedTypesDiabetes] = useState([]);

  return (
    <>
      <Row>
        <Col md={12}>
          <Card
            title="Patient Details"
            content={
              <>

                <Row>
                  <Col className="col-md-6" >
                    <ItemPatientForm
                      className="col-md-12"
                      label="First name"
                      name="firstnamePatient"
                      type="text"
                      bsClass="form-control"
                      value={firstnamePatient}
                      onChange={setForm}
                    />
                  </Col>
                  <Col className="col-md-6" >
                    <ItemPatientForm
                      className="col-md-12"
                      label="Last name"
                      name="lastnamePatient"
                      type="text"
                      bsClass="form-control"
                      required={true}
                      value={lastnamePatient}
                      onChange={setForm}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ItemPatientForm
                      className="col-md-12"
                      label="Patient NCD Number"
                      name="ncdNumberPatient"
                      type="text"
                      bsClass="form-control"
                      placeholder="PP-DD-SS_YYYY-NCD_0000"
                      required={true}
                      value={ncdNumberPatient}
                      onChange={setForm}
                    />
                  </Col>
                  <Col className="col-md-6">
                    <ItemPatientForm
                      className="col-md-12"
                      label="Patient DFID Study Number"
                      name="dfidStudyNumberPatient"
                      bsClass="form-control"
                      placeholder="DFID-0000"
                      value={dfidStudyNumberPatient}
                      onChange={setForm}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Gender  </ControlLabel>
                    <OptionsDrop className="col-md-12" name="optionsGender" value={optionsGender} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Date Of Birth</ControlLabel>
                    <DatePickerInput
                      placeholder="DD/MM/YYYY"
                      name="dobPatient"
                      value={dobPatient}
                      onChange={dobPatient => setDobPatient(dobPatient)}
                      dateFormat="DD-MM-YYYY"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Type of Diabetes</ControlLabel>
                    <CreatableSelect
                      isMulti
                      name="optionTypeDiabetes"
                      options={optionTypeDiabetes}
                      selected={selectedTypesDiabetes}
                      onChange={setSelectedTypesDiabetes}
                    />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Year of DM diagnosis</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
                      placeholder="YYYY"
                      name="yearDMPatient"
                      value={yearDMPatient}
                      onChange={setForm}
                    />
                  </Col>
                </Row>
                <br/>
                <div className="jumbotron">
                  <Row >
                    <Col className="col-md-2"><button onClick={props.nextStep}>Next Step</button></Col>
                  </Row>
                </div>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
}

export default StepOne;