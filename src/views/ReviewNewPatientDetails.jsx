import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import 'react-datetime/css/react-datetime.css';


const ReviewNewPatientDetails = ({ formData, setForm, dobPatient, setDobPatient, ...props }) => {

    const {
        firstnamePatient,
        lastnamePatient,
        ncdNumberPatient,
        dfidStudyNumberPatient,
        optionsGender,
        optionTypeDiabetes
    } = formData;

    return (
        <Row>
            <Row>
            <Col className="text-left col-md-12">
                <Card
                    title="Review Patient Information"
                    content={
                        <>
                            <Row>
                                <Col className="col-md-12">
                                    First name: {`${firstnamePatient}`},<br />
                                    Last Name: {`${lastnamePatient}`}, <br />
                                    NCD Number Patient: {`${ncdNumberPatient}`},<br />
                                    DFID Study Number : {`${dfidStudyNumberPatient}`},<br />
                                    Gender: {`${optionsGender}`},<br />
                                    Type of Diabetes: {`${optionTypeDiabetes}`},<br />
                                    DOB: {`${dobPatient}`} ,<br />
                                </Col>
                            </Row>
                        </>
                    }
                />
            </Col>
            </Row>

            <div className="jumbotron">
                <Row>
                    <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                    <Col className="col-md-2"><button onClick={props.nextStep}>Submit</button></Col>
                </Row>
            </div>
        </Row >
    );

}

export default ReviewNewPatientDetails;