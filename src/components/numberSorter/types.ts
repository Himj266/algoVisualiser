export type SortingAlgo = (array: number[]) => Generator<
  {
    array: number[];
    swappedIndices: number[];
    doneUpto: number;
  },
  {
    array: number[];
    swappedIndices?: number[];
    doneUpto: number;
  },
  unknown
>;
