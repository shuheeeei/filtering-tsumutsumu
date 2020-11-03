import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LoadingIndicator } from '../LoadingIndicator';

type Props = {
  charactor: TsumuType;
  isLittleChar: boolean;
};

const useStyles = makeStyles(() => createStyles({
  card: {
    width: '4.5rem',
    height: 86,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#4169E1',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: '#0000cd',
    },
  },
  cardContent: {
    fontSize: '0.4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    '& > img': {
      borderRadius: 4,
      border: '2px solid #fff',
      height: 40,
      width: 40,
      marginBottom: 4,
    },
  },
  fontSm: {
    fontSize: '0.3rem',
  },
  marginR8: {
    marginRight: '8px',
  },
}));

export const Charactor: React.FC<Props> = React.memo((props) => {
  const classes = useStyles();
  const cardStyle: string = `${classes.cardContent} ${props.charactor.name.length > 7 && classes.fontSm}`;
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Button
      variant="outlined"
      className={`${classes.card} ${props.isLittleChar && classes.marginR8}`}
    >
      <section className={cardStyle}>
        {!loaded && <LoadingIndicator color="inherit" size="sm" />}
        <img src={props.charactor.imgUrl} alt={`${props.charactor.name}`} onLoad={() => { setLoaded(true); }} />
        {props.charactor.name}
      </section>
    </Button>
  );
});
