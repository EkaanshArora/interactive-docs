import React from 'react';
import Typography, {TypographyProps} from '@material-ui/core/Typography';

export default function P(props) {
  return <Typography variant={'body1'} gutterBottom {...props} />;
}
