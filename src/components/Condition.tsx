import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

type Props = {
  condition: ConditionContent;
  index: number;
};

const useStyles = makeStyles(() => createStyles({
  container: {
    border: '1px solid lightgrey',
    borderRadius: '2px',
    width: '7rem',
    fontSize: '0.4em',
    padding: '4px',
    marginBottom: '8px',
    marginRight: '8px',
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    lineHeight: '34px',
  },
  dragging: {
    backgroundColor: '#00B900',
    color: '#fff',
    fontWeight: 'bold',
  },
  handle: {
    width: '15px',
    height: '15px',
    margin: 'auto  8px auto 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '& > span': {
      width: '15px',
      borderBottom: '2px solid #4169E1',
      margin: '0 auto',
    },
  },
}));

const Condition: React.FC<Props> = (props) => {
  const classes = useStyles();
  const draggingStyle = (isDragging: boolean): string => (
    `${classes.container} ${isDragging ? classes.dragging : null}`.trimEnd()
  );
  return (
    <Draggable draggableId={props.condition.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={draggingStyle(snapshot.isDragging)}
        >
          <div className={classes.handle}>
            <span /><span /><span />
          </div>
          {props.condition.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Condition;
