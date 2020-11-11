import React from 'react';
import './App.css';
import {Container, Row, Col, Form} from 'react-bootstrap';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  {label: 'Upper case', value: 'upper_case'},
  {label: 'Lower case', value: 'lower_case'},
  {label: 'Title case', value: 'title_case'},
  {label: 'Camel case', value: 'camel_case'},
  {label: 'Snake case', value: 'snake_case'},
  {label: 'Kebab case', value: 'kebab_case'}
];

const App: React.FC = () => {
  console.count('render');

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
            <Form.Group controlId="text_action">
              <Form.Label>Select an action</Form.Label>
              <Form.Control as="select">
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="text_input">
              <Form.Label>Input your text</Form.Label>
              <Form.Control as="textarea" rows={10}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default App;
