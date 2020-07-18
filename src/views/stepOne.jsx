import React from 'react';
import { Row, Col, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import ItemPatientForm from "./ItemPatientForm";
import OptionsDrop from "./optionDrop";
import OptionsTypeDiabetesDrop from './optionTypeDiabetesDrop';


const StepOne = ({ formData, setForm, dobPatient, setDobPatient, yearDMPatient, setYearDMPatient, ...props }) => {

  const { firstnamePatient, lastnamePatient, ncdNumberPatient, dfidStudyNumberPatient, optionsGender, optionTypeDiabetes } = formData;

  return (
    <>
      <Row>
        <Col md={12}>
          <Card
            title="Patient Details"
            content={
              <>
                <Row>
                  <Col className="col-md-12">
                    <ItemPatientForm
                      className="col-md-12"
                      type="text"
                      placeholder="John Doe"
                      disabled={true}
                    />
                  </Col>
                </Row>

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
                      placeholder="08-05-OA-DFID-0000"
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
                      name="dobPatient"
                      selected={dobPatient}
                      onChange={dobPatient => setDobPatient(dobPatient)}
                      dateFormat="MM-dd-yyyy"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Type of Diabetes</ControlLabel>
                    <OptionsTypeDiabetesDrop className="col-md-12" name="optionTypeDiabetes" value={optionTypeDiabetes} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Year of DM diagnosis</ControlLabel>
                    <DatePickerInput
                      name="yearDMPatient"
                      selected={yearDMPatient}
                      onChange={yearDMPatient => setYearDMPatient(yearDMPatient)}
                    />
                  </Col>
                </Row>
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