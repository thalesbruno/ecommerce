import React from 'react';
import PropTypes from 'prop-types';
import MuiLink from '@mui/material/Link';

const Link = ({ children, ...props }) => (
  <MuiLink
    color="primary"
    underline="none"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </MuiLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Link;
