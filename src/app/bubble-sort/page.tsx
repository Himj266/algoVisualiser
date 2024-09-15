"use client";

//components
import { NumberSorter } from "@/components/numberSorter/NumberSorter";

//utils
import { bubbleSorting } from "./bubbleSorting";

export default function BubbleSort() {
  return <NumberSorter sortingAlgo={bubbleSorting} algoName="Bubble Sort" />;
}
