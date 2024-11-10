import { SortingAlgo } from "@/components/numberSorter/types";

export function* selectionSorting(array: number[]): ReturnType<SortingAlgo> {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      yield {
        array: array.slice(),
        currentlyComparing: [minIndex, j],
        doneUpto: i - 1,
      };
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];

      yield {
        array: array.slice(),
        swappedIndices: [i, minIndex],
        doneUpto: i,
      };
    }
  }

  return { array, doneUpto: length - 1 };
}
