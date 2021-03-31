import React from 'react';
import Typography from '@material-ui/core/Typography';

const H1 = (props) => {
  return (
    <Typography style={{fontWeight:'600'}} gutterBottom variant={'h1'} {...props} />
  );
};

export default H1;
