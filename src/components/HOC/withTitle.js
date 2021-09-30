import React from 'react';
import Title from '../Title';

const withTitle = (ComponentChild, title) => (props) => (
  <>
    <Title title={title} />
    <ComponentChild {...props} />
  </>
);

export default withTitle;
