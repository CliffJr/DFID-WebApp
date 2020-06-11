import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

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
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>PatientID</th>
                                            <th>Year of Diabetes</th>
                                            <th>Gender</th>
                                            <th>visual Acuity Left</th>
                                            <th>visual Acuity Right</th>
                                            <th>visual Acu</th>
                                            <th>visual Acui</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            patientslist.map((currentPatient) => (
                                                <Link to={currentPatient._id}>
                                                    <tr key={currentPatient._id}>
                                                        <td>{currentPatient.firstname}</td>
                                                        <td>{currentPatient.lastname}</td>
                                                        <td>{currentPatient.patientId}</td>
                                                        <td>{currentPatient.yearOfDiabetes}</td>
                                                        <td>{currentPatient.gender}</td>
                                                        <td>{currentPatient.visualAcuityLeft}</td>
                                                        <td>{currentPatient.visualAcuityRight}</td>
                                                        <td>{currentPatient.recentHbA1c}</td>
                                                        <td>{currentPatient.dateTakenHbA1c}</td>
                                                    </tr>
                                                </Link>
                                            ))}
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