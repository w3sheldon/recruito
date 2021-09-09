import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import BlogCards from '../../components/BlogCards/BlogCards';
import Logos from './Logos';
import { useTitle } from '../../hooks/changePageTitle';
import './Home.css';

export default function Home() {
  useTitle('Home');
  return (
    <Container className="pb-5">
      <div className="info-section hero">
        <Row className="full-height align-content-center align-items-center">
          <Col xs={12} sm={6}>
            <h1 className="mt-5">Start new... Today!</h1>
            <p>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum</p>
          </Col>

          <Col xs={12} sm={6}>
            <img
              className="img-fluid mx-auto"
              src="./images/new-product.png"
              alt="an illustration of a man and a woman each carrying a puzzle piece that fits together"
            />
          </Col>
        </Row>
      </div>

      <div className="info-section">
        <h2 className="text-center mb-5">Lorem ipsum something</h2>
        <Row className="align-content-center align-items-center flex-row-reverse">
          <Col xs={12} sm={6}>
            <h3>New Product, new Story</h3>
            <p>
              Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus
              finibus. Aliquam tempus facilisis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare
              augue aliquam. Donec imperdiet nulla ut placerat molestie. In hendrerit blandit ante facilisis ultrices.
              Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
            </p>
          </Col>

          <Col xs={12} sm={6}>
            <img
              className="img-fluid mx-auto d-none d-sm-block"
              src="./images/start-new.png"
              alt="an illustration of a man and a woman each carrying one big blue puzzle piece"
            />
          </Col>
        </Row>
      </div>

      {/* <Logos /> */}

      <Row>
        <BlogCards className="feature-blogs mt-5" />
        <Col>
          <Link to="/blog" className="recro-btn mx-auto">
            Read more
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
