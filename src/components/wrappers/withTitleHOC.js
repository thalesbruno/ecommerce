import React from 'react';
import Title from '../Title';

const withTitleHOC = (ComponentChild, title) => (props) => (
  <>
    <Title title={title} />
    <ComponentChild {...props} />
  </>
);

export default withTitleHOC;
