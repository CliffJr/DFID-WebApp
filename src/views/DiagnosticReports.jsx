
import React, { useState } from 'react';
import { TabContainer, Tabs, Tab } from 'react-bootstrap';

import ImageDisplay from './ImageDisplay';
//import NurseInterpretationItem from './NurseInterpretationItem';
import DoctorDiagnosisItem from './DoctorDiagnosisItem';
//import NewPatientsContainer from './NewPatientsContainer';
import PatientReferalDisplay from './PatientDetailsDisplay';
import NewPatientsList from './NewPatientsList';

const DiagnosticReports = () => {

  const [key, setKey] = useState(0);

  return (

    <TabContainer>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey={1} title="New Patients">
          <NewPatientsList />
        </Tab>
        <Tab eventKey={2} title="Patient Details">
          <PatientReferalDisplay />
        </Tab>
        <Tab eventKey={3} title="Eye Images">
          <ImageDisplay />
        </Tab>
        {/* <Tab eventKey={4} title="Nurse Interpretation" >
            <NurseInterpretationItem />
          </Tab> */}
        <Tab eventKey={5} title="Recommendation">
          <DoctorDiagnosisItem />
        </Tab>
      </Tabs>
    </TabContainer>

  );
}


export default DiagnosticReports;
