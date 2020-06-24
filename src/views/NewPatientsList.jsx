import React from 'react';

import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";                                                        

const NewPatientsList = (props) => {
    const patientslist = props.newPatientDetails;
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="New Patients to be Diagnised"
                            category=""
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>PatientID</th>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Year of Diabetes</th>
                                            <th>Message Date Received</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            patientslist.map((currentPatient) => (
                                                <tr key={currentPatient._id}>
                                                    <td>{currentPatient.patientId}</td>
                                                    <td>{currentPatient.firstname}</td>
                                                    <td>{currentPatient.lastname}</td>
                                                    <td>{currentPatient.yearOfDiabetes}</td>
                                                    <td>{currentPatient.dateTakenHbA1c}</td>
                                                    <td>
                                                        <Button className="bg-info">Open</Button>
                                                    </td>
                                                </tr>
                                            )) 
                                            }
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid>

        </div>
    );
}

export default NewPatientsList;