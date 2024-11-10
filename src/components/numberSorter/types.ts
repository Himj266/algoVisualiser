export type SortingAlgo = (array: number[]) => Generator<
  {
    array: number[];
    swappedIndices?: number[];
    doneUpto: number;
    currentlyComparing?: number[];
  },
  {
    array: number[];
    swappedIndices?: number[];
    doneUpto: number;
    currentlyComparing?: number[];
  },
  unknown
>;
