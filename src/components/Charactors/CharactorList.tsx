import React, { useRef, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { LoadingIndicator } from '../LoadingIndicator';
import { Charactor } from './Charactor';

type Props = {
  charactors: TsumuType[];
  loading: boolean;
};

const useStyle = makeStyles(() => createStyles({
  container: {
    marginTop: '24px',
    position: 'relative',
    padding: '8px',
  },
  title: {
    fontSize: '0.7rem',
    marginBottom: '8px',
  },
  charactorSection: {
    height: '600px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    padding: '8px',
    overflow: 'scroll',
    border: '1px solid lightgray',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  noResultChar: {
    fontSize: '0.7rem',
    margin: '0 auto',
  },
}));

export const CharactorList: React.FC<Props> = (props) => {
  const classes = useStyle();
  const containerStyle: string = `${classes.charactorSection} ${props.charactors.length < 5 && classes.flexStart}`;
  const loadCount = useRef(0);
  const [loading, setLoading] = useState<boolean>(true);
  const imageLoaded = () => {
    loadCount.current += 1;
    if (loadCount.current >= props.charactors.length) setLoading(false);
  };

  let result: JSX.Element | JSX.Element[];
  if (props.charactors.length !== 0) {
    const charactors = props.charactors.map((charactor) => {
      const img = new Image();
      img.src = charactor.imgUrl;
      img.onload = imageLoaded;
      img.alt = `${charactor.name}の画像`;

      return (
        <Charactor
          key={charactor.id}
          charactor={charactor}
          isLittleChar={props.charactors.length < 5}
          img={img}
        />
      );
    });
    result = !loading ? charactors : <LoadingIndicator />;
  } else {
    result = <Typography variant="h4" className={classes.noResultChar}>ありませんでした...</Typography>;
  }

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} align="center">
        お探しのツムは...
      </Typography>
      <Container className={containerStyle}>
        {result}
      </Container>
    </Container>
  );
};
