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
            dateTakenHbA1c: ''
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
        this.setState({ dateTakenHbA1c: date._d})
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
            dateTakenHbA1c: this.state.dateTakenHbA1c
        };

        axios.post('http://localhost:4000/dfidDb/add', newPatient)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

            alert('Patient successfully saved. Click Next to proceed');

       // this.state = {
         //   firstname: '',
           // lastname: '',
           // patientId: '',
            //yearOfDiabetes: '',
            //gender: '',
            //visualAcuityLeft: '',
            //visualAcuityRight: '',
            //recentHbA1c: '',
            //dateTakenHbA1c: ''
        //}
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
                                            label: "Patient Identity Number",
                                            name: "patientId",
                                            type: "text",
                                            bsClass: "form-control",
                                            placeholder: "Patience Identity Number",
                                            defaultValue: "",
                                            required: true,
                                            value: this.state.patientId,
                                            onChange: this.onChangepatientId

                                        },
                                        {
                                            label: "Year of Diabetes Diagnosis",
                                            name: "yearOfDiabetes",
                                            bsClass: "form-control",
                                            placeholder: "YEAR",
                                            defaultValue: "",
                                            value: this.state.yearOfDiabetes,
                                            onChange: this.onChangeyearOfDiebetes
                                        }
                                    ]}
                                />
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Gender</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value} onChange={this.onChangegender}>
                                                <option>...</option>
                                                <option value="Female" >FEMALE</option>
                                                <option value="Male" >MALE</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Visual Acuity Left</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value} onChange={this.onChangeVisualAcuityLeft}>
                                                <option>...</option>
                                                <option value='6/6' >6/6</option>
                                                <option value='6/9' >6/9</option>
                                                <option value='6/12' >6/12</option>
                                                <option value='6/18' >6/18</option>
                                                <option value='6/24' >6/24</option>
                                                <option value='6/36' >6/36</option>
                                                <option value='6/60' >6/60</option>
                                                <option value='3/60' >3/60</option>
                                                <option value='1/60' >1/60</option>
                                                <option value='LP' >LP</option>
                                                <option value='NLP' >NLP</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Visual Acuity Right</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value} onChange={this.onChangeVisualAcuityRight}>
                                                <option >...</option>
                                                <option value='6/6' >6/6</option>
                                                <option value='6/9' >6/9</option>
                                                <option value='6/12' >6/12</option>
                                                <option value='6/18' >6/18</option>
                                                <option value='6/24' >6/24</option>
                                                <option value='6/36' >6/36</option>
                                                <option value='6/60' >6/60</option>
                                                <option value='3/60' >3/60</option>
                                                <option value='1/60' >1/60</option>
                                                <option value='LP' >LP</option>
                                                <option value='NLP' >NLP</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup
                                            controlId="formBasicText"

                                        >
                                            <ControlLabel>Recent HbA1c</ControlLabel>
                                            <FormControl
                                                type="text"
                                                placeholder="Recent HbA1c"
                                                value={this.state.recentHbA1c}
                                                onChange={this.onChangeRecentHbA1c}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup>
                                            <ControlLabel>Date taken HbA1c</ControlLabel>
                                            <Datetime
                                                type="date"
                                                inputProps={{ placeholder: "Date Picker" }}
                                                timeFormat={false}
                                                onChange={this.onChangeDateTakenHbA1c}
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