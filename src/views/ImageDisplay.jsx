
import React from "react";
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { Card } from "components/Card/Card.jsx";
import ReactImageZoom from 'react-image-zoom';
import IM2783RE from "../assets/img/IM2783RE.JPG";

const ImageDisplay = (props) => {
  const propss = { width: 600, height: 500, zoomWidth: 750, img: IM2783RE };

  return (
    <Row>
      <Col md={12}>
        <Col md={12}>
          <Card
            title="Patients Eye Images"
            className="content-center"
            content={
              <>
                <Row>
                  <Col className="col-md-6">
                    <FormGroup controlId="formControlsSelect" >
                      <ControlLabel>Right Eye Image 1</ControlLabel>
                      <ReactImageZoom {...propss} />
                    </FormGroup>
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Scaled Image (Right Eye)</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <FormGroup controlId="formControlsSelect" >
                      <ControlLabel>Right Eye Image 2</ControlLabel>
                      <ReactImageZoom {...propss} />
                    </FormGroup>
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Scaled Image (Right Eye)</ControlLabel>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-6">
                    <FormGroup controlId="formControlsSelect" >
                      <ControlLabel>Left Eye Image 1</ControlLabel>
                      <ReactImageZoom {...propss} />
                    </FormGroup>
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Scaled Image (Left Eye)</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <FormGroup controlId="formControlsSelect" >
                      <ControlLabel>Left Eye Image 2</ControlLabel>
                      <ReactImageZoom {...propss} />
                    </FormGroup>
                  </Col>
                  <Col className="col-md-6">
                    <ControlLabel>Scaled Image (Left Eye)</ControlLabel>
                  </Col>
                </Row>

              </>
            }
          />
        </Col>
      </Col>
    </Row>
  );
}

export default ImageDisplay;