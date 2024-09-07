export function* bubbleSorting(array: number[]): Generator<
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
> {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
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
