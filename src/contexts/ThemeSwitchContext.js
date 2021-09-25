import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeSwitchContext = createContext();

export const ThemeSwitchProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeSwitchContext.Provider value={[dark, setDark]}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};

ThemeSwitchProvider.propTypes = {
  children: PropTypes.number.isRequired,
};
