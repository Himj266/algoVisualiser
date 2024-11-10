import { SortingAlgo } from "@/components/numberSorter/types";

export function* bubbleSorting(array: number[]): ReturnType<SortingAlgo> {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      yield {
        array: array.slice(),
        doneUpto: length - i,
        currentlyComparing: [j, j + 1],
      };

      if (array[j] > array[j + 1]) {
        swapped = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        yield {
          array: array.slice(),
          swappedIndices: [j, j + 1],
          doneUpto: length - i,
        };
      }
    }
    if (!swapped) break;
  }

  return { array, doneUpto: 0 };
}
