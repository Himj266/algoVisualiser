"use client";
import { useState, useRef } from "react";

//components
import { NumberArray } from "@/components/numberArray/NumberArray";

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
      console.log(newNumberList);
      setNumberList(newNumberList);
    }
  };

  return (
    <div>
      <div>Bubble Sort</div>
      <button onClick={generateNewArray}>Generate An Array</button>
      <button onClick={step} disabled={numberList?.[0].intent === "sucess"}>
        Step
      </button>
      {numberList ? <NumberArray numberList={numberList} /> : null}
    </div>
  );
}
