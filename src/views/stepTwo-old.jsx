import React,{useState} from react;

const stepTwo  = () =>{

    return (
        <Row>
            <Col md={12}>
                <Col md={12}>
                    <Card
                        title="Image Transfer"
                        content={
                            <form>
                                <Row>
                                <FormInputs
                                    ncols={["col-md-6", "col-md-6"]}
                                    properties={[
                                        {
                                            label: "Left Eye Image 1",
                                            name: "LeftEyeImage1",
                                            type: "file",
                                            bsClass: "form-control",
                                            placeholder: "Upload Image",
                                            required: true,
                                            value: this.state.leftImage1,
                                            onChange: this.onChangeLeftImage1
                                        },
                                        {
                                            label: "Right Eye Image 1",
                                            name: "RightEyeImage1",
                                            type: "file",
                                            bsClass: "form-control",
                                            placeholder: "Upload Image",
                                            value: this.state.RightImage1,
                                            required: true
                                        }
                                    ]}
                                />
                                <FormInputs
                                    ncols={["col-md-6", "col-md-6"]}
                                    properties={[
                                        {
                                            label: "Left Eye Image 2",
                                            name: "LeftEyeImage2",
                                            type: "file",
                                            bsClass: "form-control",
                                            placeholder: "Upload Image",
                                            required: true,
                                            value: this.state.leftImage2
                                        },
                                        {
                                            label: "Right Eye Image 2",
                                            name: "RightEyeImage2",
                                            type: "file",
                                            bsClass: "form-control",
                                            placeholder: "Upload Image",
                                            required: true,
                                            value: this.state.RightImage2
                                        }
                                    ]}
                                />
                                </Row> 
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Visual Aquity Left</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value}>
                                                <option>...</option>
                                                <option value='Light Perception' >Light Perception</option>
                                                <option value='No Light Perception' >No Light Perception</option>
                                                <option value='Not Done' >Not done</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Visual Aquity Right</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value}>
                                                <option>...</option>
                                                <option value='Light Perception' >Light Perception</option>
                                                <option value='No Light Perception' >No Light Perception</option>
                                                <option value='Not Done' >Not done</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Intra Ocular Pressure Left</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value}>
                                                <option>...</option>
                                                <option value='mmHg' >mmHg</option>
                                                <option value='Not Done' >Not done</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col className="col-md-6">
                                        <FormGroup controlId="formControlsSelect" >
                                            <ControlLabel>Intra Ocular Pressure Right</ControlLabel>
                                            <FormControl componentClass="select" placeholder="" value={this.value}>
                                                <option>...</option>
                                                <option value='mmHg' >mmHg</option>
                                                <option value='Not Done' >Not done</option>
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-12">
                                        <FormGroup
                                            controlId="formBasicText"
                                            validationState={this.getValidationState()}
                                        >
                                            <ControlLabel>Other Occular findings</ControlLabel>
                                            <FormControl
                                             rows="3"
                                             componentClass="textarea"
                        
                                                type="textarea"
                                                value={this.state.value}
                                                placeholder="Other Occular findings"
                                                onChange={this.handleChange}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <input type="submit" value="Submit" />
                                <div className="clearfix" />
                            </form>
                        }
                    />
                </Col>
            </Col>
        </Row>

    );

}