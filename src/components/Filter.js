import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class Filter extends Component {
  render() {
    const actions = this.props.actions;
    let filter = this.props.filter;

    return (
      <Form horizontal>
        <FormGroup>
          <Col sm={10}>
            <FormControl value={filter} id="filterText" type="text" placeholder="Filtro de Nombre" onChange={(event) => actions.filterNameChanged(event.target.value)} />
          </Col>
          <Col sm={2}>
            <Button bsStyle="primary" onClick={(event) => actions.fetchPosts(filter)}>Buscar</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Filter;
