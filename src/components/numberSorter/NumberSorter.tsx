"use client";
import { useState, useRef } from "react";

//components
import { NumberArray } from "@/components/numberArray/NumberArray";
import { Header } from "@/components/Header";
import { Button } from "@/components/atomic/Button";

//utils
import { generateArray } from "@/utils/generateArray";

//types
import { SortingAlgo } from "./types";
import { NumberItem } from "@/components/numberArray/types";

interface Props {
  sortingAlgo: SortingAlgo;
  algoName: string;
  sortedAtEndFirst?: boolean;
}

export const NumberSorter = ({
  sortingAlgo,
  algoName,
  sortedAtEndFirst,
}: Props) => {
  const [numberList, setNumberList] = useState<undefined | NumberItem[]>();
  const sortingAlgoRef = useRef<undefined | ReturnType<SortingAlgo>>();

  const generateNewArray = () => {
    const generatedArray = generateArray(5);
    sortingAlgoRef.current = sortingAlgo(generatedArray);
    setNumberList(generatedArray.map((value) => ({ value })));
  };

  const step = () => {
    if (sortingAlgoRef.current) {
      const { array, doneUpto, swappedIndices } =
        sortingAlgoRef.current.next().value;
      const newNumberList = array.map((value, index) => ({
        value,
        intent: sortedAtEndFirst
          ? index >= doneUpto
            ? "sucess"
            : ("default" as NumberItem["intent"])
          : index <= doneUpto
          ? "sucess"
          : "default",
      }));
      if (swappedIndices) {
        newNumberList[swappedIndices[0]].intent = "warning";
        newNumberList[swappedIndices[1]].intent = "warning";
      }
      setNumberList(newNumberList);
    }
  };
  return (
    <div className="h-full w-full">
      <Header title={algoName} />
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-20"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="h-1/2 flex justify-center items-end">
          {numberList ? <NumberArray numberList={numberList} /> : null}
        </div>
        <div className="h-1/2 flex justify-center items-start gap-5">
          <Button onClick={generateNewArray}>Generate Array</Button>
          <Button
            onClick={step}
            disabled={
              sortedAtEndFirst
                ? numberList?.[0].intent === "sucess"
                : numberList?.[numberList.length - 1].intent === "sucess"
            }
          >
            Step
          </Button>
        </div>
      </div>
    </div>
  );
};
