import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class List extends Component {
  render() {
    const actions = this.props.actions;
    const rows = this.props.posts.map((post) =>
      <tr>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td>
          <Button bsStyle="link" onClick={(event) => actions.deletePost(post)}>Eliminar</Button>
        </td>
      </tr>
    );

    return (
      <Table striped bordered condensed>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}

export default List;
