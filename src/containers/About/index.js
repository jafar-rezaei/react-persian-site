import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import route from 'helpers/route';

import './style';

const About = () => (
  <main className="about">
    <Helmet title="درباره ما" />
    <h2>درباره ما</h2>
    <p>یک صفحه خالی برای توصیف درباره ما</p>
    <Link to={route('home')}>بازگشت به خانه</Link>
  </main>
);

export default About;
