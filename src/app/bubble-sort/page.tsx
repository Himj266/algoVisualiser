"use client";
import { useState, useRef } from "react";

//components
import { NumberArray } from "@/components/numberArray/NumberArray";
import { Header } from "@/components/Header";
import { Button } from "@/components/atomic/Button";

//utils
import { generateArray } from "@/utils/generateArray";
import { bubbleSorting } from "./bubbleSorting";

//types
import { NumberItem } from "@/components/numberArray/types";

export default function BubbleSort() {
  const [numberList, setNumberList] = useState<undefined | NumberItem[]>();
  const bubbleSorterRef = useRef<
    undefined | ReturnType<typeof bubbleSorting>
  >();

  const generateNewArray = () => {
    const generatedArray = generateArray(5);
    bubbleSorterRef.current = bubbleSorting(generatedArray);
    setNumberList(generatedArray.map((value) => ({ value })));
  };

  const step = () => {
    if (bubbleSorterRef.current) {
      const { array, doneUpto, swappedIndices } =
        bubbleSorterRef.current.next().value;

      const newNumberList = array.map((value, index) => ({
        value,
        intent:
          index >= doneUpto ? "sucess" : ("default" as NumberItem["intent"]),
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
      <Header title="Bubble Sort" />
      <div
        className="h-full w-full flex flex-col items-center justify-center gap-20"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="h-1/2 flex justify-center items-end">
          {numberList ? <NumberArray numberList={numberList} /> : null}
        </div>
        <div className="h-1/2 flex justify-center items-start gap-5">
          <Button onClick={generateNewArray}>Generate Array</Button>
          <Button onClick={step} disabled={numberList?.[0].intent === "sucess"}>
            Step
          </Button>
        </div>
      </div>
    </div>
  );
}
