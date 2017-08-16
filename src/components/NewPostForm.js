import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class NewPostForm extends Component {
  render() {
    const actions = this.props.actions;
    let name = this.props.name;
    let description = this.props.description;

    return (
      <Form horizontal>
        <FormGroup>
          <Col sm={5}>
            <FormControl value={name} id="nameText" type="text" placeholder="Nombre" onChange={(event) => actions.newPostNameChanged(event.target.value)} />
          </Col>
          <Col sm={5}>
            <FormControl value={description} id="descriptionText" type="text" placeholder="Descripción" onChange={(event) => actions.newPostDescriptionChanged(event.target.value)} />
          </Col>
          <Col sm={2}>
            <Button bsStyle="primary" onClick={(event) => actions.createPost(name, description)}>Crear</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default NewPostForm;
