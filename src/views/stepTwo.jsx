import React, { Component } from 'react';
import Avatar from 'react-avatar-edit';
import {Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";

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
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }

  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 7168000){
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  render(){

  return (
    <Row>
                     <Col md={12} className="text-center">
                      <Card             
                        title="Patient Eye Images"
                        content={
                          <div>
                              <Row>
                                <Col md={4} mdOffset={2} >       
                                    <Avatar
                                       width={350}
                                       height={350}
                                       imageWidth={420}
                                       imageHeight={420}
                                      label = {"Upload Image 1 (RIGHT-EYE)"}
                                      onCrop={this.onCrop}
                                      onClose={this.onClose}
                                      onBeforeFileLoad={this.onBeforeFileLoad}
                                      src={this.state.src}
                                    />
                                </Col>
                                <Col md={4}>
                                  <Avatar
                                         width={350}
                                         height={350}
                                         imageWidth={420}
                                         imageHeight={420}
                                        label = {"Upload Image 2 (RIGHT-EYE)"}
                                        onCrop={this.onCrop}
                                        onClose={this.onClose}
                                        onBeforeFileLoad={this.onBeforeFileLoad}
                                        src={this.state.src}
                                      />
                                </Col>                
                                </Row>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Row>
                                <Col md={4} mdOffset={2}>
                                  <Avatar
                                        width={350}
                                        height={350}
                                        imageWidth={420}
                                        imageHeight={420}
                                        label = {"Upload Image 3 (LEFT-EYE)"}
                                        onCrop={this.onCrop}
                                        onClose={this.onClose}
                                        onBeforeFileLoad={this.onBeforeFileLoad}
                                        src={this.state.src}
                                      />
                                </Col>
                                <Col md={4}>
                                  <Avatar
                                      width={350}
                                      height={350}
                                      imageWidth={420}
                                      imageHeight={420}
                                      label = {"Upload Image 4 (LEFT-EYE)"}
                                      onCrop={this.onCrop}
                                      onClose={this.onClose}
                                      onBeforeFileLoad={this.onBeforeFileLoad}
                                      src={this.state.src}
                                    />
                                </Col>
                                </Row>
                                <br/>
                          </div>
                        }
                      />
                    </Col>
    </Row>
  )
}
}

export default StepTwo;
