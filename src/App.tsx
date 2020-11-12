import React from 'react';
import './App.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import _ from 'lodash';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  {label: 'Upper case', value: 'upper_case'},
  {label: 'Lower case', value: 'lower_case'},
  {label: 'Start case', value: 'start_case'},
  {label: 'Camel case', value: 'camel_case'},
  {label: 'Snake case', value: 'snake_case'},
  {label: 'Kebab case', value: 'kebab_case'}
];

const convertTextByAction = (text: string, action: string): string => {
  let converted = text;

  switch (action) {
    case 'upper_case':
      converted = _.upperCase(converted);
      break;
    case 'lower_case':
      converted = _.lowerCase(converted);
      break;
    case 'start_case':
      converted = _.startCase(converted);
      break;
    case 'camel_case':
      converted = _.camelCase(converted);
      break;
    case 'snake_case':
      converted = _.snakeCase(converted);
      break;
    case 'kebab_case':
      converted = _.kebabCase(converted);
      break;
    default:
  }

  return converted;
};

const App: React.FC = () => {
  console.count('render');

  const [actionValue, setActionValue] = React.useState(options[0].value);

  const [textValue, setTextValue] = React.useState('');

  const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActionValue(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleConvertClick = () => {
    const converted = convertTextByAction(textValue, actionValue);
    setTextValue(converted);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Text Caser</h1>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col xs={12} md={6} className="padding-bottom">
            <Form.Control
              id="text_action"
              aria-label="The action to perform"
              as="select"
              value={actionValue}
              onChange={handleActionChange}
            >
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Form.Control>
          </Col>
          <Col xs={12} md={6} className="padding-bottom">
            <Button variant="primary" block onClick={handleConvertClick}>
              Convert text
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="padding-bottom">
            <Form.Control
              id="text_input"
              aria-label="The text to be converted"
              as="textarea"
              rows={10}
              value={textValue}
              onChange={handleTextChange}
            ></Form.Control>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default App;
