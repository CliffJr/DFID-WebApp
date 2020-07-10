import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from 'components/FormInputs/FormInputs.jsx';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class PatientDetailsItem extends Component {

    constructor(props) {
        super(props);

        this.onChangefirstname = this.onChangefirstname.bind(this);
        this.onChangelastname = this.onChangelastname.bind(this);
        this.onChangepatientId = this.onChangepatientId.bind(this);
        this.onChangeyearOfDiebetes = this.onChangeyearOfDiebetes.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangeVisualAcuityLeft = this.onChangeVisualAcuityLeft.bind(this);
        this.onChangeVisualAcuityRight = this.onChangeVisualAcuityRight.bind(this);
        this.onChangeRecentHbA1c = this.onChangeRecentHbA1c.bind(this);
        this.onChangeDateTakenHbA1c = this.onChangeDateTakenHbA1c.bind(this);
        this.onChangeLeftImage1 = this.onChangeLeftImage1.bind(this);
        this.onChangeyearPatientStudyNumber = this.onChangeyearPatientStudyNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            patientId: '',
            yearOfDiabetes: '',
            gender: '',
            visualAcuityLeft: '',
            visualAcuityRight: '',
            recentHbA1c: '',
            dateTakenHbA1c: '',
            leftImage1: '',
            patientStudyNumber: ''
        }
    }

    onChangefirstname = (e) => {
        this.setState({ firstname: e.target.value })
    }

    onChangelastname = (e) => {
        this.setState({ lastname: e.target.value })
    }

    onChangepatientId = (e) => {
        this.setState({ patientId: e.target.value })
    }

    onChangeyearOfDiebetes = (e) => {
        this.setState({ yearOfDiabetes: e.target.value })
    }

    onChangegender = (e) => {
        this.setState({ gender: e.target.value })
    }

    onChangeVisualAcuityLeft = (e) => {
        this.setState({ visualAcuityLeft: e.target.value })
    }

    onChangeVisualAcuityRight = (e) => {
        this.setState({ visualAcuityRight: e.target.value })
    }

    onChangeRecentHbA1c = (e) => {
        this.setState({ recentHbA1c: e.target.value })
    }

    onChangeDateTakenHbA1c = (date) => {
        this.setState({ dateTakenHbA1c: date._d })
    }

    onChangeLeftImage1 = (e) => {
        this.setState({ leftImage1: e.target.file })
    }

    onChangeyearPatientStudyNumber = (e) => {
        this.setState({patientStudyNumber: e.target.value})
    }
    // To add new employee when user submits the form
    onSubmit = (e) => {
        e.preventDefault();

        const newPatient = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            patientId: this.state.patientId,
            yearOfDiabetes: this.state.yearOfDiabetes,
            gender: this.state.gender,
            visualAcuityLeft: this.state.visualAcuityLeft,
            visualAcuityRight: this.state.visualAcuityRight,
            recentHbA1c: this.state.recentHbA1c,
            dateTakenHbA1c: this.state.dateTakenHbA1c,
            leftImage1: this.state.leftImage1
        };

        axios.post('http://localhost:4000/dfidDb/add', newPatient)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        alert('Patient successfully saved. Click Next to proceed');
    }

    render() {

        return (
            <Row>
                <Col md={12}>
                    <Card
                        title="Patient Details"
                        content={
                            <form onSubmit={this.onSubmit}>
                                <FormInputs
                                        ncols={["col-md-12"]}
                                        properties={[
                                            {
                                                type: "text",
                                                bsClass: "form-control",
                                                placeholder: "Name of Health Care Worker",
                                                disabled: true
                                            }
                                        ]}
                                    />
                                <FormInputs
                                    ncols={["col-md-6", "col-md-6"]}
                                    properties={[
                                        {
                                            label: "First name",
                                            name: "firstname",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "First name",
                                            defaultValue: "",
                                            required: true,
                                            value: this.state.firstname,
                                            onChange: this.onChangefirstname
                                        },
                                        {
                                            label: "Last name",
                                            name: "lastname",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Last name",
                                            defaultValue: "",
                                            required: true,
                                            value: this.state.lastname,
                                            onChange: this.onChangelastname
                                        }
                                    ]}
                                />
                                <FormInputs
                                    ncols={["col-md-6", "col-md-6"]}
                                    properties={[
                                        {
                                            label: "Patient NCD Number",
                                            name: "patientId",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "08-05-OA-DFID-0000",
                                            defaultValue: "",
                                            required: true,
                                            value: this.state.patientId,
                                            onChange: this.onChangepatientId

                                        },
                                        {
                                            label: "Patient DFID Study Number",
                                            name: "patientStudyNumber",
                                            bsClass: "form-control",
                                            placeholder: "DFID-0000",
                                            defaultValue: "",
                                            value: this.state.patientStudyNumber,
                                            onChange: this.onChangeyearPatientStudyNumber
                                        }
                                    ]}
                                />
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Gender</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value} onChange={this.onChangegender}>
                                                <option>...</option>
                                                <option value="Male" >MALE</option>
                                                <option value="Female" >FEMALE</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date Of Birth</ControlLabel>
                                            <Datetime
                                                type="date"
                                                inputProps={{ placeholder: "Date Picker" }}
                                                timeFormat={false}
                                                onChange={this.onChangeDateOfBirth}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                               
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Type of Diabetes</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value} onChange={this.onChangeTypeOfDiabetes}>
                                                <option>...</option>
                                                <option value='DM1' >DM 1</option>
                                                <option value='DM2' >DM 2</option>
                                                <option value='Gestational' >Gestational</option>
                                                <option value='Other' >Other</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Year of DM diagnosis</ControlLabel>
                                            <Datetime
                                                type="date"
                                                inputProps={{ placeholder: "Date Picker" }}
                                                timeFormat={false}
                                                onChange={this.onChangeYearOfDmDiagnosis}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <input type="submit" value="Submit" />
                                <div className="clearfix" />
                            </form>
                        }
                    />
                </Col>
            </Row>
        );
    }
}

export default PatientDetailsItem;