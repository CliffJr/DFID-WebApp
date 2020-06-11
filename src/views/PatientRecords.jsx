
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";


import Card from "components/Card/Card.jsx";
import TableDisplay from "./TableDisplay";

class PatientRecords extends Component {
  render() {
    return (
      <div className="content text-center" >
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="PATIENTS INFORMATION"
                category=""
                content={
                  <TableDisplay/>       
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PatientRecords;
