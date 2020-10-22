import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles(() => createStyles({
  loadingIndicator: {
    width: '48px',
    height: '48px',
    position: 'absolute',
    top: 'calc(50% - 24px)',
    left: 'calc(50% - 24px)',
  },
}));

export const LoadingIndicator: React.FC = () => {
  const classes = useStyle();

  return (
    <Container className={classes.loadingIndicator}>
      <CircularProgress />
    </Container>
  );
};
