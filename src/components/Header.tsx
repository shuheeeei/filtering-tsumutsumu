import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(() => createStyles({
  background: {
    background: 'linear-gradient(to right, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228))',
    height: '80px',
    margin: '0',
    width: '100%',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '80px',
    '& > a': {
      textDecoration: 'none',
      color: 'white',
    },
  },
}));

export const Header: React.FC = () => {
  const classes = useStyle();
  return (
    <Container className={classes.background} maxWidth={false}>
      <Typography className={classes.title} align="center">
        <a href="/">ツムツムフィルター</a>
      </Typography>
    </Container>
  );
};
