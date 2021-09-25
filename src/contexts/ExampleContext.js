import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [someValue, setSomeValue] = useState(true);

  return (
    <ExampleContext.Provider value={[someValue, setSomeValue]}>
      {children}
    </ExampleContext.Provider>
  );
};

ExampleProvider.propTypes = {
  children: PropTypes.number.isRequired,
};
