import React from 'react';
import { Link } from 'gatsby';

import styles from './nav.module.css';

const Nav = ({ title }) => (
  <nav className={styles.container}>
    <label>Menu</label>
    <ul role="navigation">
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
