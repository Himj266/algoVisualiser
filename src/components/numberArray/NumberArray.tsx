//components
import { NumberTile } from "./NumberTile";

//types
import { NumberItem } from "./types";

interface Props {
  numberList: NumberItem[];
}

export const NumberArray = ({ numberList }: Props): JSX.Element => {
  return (
    <div>
      {numberList.map(({ value }, index) => (
        <NumberTile key={index} value={value} />
      ))}
    </div>
  );
};
