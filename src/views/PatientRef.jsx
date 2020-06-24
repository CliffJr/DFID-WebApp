
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import StepOne from './stepOne';
//import StepTwo from './stepTwo.old';
import StepThree from './stepThree';
import StepFour from './stepFour';
import MultiStep from './react-multistep';

import '../assets/css/custom.css';
import '../assets/css/normilize.css';
import '../assets/css/skeleton.css';

class PatientRef extends Component {

  render() {
    const steps = [
      { component: <StepOne /> },
      //{ component: <StepTwo /> },
      { component: <StepThree /> },
      { component: <StepFour /> }
    ]

    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title" className="text-center">DIGITAL FUNDOSCOPY IMAGING DEVICE REFERAL FORM</h4>
            </div>
            <div className="content">
              <MultiStep steps={steps} />
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default PatientRef;
