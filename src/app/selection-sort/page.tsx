"use client";

//components
import { NumberSorter } from "@/components/numberSorter/NumberSorter";

//utils
import { selectionSorting } from "./selectionSorting";

export default function BubbleSort() {
  return (
    <NumberSorter
      sortingAlgo={selectionSorting}
      algoName="Selection Sort"
      description="Selection sort is a simple, comparison-based sorting algorithm that divides a list into a sorted and unsorted part and repeatedly moves the smallest or largest element from the unsorted part to the sorted part"
      timeComplexity="O(n^2)"
      spaceComplexity="O(1)"
    />
  );
}
