import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Li(props) {
  return (
    <Typography variant={'body1'} gutterBottom component={'li'} {...props} />
  );
}
