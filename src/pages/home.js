import React from 'react';
import withTitle from '../components/HOC/withTitle';

const HomePage = () => (
  <div>
    React and Material-UI template
  </div>
);

export default withTitle(HomePage, 'Home');
