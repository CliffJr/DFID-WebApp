import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./MultiStepForm";

const SubmitPatientForm = (...props) => {
  return (
    <div>
          <div className="jumbotron">
                <Row>
                {/* <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                <Col className="col-md-2"><button onClick={()=>props.goToStep(2)}>Step 2</button></Col> */}
                  <Col className="col-md-12 text-center text-capitalize ">
                  <h1 className="text-success"><b>Successfully Submitted the patient Details....</b></h1>
                  <br/>
                  <br/>
                  <button onClick={props.firstStep}>New Entry</button>
                  </Col>
              </Row>
          </div>  
    </div>
  );
};

export default SubmitPatientForm;

