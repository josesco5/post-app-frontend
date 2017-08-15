import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Filter from './Filter';
import List from './List';
import NewPostForm from './NewPostForm';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>Post-app</PageHeader>
              <Filter/>
              <List/>
              <NewPostForm/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
