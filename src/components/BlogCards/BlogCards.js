/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import BlogCard from '../BlogCard/BlogCard';

function BlogCards({ blogsToShow = 4, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className={`blog-cards p-3 p-md-0 ${props.className || ''}`}>
      <Row>
        {isLoading ? (
          <Col xs={12} className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) : (
          data.map(
            (blog, index) =>
              index < blogsToShow && (
                <Col
                  key={index}
                  xs={12}
                  sm={4}
                  md={4}
                  lg={3}
                  className={`${blogsToShow <= 4 && index >= 2 ? 'd-none d-md-block' : ''}`}
                >
                  <BlogCard title={blog.title} body={blog.body} link={blog.id} />
                </Col>
              )
          )
        )}
      </Row>
    </Container>
  );
}

export default BlogCards;
