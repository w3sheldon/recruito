import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/changePageTitle';

function PageNotFound() {
  useTitle('Page not found');
  return (
    <>
      <div className="pagenf">
        <div className="fof">
          <h1>Error 404</h1>
          <div className="d-flex mx-auto justify-content-center mt-3">
            <Link to="/" className="recro-btn me-3">
              Home
            </Link>
            <Link to="/blog" className="recro-btn">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
