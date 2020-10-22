import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Condition from './Condition';

const useStyles = makeStyles((matches: boolean) => createStyles({
  column: {
    border: '1px solid lightgrey',
    borderRadius: '4px',
    minWidth: '220px',
    minHeight: '280px',
    margin: '0 0 12px',
    padding: '0',
    userSelect: 'none',
  },
  widthSmall: {
    flex: 0.35,
  },
  widthLarge: {
    flex: 0.65,
    marginRight: '8px',
  },
  title: {
    margin: '4px',
    fontSize: matches ? '0.7rem' : '0.5rem',
  },
  inner: {
    padding: '8px',
    transition: 'background-color 0.2s ease',
    height: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    overflowX: 'scroll',
  },
}));

type Props = {
  column: ColumnContent;
  conditions: ConditionContent[];
};

const Column: React.FC<Props> = (props) => {
  const matches: boolean = useMediaQuery('(min-width:960px)');
  const classes = useStyles(matches);
  const containerClass: string = `${classes.column} ${
    props.column.id === 'all-condition-column'
      ? `${classes.widthLarge}` : classes.widthSmall
  }`;
  return (
    <Container className={containerClass}>
      <Typography className={classes.title} align="center">
        {props.column.title}
      </Typography>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.inner}
          >
            {props.conditions.map((condition, index) => (
              <Condition key={condition.id} index={index} condition={condition} />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;

// TODO: 条件のリセットボタンを作りたい
