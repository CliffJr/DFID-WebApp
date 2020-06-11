import React from 'react';
import Button from "components/CustomButton/CustomButton.jsx";
import NurseInterpretationItem from './NurseInterpretationItem';
import { Row, Col } from 'react-bootstrap';

export default () => {
  //const [checked, setChecked] = useState('')

  return (
    <>
      <NurseInterpretationItem />
      <Row>
        <Col className="col-md-4 col-md-offset-4">
          <Button bsStyle="info" block pullRight fill type="submit">
            Save
                              </Button>
          <br />
          <br />
        </Col>
      </Row>
    </>
  );
}
