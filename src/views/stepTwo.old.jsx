
import Avatar from 'react-avatar-edit';

import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class StepTwo extends Component {

  constructor(props) {
    super(props)
    const src = "";
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }

  onClose() {
    this.setState({ preview: null })
  }

  onCrop(preview) {
    this.setState({ preview })
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 7168000) {
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  render() {

    return (
      <Row>
        <Col md={6} className="text-center">
          <Card
            title="Patient Eye Images"
            content={
              <div>
                <Row>
                  <Col md={4} mdOffset={2} >
                    <Avatar
                      width={250}
                      height={250}
                      imageWidth={260}
                      imageHeight={260}
                      label={"Image 1 (RIGHT-EYE)"}
                      onCrop={this.onCrop}
                      onClose={this.onClose}
                      onBeforeFileLoad={this.onBeforeFileLoad}
                      src={this.state.src}
                    />
                  </Col>
                  <Col md={4}>
                    <Avatar
                      width={250}
                      height={250}
                      imageWidth={260}
                      imageHeight={260}
                      label={"Image 2 (RIGHT-EYE)"}
                      onCrop={this.onCrop}
                      onClose={this.onClose}
                      onBeforeFileLoad={this.onBeforeFileLoad}
                      src={this.state.src}
                    />
                  </Col>
                </Row>

                <br />
                <Row>
                  <Col md={4} mdOffset={2}>
                    <Avatar
                      width={250}
                      height={250}
                      imageWidth={260}
                      imageHeight={250}
                      label={"Image 3 (LEFT-EYE)"}
                      onCrop={this.onCrop}
                      onClose={this.onClose}
                      onBeforeFileLoad={this.onBeforeFileLoad}
                      src={this.state.src}
                    />
                  </Col>
                  <Col md={4}>
                    <Avatar
                      width={250}
                      height={250}
                      imageWidth={260}
                      imageHeight={260}
                      label={"Image 4 (LEFT-EYE)"}
                      onCrop={this.onCrop}
                      onClose={this.onClose}
                      onBeforeFileLoad={this.onBeforeFileLoad}
                      src={this.state.src}
                    />
                  </Col>
                </Row>
                <br />
              </div>
            }
          />
        </Col>
        <Col md={6} className="text-center">
          <Card
            title="Patient Eye Images"
            content={
              <div>
                <Row>

                  <Col className="col-md-12">
                    <FormGroup controlId="formControlsSelect" >

                      <ControlLabel>Signs Of DR</ControlLabel>
                      <FormControl componentClass="select" placeholder="" value={this.value}>
                        <option>...</option>
                        <option value="Yes" >Yes</option>
                        <option value="No" >No</option>
                        <option value="Don't Know">Don't Know</option>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Col className="col-md-12">
                    <FormGroup>
                      <ControlLabel>Date Images Dates</ControlLabel>
                      <Datetime
                        type="date"
                        inputProps={{ placeholder: "Date images taken" }}
                        timeFormat={false}
                        onChange={this.onChangeDateOfBirth}
                      />
                    </FormGroup>
                  </Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Col className="col-md-12">
                    <FormGroup>
                      <ControlLabel>Date of Electronic Referal</ControlLabel>
                      <Datetime
                        type="date"
                        inputProps={{ placeholder: "Date Picker" }}
                        timeFormat={false}
                        onChange={this.onChangeDateOfBirth}
                      />
                    </FormGroup>
                  </Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Col className="col-md-12">
                    <FormGroup
                      controlId="formBasicText"

                    >
                      <ControlLabel>Additional Comments</ControlLabel>
                      <FormControl
                        rows="7"
                        componentClass="textarea"

                        type="textarea"
                        value={this.state.value}
                        placeholder="additional comments"
                        onChange={this.handleChange}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Row>

              </div>
            }
          />
        </Col>
      </Row>
    )
  }
}

export default StepTwo;
