
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ButtonToast(props) {
    const [showA, setShowA] = useState(false);
  
    const toggleShowA = () => setShowA(!showA);

     
    return (
      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowA} className="mb-2">
           Informacion
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
            
              <strong className="me-auto">{props.info.title}</strong>
    
            </Toast.Header>
            <Toast.Body>

            {props.info.description}
            {props.info.releaseYear}



            </Toast.Body>
          </Toast>
        </Col>

      </Row>
    );
}

export default ButtonToast;