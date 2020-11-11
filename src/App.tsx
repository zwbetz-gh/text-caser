import React from 'react';
import './App.css';
import {Container, Row, Col, Form} from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Text Utils</h1>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formAction">
              <Form.Label>Action</Form.Label>
              <Form.Control as="select">
                <option>Uppercase</option>
                <option>Lowercase</option>
                <option>Title case</option>
                {/* More */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Text
              as="textarea"
              style={{
                width: '100%'
              }}
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default App;
