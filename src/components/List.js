import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {name: 'Game of Thrones', description: 'Written by George R.R. Martin'},
        {name: 'Hunger Games', description: 'Written by Suzzane Collins'}
      ]
    };
  }

  render() {
    const rows = this.state.posts.map((post) =>
      <tr>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td>
          <Button bsStyle="link">Eliminar</Button>
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
