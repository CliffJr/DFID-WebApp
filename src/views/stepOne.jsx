import React, { useState } from 'react';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import Datetime from 'react-datetime';

//import DatePicker from "react-datepicker";
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

//import "react-datepicker/dist/react-datepicker.css";


import ItemPatientForm from "./ItemPatientForm";
import OptionsDrop from "./optionDrop";
import OptionsTypeDiabetesDrop from './optionTypeDiabetesDrop';


const StepOne = ({ setForm, dobDate, setDobDate, formData, ...props }) => {

  //const {dob} = dobDate;

  const [yearDMPatient, setYearDMPatient] = useState(new Date());

  const { firstnamePatient, lastnamePatient, ncdNumberPatient, dfidStudyNumberPatient, optionsGender, optionTypeDiabetes } = formData;
  
  return (
    < div className="form">
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



            <ControlLabel>Date Of Birth </ControlLabel>


            <DatePickerInput
               name="dobDate"
               placeholder={dobDate}
               selected={dobDate}
               onChange={dobDate => setDobDate(dobDate)}
               dateFormat="MM-dd-yyyy"
 
    />

            {/* <DatePicker
              name="dobDate"
              className={"form-control"}
              selected={dobDate}
              onChange={dobDate => setDobDate(dobDate)}
              dateFormat="MM-dd-yyyy"
            /> */}


                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <ControlLabel>Type of Diabetes</ControlLabel>
                    <OptionsTypeDiabetesDrop className="col-md-12" name="optionTypeDiabetes" value={optionTypeDiabetes} onChange={setForm} />
                  </Col>
                  <Col className="col-md-6">
                    <FormGroup>
                      <ControlLabel>Year of DM diagnosis</ControlLabel>
                      <Datetime
                      
                        type="date"
                        inputProps={{ placeholder: "year of DM diagnosis" }}
                        timeFormat={false}
                        selected={yearDMPatient}
                        onChange={yearDMPatient => setYearDMPatient(yearDMPatient)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

<div className="jumbotron">
                <Row>
                <Col className="col-md-2"><button onClick={props.nextStep}>Next Step</button></Col>
              </Row>
</div>            

                {/* <div>
                  <button onClick={next}>Next</button>
                </div>
                <div className="clearfix" /> */}
              </>
            }
          />
        </Col>
      </Row>
    </ div>
  );
}

export default StepOne;