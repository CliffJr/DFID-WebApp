
import React, { Component } from 'react';
import { TabContainer, Tabs, Tab } from 'react-bootstrap';

import PatientDetailsItem from './PatientDetailsItem';
import NewPatientsList from "./NewPatientsList";
import ImageDisplay from './ImageDisplay';
import NurseInterpretationItem from './NurseInterpretationItem';
import DoctorDiagnosisItem from './DoctorDiagnosisItem';
import NewPatientsContainer from './NewPatientsContainer';

class DiagnosticReports extends Component {

  render() {

    return (
      <TabContainer>
        <Tabs
          defaultActiveKey="home" transition={false} id="noanim-tab"
        >
          <Tab eventKey="newPatients" title="New Patients">
            {/* <NewPatientsList /> */}
            <NewPatientsContainer/>
          </Tab>
          <Tab eventKey="patientsDetails" title="Patient Details">
            <PatientDetailsItem />
          </Tab>
          <Tab eventKey="patientImages" title="Eye Images">
            <ImageDisplay />
          </Tab>
          <Tab eventKey="nurseInterpretation" title="Nurse Interpretation" >
            <NurseInterpretationItem />
          </Tab>
          <Tab eventKey="recommendation" title="Recommendation">
            <DoctorDiagnosisItem />
          </Tab>
        </Tabs>
      </TabContainer>
    );
  }
}

export default DiagnosticReports;
