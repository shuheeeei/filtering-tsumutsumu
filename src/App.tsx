import React, {
  useState, useMemo, useEffect, useCallback,
} from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import initialData from './initialData';
import Column from './components/Column';
import { CharactorList } from './components/Charactors/CharactorList';
import { Header } from './components/Header';
import { initialize } from './initialize';

const useStyle = makeStyles(() => createStyles({
  mainContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    padding: '0 8px',
    width: '100%',
    marginTop: '8px',
  },
  flexColumn: {
    flexDirection: 'column',
  },
}));

const App = () => {
  const matches: boolean = useMediaQuery('(max-width:900px)');
  const classes = useStyle();
  console.log(matches, classes.mainContainer);
  const {
    conditions, columns: initColumns, columnOrder,
  } = useMemo(() => initialize(), []);
  const [columns, setColumns] = useState<Columns>(initColumns);
  const [charactors, setCharactors] = useState(initialData.data);
  const [searchConditions, setSearchConditions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onDragEnd = (result: DropResult): void => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) { // column外に移動しないパターン
      const newConditionIds = Array.from(start.conditionIds);
      newConditionIds.splice(source.index, 1);
      newConditionIds.splice(destination.index, 0, draggableId);

      const handledColumns: ColumnContent = columns[finish.id];
      handledColumns.conditionIds = newConditionIds;
      setColumns((prevColumns) => ({
        ...prevColumns, [finish.id]: handledColumns,
      }));
      return;
    }

    const startConditionIds = Array.from(start.conditionIds);
    startConditionIds.splice(source.index, 1);
    const newStart: ColumnContent = {
      ...start,
      conditionIds: startConditionIds,
    };

    const finishConditionIds = Array.from(finish.conditionIds);
    finishConditionIds.splice(destination.index, 0, draggableId);
    const newFinish: ColumnContent = {
      ...finish,
      conditionIds: finishConditionIds,
    };

    setColumns((prevColumns) => ({
      ...prevColumns,
      [start.id]: newStart,
      [finish.id]: newFinish,
    }));
  };

  const searchCharactor = useCallback(async (selectedConditionIds: string[]) => {
    setLoading(true);
    if (selectedConditionIds.length === 0) {
      setCharactors(initialData.data);
      setLoading(false);
      return;
    }
    const result = initialData.data.filter(
      (c) => c.features.filter((f) => selectedConditionIds.includes(f)).length === selectedConditionIds.length,
    );

    setLoading(false);
    setCharactors(result);
  }, [searchConditions]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSearchConditions([...columns['selected-condition-column'].conditionIds]);
  }, [columns]);

  useEffect(() => {
    searchCharactor(searchConditions);
  }, [searchConditions]);

  return (
    <main>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Container className={`${classes.mainContainer} ${matches && classes.flexColumn}`}>
          {columnOrder.map((columnId: string) => {
            const column: ColumnContent = columns[columnId];
            const displayConditions: ConditionContent[] = column.conditionIds.map(
              (conditionId: string) => conditions[conditionId],
            );
            return <Column key={column.id} column={column} conditions={displayConditions} />;
          })}
        </Container>

        <CharactorList charactors={charactors} loading={loading} />

      </DragDropContext>
    </main>
  );
};

export default App;
