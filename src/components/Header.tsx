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
    '& > span': {
      cursor: 'pointer',
      color: 'white',
      '&:focus': {
        outline: 'none',
      },
    },
  },
}));

type Props = {
  onTitleClick: () => void;
};

export const Header: React.FC<Props> = (props) => {
  const classes = useStyle();
  return (
    <Container className={classes.background} maxWidth={false}>
      <Typography className={classes.title} align="center">
        <span
          onClick={props.onTitleClick}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
        >
          ツムツムフィルター
        </span>
      </Typography>
    </Container>
  );
};
