import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Services.scss';

const Services = () => (
  <div>
    <div className='services'>
    <Row>
      <Col xs={2}>
      <h3>Faza 1</h3>
      </Col>
      <Col xs={10}>
        <h3>Opracowania przedprojektowe</h3>
        <p>Zastępujemy Inwestora w uzyskaniu:</p>
        <ul>
          <li>mapy do celów informacyjnych i projektowych</li>
          <li>badań geotechnicznych podłoża gruntowego Przygotowujemy:</li>
          <li>wystąpienia o warunki zabudowy i zagospodarowania terenu</li>
          <li>wystąpienia o warunki techniczne dostawy mediów</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
      <h3>Faza 2</h3>
      </Col>
      <Col xs={10}>
        <h3>Studia, analizy, koncepcje</h3>
        <ul>
          <li>analizy możliwości zagospodarowania terenu </li>
          <li>wariantowe koncepcje architektoniczne</li>
          <li>wizualizacje</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col lg={2}>
      <h3>Faza 3</h3>
      </Col>
      <Col lg={10}>
        <h3>Projekty budowlane</h3>
        <ul>
          <li>projekty zagospodarowania terenu</li>
          <li>wielobranzowe projekty budowlane</li>
          <li>niezbedne uzgodnienia i opinie</li>
          <li>wystapienia o pozwolenie na budowe</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col lg={2}>
      <h3>Faza 4</h3>
      </Col>
      <Col lg={10}>
        <h3>Projekty podwykonawcze</h3>
        <ul>
          <li>wielobranżowe projekty wykonawcze</li>
          <li>specyfikacje techniczne wykonywania i odbioru robót</li>
          <li>przedmiary robót</li>
          <li>kosztorysy inwestorskie</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col lg={2}>
      <h3>Faza 5</h3>
      </Col>
      <Col lg={10}>
        <h3>Realizacja</h3>
        <ul>
          <li>na etapie realizacji zapewniamy pelnienie nadzoru autorskiego</li>
        </ul>
      </Col>
    </Row>
    </div>
  </div>
);

export default Services;
