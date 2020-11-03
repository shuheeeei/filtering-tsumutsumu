import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle = makeStyles<Theme, {size: 'sm' | 'lg' | undefined}>(() => createStyles({
  loadingIndicator: {
    position: 'absolute',
    width: '20px',
    transform: ({ size }) => (size === 'sm' ? 'translate(-15px, 7.5px)' : 'translateX(-20px)'),
  },
}));

type Props = {
  color?: 'inherit' | 'primary' | 'secondary';
  size?: 'sm' | 'lg',
};

export const LoadingIndicator: React.FC<Props> = (props) => {
  const classes = useStyle({ size: props.size });

  return (
    <Container className={classes.loadingIndicator}>
      <CircularProgress color={props.color} size={props.size === 'sm' ? 30 : 40} />
    </Container>
  );
};

LoadingIndicator.defaultProps = {
  color: 'primary',
  size: 'lg',
};
