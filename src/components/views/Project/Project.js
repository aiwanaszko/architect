import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Project = () => (
  <div>
    <h2>Single project view</h2>
    <Row>
    <Col xs={12}>
      <h2>Title</h2>
    </Col>
    <Col xs={12}>
    <div>Image 1</div>
    </Col>
    <Col xs={6}>
    <div>Image 2</div>
    </Col>
    <Col xs={6}>
    <div>Image 3</div>
    </Col>
    </Row>
  </div>
);

export default Project;
