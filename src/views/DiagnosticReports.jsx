
import React, { Component } from 'react';
import { TabContainer, Tabs, Tab } from 'react-bootstrap';

import ImageDisplay from './ImageDisplay';
//import NurseInterpretationItem from './NurseInterpretationItem';
import DoctorDiagnosisItem from './DoctorDiagnosisItem';
import NewPatientsContainer from './NewPatientsContainer';
import PatientReferalDisplay from './PatientDetailsDisplay';

class DiagnosticReports extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 1
    };
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (key){
    //alert('selected ' + key);
    this.setState({key});
  }

  render() {
    
    return (
      <TabContainer>
        <Tabs 
          activeKey={this.state.key} onSelect={this.handleSelect} transition={false} id="noanim-tab"
          >
          <Tab eventKey={1} title="New Patients">
            <NewPatientsContainer />
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
}

export default DiagnosticReports;
