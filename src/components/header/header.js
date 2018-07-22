import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';
console.log(styles);
const Header = ({ title }) => (
  <div className={styles.container}>
    <h1>
      <Link to="/">{title}</Link>
    </h1>

    <nav>
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
  </div>
);

export default Header;
