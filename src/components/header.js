import React from 'react';
import { Link } from 'gatsby';

const Header = ({ title }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        {title}
      </Link>
    </h1>
  </div>
);

export default Header;
