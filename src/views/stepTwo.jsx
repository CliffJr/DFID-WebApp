import React from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import OptionsSignsDRDrop from './optionSignsDRDrop';
import ItemPatientForm from "./ItemPatientForm";

const StepTwo = ({ formData, setForm, dobPatient, setDobPatient, yearDMPatient, setYearDMPatient, pictureR1, setPictureR1, pictureR2, setPictureR2, pictureL1, setPictureL1, pictureL2, setPictureL2, dateImagesTaken, setDateImagesTaken, dateElectronicReferal, setDateElectronicReferal, ...props }) => {

  const { additionalCommentsPatient, optionsSignsDR } = formData;

  const onChangeImageUploadR1 = e => {
    if (e.target.files[0]) {
      setPictureR1(e.target.files[0]);
    }
  };

  const onChangeImageUploadR2 = e => {
    if (e.target.files[0]) {
      setPictureR2(e.target.files[0]);
    }
  };

  const onChangeImageUploadL1 = e => {
    if (e.target.files[0]) {
      setPictureL1(e.target.files[0]);
    }
  };

  const onChangeImageUploadL2 = e => {
    if (e.target.files[0]) {
      setPictureL2(e.target.files[0]);
    }
  };

  return (

    <Row>
      <Col md={12} className="text-left">
        <Card
          title="Image Transfer"
          content={
            <>
              <Row>
                <Col className="col-md-6">
                  <ControlLabel>Right Eye Image 1</ControlLabel>
                  <input type="file" accept="image/*" onChange={onChangeImageUploadR1} value={pictureR1} />
                </Col>
                <Col className="col-md-6">
                  <ControlLabel>Right Eye Image 2</ControlLabel>
                  <input type="file" accept="image/*" onChange={onChangeImageUploadR2} value={pictureR2} />
                </Col>
              </Row>
              <Row>
                <Col className="col-md-6">
                  <ControlLabel>Left Eye Image 1</ControlLabel>
                  <input type="file" accept="image/*" onChange={onChangeImageUploadL1} value={pictureL1} />
                </Col>
                <Col className="col-md-6">
                  <ControlLabel>Left Eye Image 2</ControlLabel>
                  <input type="file" accept="image/*" onChange={onChangeImageUploadL2} value={pictureL2} />
                </Col>
              </Row>
            
              <Row>
                <Col className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Date Images Taken</ControlLabel>
                    <DatePickerInput
                      placeholder="DD/MM/YYYY"
                      name="dateImagesTaken"
                      dateFormat="MM-dd-yyyy"
                      value={dateImagesTaken}
                      onChange={dateImagesTaken => setDateImagesTaken(dateImagesTaken)}
                    />
                  </FormGroup>
                </Col>
                <Col className="col-md-12">
                  <FormGroup controlId="formControlsSelect" >
                    <ControlLabel>Signs Of  DIABETIC RETINOPATHY</ControlLabel>
                    <OptionsSignsDRDrop className="col-md-12" name="optionsSignsDR" value={optionsSignsDR} onChange={setForm} />
                  </FormGroup>
                </Col>
                <Col className="col-md-12">
                    <ControlLabel>Additional Comments</ControlLabel>
                    <ItemPatientForm
                      className="col-md-12"
                      rows="10"
                      componentClass="textarea"
                      type="text"
                      placeholder="enter text"
                      value={additionalCommentsPatient}
                      onChange={setForm}
                    />
                  </Col>
                <Col className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Date of Electronic Referal</ControlLabel>
                    <DatePickerInput
                      name="dateElectronicReferal"
                      placeholder="DD/MM/YYYY"
                      dateFormat="MM-dd-yyyy"
                      value={dateElectronicReferal}
                      onChange={dateElectronicReferal => setDateElectronicReferal(dateElectronicReferal)}
                    />
                  </FormGroup>
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
    </Row>
  );
}

export default StepTwo;
