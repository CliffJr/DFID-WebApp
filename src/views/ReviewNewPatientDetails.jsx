import React from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import 'react-datetime/css/react-datetime.css';

import "./stepOne";


const ReviewNewPatientDetails = ({ setForm, dobDate,  setDobDate, formData, ...props }) => {

    const {
        firstnamePatient,
        lastnamePatient,
        ncdNumberPatient,
        dfidStudyNumberPatient,
        optionsGender,
        optionTypeDiabetes,
        dobPatient
    } = formData;


    return (
        <Row>
            <Col md={12} className="text-left">
                <Card
                    title="Review Patient Information"
                    content={
                        <>
                            <Row>
                                <Col className="col-md-12">
                                    <Card>
                                        <Card.Header>>Patient Details</Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title><Button variant="primary" onClick={() => go("stepOne")}>Edit</Button></Card.Title> */}
                                            <Card.Text>
                                                    First name: {`${firstnamePatient}`},<br/>
                                                    Last Name: {`${lastnamePatient}`}, <br/>
                                                    NCD Number Patient: {`${ncdNumberPatient}`},<br/>
                                                    DFID Study Number : {`${dfidStudyNumberPatient}`},<br/>
                                                    Options: {`${optionsGender}`},<br/>
                                                    Type of Diabetes: {`${ optionTypeDiabetes}`},<br/>
                                                    DOB: {`${ dobPatient}`}                                            
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-md-6">
                                    <div>
                                    {/* <h4>Patient Details: <button onClick={() => go("stepTwo")}>Edit</button> </h4> */}
                                    First name: {`${firstnamePatient}`},<br/>
                                                    Last Name: {`${lastnamePatient}`}, <br/>
                                                    NCD Number Patient: {`${ncdNumberPatient}`},<br/>
                                                    DFID Study Number : {`${dfidStudyNumberPatient}`},<br/>
                                                    Gender: {`${optionsGender}`},<br/>
                                                    Type of Diabetes: {`${ optionTypeDiabetes}`},<br/>
                                                    DOB: {`${ dobDate}`} ,<br/>

                                </div>
                                </Col>
                            </Row>
<div className="jumbotron">
                <Row>
                <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                <Col className="col-md-2"><button onClick={props.nextStep}>Next Step</button></Col>
                <Col className="col-md-2"><button onClick={props.firstStep}>First Step</button></Col>
              </Row>
</div>  

                        </>
                    }
                />
            </Col>
        </Row>
    );

}

export default ReviewNewPatientDetails;