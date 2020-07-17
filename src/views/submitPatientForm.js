import React from "react";
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';

const SubmitPatientForm = (...props) => {
  return (
    <div>
      <h3>Thank you for submitting.</h3>

<div className="jumbotron">
                <Row>
                <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                <Col className="col-md-2"><button onClick={()=>props.goToStep(2)}>Step 2</button></Col>
                <Col className="col-md-2"><button onClick={props.firstStep}>First Step</button></Col>
              </Row>
</div>  


    </div>
  );
};

export default SubmitPatientForm