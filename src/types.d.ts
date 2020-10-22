type ConditionContent = {
  id: string;
  content: string;
};

type Conditions = {
  [conditionId: string]: ConditionContent;
};

type ColumnContent = {
  id: string;
  title: string;
  conditionIds: string[];
};

type Columns = {
  [colmunId: string]: ColumnContent;
};

type ColumnOrder = string[];

type TsumuFeature = Record<string>;

type TsumuType = {
  id: string;
  name: string;
  imgUrl: string;
  features: string[];
};
