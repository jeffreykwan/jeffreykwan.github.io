import React from 'react';
import { Link } from 'gatsby';

import me from '../images/about.jpg';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <article style={{ textAlign: 'center' }}>
      <img src={me} />
      <p>Hi! Thanks for checking out my work.</p>
    </article>
  </Layout>
);

export default AboutPage;
