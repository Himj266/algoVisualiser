"use client";

//components
import { NumberSorter } from "@/components/numberSorter/NumberSorter";

//utils
import { selectionSorting } from "./selectionSorting";

export default function BubbleSort() {
  return (
    <NumberSorter sortingAlgo={selectionSorting} algoName="Selection Sort" />
  );
}
