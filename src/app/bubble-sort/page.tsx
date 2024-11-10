"use client";

//components
import { NumberSorter } from "@/components/numberSorter/NumberSorter";

//utils
import { bubbleSorting } from "./bubbleSorting";

export default function BubbleSort() {
  return (
    <NumberSorter
      sortingAlgo={bubbleSorting}
      algoName="Bubble Sort"
      sortedAtEndFirst
      description="Bubble sort is a sorting algorithm that arranges a list of numbers or other elements in order by repeatedly comparing adjacent elements and swapping them if they are out of order"
      timeComplexity="O(n^2)"
      spaceComplexity="O(1)"
    />
  );
}
