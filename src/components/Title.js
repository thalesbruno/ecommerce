import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Title = ({ title }) => {
  const defaultTitle = 'Home';

  return (
    <Helmet>
      <title>
        {title || defaultTitle}
        {' | e-Commerce'}
      </title>
    </Helmet>
  );
};

Title.defaultProps = {
  title: undefined,
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
