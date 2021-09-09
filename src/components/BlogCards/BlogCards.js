/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import BlogCard from '../BlogCard/BlogCard';

function BlogCards({ props, blogsToShow = 4 }) {
  // https://jsonplaceholder.typicode.com/posts

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

  console.log(data);

  return (
    <Container className="blog-cards p-3 p-md-0" {...props}>
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
                <Col key={index} xs={12} sm={4} md={4} lg={3}>
                  <BlogCard title={blog.title} body={blog.body} exact link={blog.id} />
                </Col>
              )
          )
        )}
      </Row>
    </Container>
  );
}

export default BlogCards;
