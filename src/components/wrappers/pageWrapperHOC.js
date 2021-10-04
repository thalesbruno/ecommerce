import React from 'react';
import Box from '@mui/material/Box';
import withTitleHOC from './withTitleHOC';

const pageWrapperHOC = (PageComponentChild, { title, center = false }) => (props) => {
  const PageChildWithTitle = withTitleHOC(PageComponentChild, title);
  return (
    <Box
      sx={{
        flexGrow: center ? 0 : 1,
        padding: '24px 0',
        marginTop: '8vh',
      }}
    >
      <PageChildWithTitle {...props} />
    </Box>
  );
};

export default pageWrapperHOC;
