import React, { useState } from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import OptionsSignsDRDrop from './optionSignsDRDrop';
import ItemPatientForm from "./ItemPatientForm";

const StepTwo = ({ setForm, formData, ...props }) => {
  //uploading the images
  const [pictureR1, setPictureR1] = useState(null);
  const [pictureR2, setPictureR2] = useState(null);
  const [pictureL1, setPictureL1] = useState(null);
  const [pictureL2, setPictureL2] = useState(null);

  const [dateImagesTaken, setDateImagesTaken] = useState(new Date());
  const [dateElectronicReferal, setDateElectronicReferal] = useState(new Date());

  const { additionalCommentsPatient, optionsSignsDR } = formData;
  // const { previous, next } = navigation;

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
          title="Patient Eye Details"
          content={
            <>

              <Row>
                <Col className="col-md-6">
                  <input type="file" accept="image/*" onChange={onChangeImageUploadR1} value={pictureR1} />
                </Col>
                <Col className="col-md-6">
                  <input type="file" accept="image/*" onChange={onChangeImageUploadR2} value={pictureR2} />
                </Col>
              </Row>
              <Row>
                <Col className="col-md-6">
                  <input type="file" accept="image/*" multiple="false" onChange={onChangeImageUploadL1} value={pictureL1} />
                </Col>
                <Col className="col-md-6">
                  <input type="file" accept="image/*" multiple="false" onChange={onChangeImageUploadL2} value={pictureL2} />
                </Col>
              </Row>

              <Row>
                <Col className="col-md-12">
                  <FormGroup controlId="formControlsSelect" >
                    <ControlLabel>Signs Of DR</ControlLabel>
                    <OptionsSignsDRDrop className="col-md-12" name="optionsSignsDR" value={optionsSignsDR} onChange={setForm} />
                  </FormGroup>
                </Col>
                <Col className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Date Images Taken</ControlLabel>
                    <Datetime
                      type="date"
                      inputProps={{ placeholder: "date images taken" }}
                      timeFormat={false}
                      selected={dateImagesTaken}
                      onChange={dateImagesTaken => setDateImagesTaken(dateImagesTaken)}
                    />
                  </FormGroup>
                </Col>
                <Col className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Date of Electronic Referal</ControlLabel>
                    <Datetime
                      type="date"
                      inputProps={{ placeholder: "date of electronic referal" }}
                      timeFormat={false}
                      selected={dateElectronicReferal}
                      onChange={dateElectronicReferal => setDateElectronicReferal(dateElectronicReferal)}
                    />
                  </FormGroup>
                </Col>
                <Col className="col-md-12">
                  <ControlLabel>Additional Comments</ControlLabel>
                  <ItemPatientForm
                    className="col-md-12"
                    rows="10"
                    componentClass="textarea"
                    type="text"
                    placeholder="additional comments"
                    value={additionalCommentsPatient}
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


              {/* <div className="clearfix" />
              <div>
                <button onClick={previous}>Previous</button>

                <button onClick={next}>Next</button>
              </div>
              <div className="clearfix" /> */}
            </>
          }
        />
      </Col>
    </Row>
  );
}

export default StepTwo;
