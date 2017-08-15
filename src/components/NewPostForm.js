import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class NewPostForm extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col sm={5}>
            <FormControl id="nameText" type="text" placeholder="Nombre" />
          </Col>
          <Col sm={5}>
            <FormControl id="descriptionText" type="text" placeholder="Descripción" />
          </Col>
          <Col sm={2}>
            <Button bsStyle="primary">Crear</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default NewPostForm;
