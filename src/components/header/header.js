import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';
import Nav from './nav';

const Header = ({ title }) => (
  <header className={styles.container}>
    <h1>
      <Link to="/">{title}</Link>
    </h1>

    <Nav />
  </header>
);

export default Header;
