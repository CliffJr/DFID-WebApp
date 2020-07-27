import React, { useState } from "react";
import { Row, Col, Modal, Button } from 'react-bootstrap';
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>
                <Col md={12}>
                    <Col className="text-left">
                        <Card
                            title="Review Patient Information"
                            content={
                                <>
                                    <Row>
                                        <Col className="col-md-12">

                                            First name: {`${firstnamePatient}`} <br />
                                            Last Name: {`${lastnamePatient}`}  <br />
                                            NCD Number Patient: {`${ncdNumberPatient}`} <br />
                                            DFID Study Number : {`${dfidStudyNumberPatient}`} <br />
                                            Gender: {`${optionsGender}`} <br />
                                            Type of Diabetes: {`${optionTypeDiabetes}`} <br />
                                            DOB: {`${dobPatient}`} <br />

                                        </Col>
                                    </Row>
                                    <div className="jumbotron">
                                        <Row>
                                            <Col className="col-md-2"><button onClick={props.previousStep}>Previous Step</button></Col>
                                            <Col className="col-md-2"><button onClick={handleShow}>Submit</button></Col>
                                        </Row>
                                    </div>
                                </>
                            }
                        />
                    </Col>

                </Col>
            </Row >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
  </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
  </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default ReviewNewPatientDetails;