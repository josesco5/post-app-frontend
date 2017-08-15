import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class Filter extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col sm={10}>
            <FormControl id="filterText" type="text" placeholder="Filtro de Nombre" />
          </Col>
          <Col sm={2}>
            <Button bsStyle="primary">Buscar</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Filter;
