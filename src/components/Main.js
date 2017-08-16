import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Filter from './Filter';
import List from './List';
import NewPostForm from './NewPostForm';
import '../styles/App.css';

class Main extends Component {
  render() {
    const actions = this.props.actions;
    const state = this.props.posts;

    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>Post-app</PageHeader>
              <Filter {...state} actions={actions} />
              <List {...state} actions={actions} />
              <NewPostForm {...state} actions={actions} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
