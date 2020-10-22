import initialData from './initialData';

const initializeConditions = (features: TsumuFeature): Conditions => {
  const conditions: Conditions = {};
  Object.keys(features).forEach((featKey: string, index: number) => {
    const id: string = `f-${index}`;
    conditions[id] = { id, content: features[featKey] };
  });
  return conditions;
};

export const initialize = (): {conditions: Conditions, columns: Columns, columnOrder: ColumnOrder } => {
  const conditions: Conditions = initializeConditions(initialData.features);
  const columns: Columns = {
    'all-condition-column': {
      id: 'all-condition-column',
      title: 'ツムの特徴',
      conditionIds: [...Object.keys(conditions)],
    },
    'selected-condition-column': {
      id: 'selected-condition-column',
      title: '探したい条件をここに置いてね',
      conditionIds: [],
    },
  };
  const columnOrder: ColumnOrder = ['all-condition-column', 'selected-condition-column'];

  return {
    conditions,
    columns,
    columnOrder,
  };
  // charactorもここで返すようにする
};
