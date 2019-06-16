import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Projects = () => (
  <div>
    <h2>Projects view</h2>
    <Row>
    <Col lg={2}>
      <h3>Industrial</h3>
      <h3>Public</h3>
      <h3>Commerce</h3>
      <h3>Residential</h3>
      <h3>Monuments</h3>
      <h3>Interior design</h3>
    </Col>
    <Col lg={10}>
    </Col>
    </Row>
  </div>
);

export default Projects;
