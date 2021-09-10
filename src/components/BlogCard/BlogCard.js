import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ title = '', body = '', image = '/images/blog-image.png', link }) {
  return (
    <Card className="my-4 my-md-5 blog-card" as={Link} to={`/blog/${link}`}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
