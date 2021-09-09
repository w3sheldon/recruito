import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/changePageTitle';
import BlogCards from '../../components/BlogCards/BlogCards';

function BlogPage({ match }) {
  const {
    params: { blogId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [blogId]);

  useTitle(!isLoading ? data.title : 'Blog');

  return (
    <Container className="mt-5 full-height">
      {isLoading ? (
        <Col xs={12} className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      ) : (
        <div className="blog-content">
          <h1 style={{ fontWeight: 'bold', color: 'var(--color-heading)' }}>{data.title}</h1>
          <p className="card-text">{data.body}</p>
          <div className="d-flex mx-auto justify-content-start mt-3">
            <Link to="/" className="recro-btn me-3">
              Home
            </Link>
            <Link to="/blog" className="recro-btn">
              Blog
            </Link>
          </div>
          <h2 className="mt-5" style={{ fontWeight: 'bold', color: 'var(--color-heading)' }}>
            Other blogs
          </h2>
          <BlogCards />
        </div>
      )}
    </Container>
  );
}

export default BlogPage;
