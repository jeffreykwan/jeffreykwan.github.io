import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ title }) => (
  <nav>
    <label />
    <ul>
      <li>
        <Link to="/travel">Travel</Link>
      </li>
      <li>
        <Link to="/people">People</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
