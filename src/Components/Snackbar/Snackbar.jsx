import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Snackbar({show, setShow, title, description}) {

  return (
    <div className={"sjkdjskfjdkfda"} style={{display: "flex", justifyContent: "center" ,alignItems: "center", position: "fixed", top: 0, left: 0, background: "rgba(0,0 ,0,0.3)", zIndex: 9999, width: "100%", height: "100%"}}>
      <Row>
        <Col xs={20}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body style={{whiteSpace: "nowrap"}}>{description}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default Snackbar;