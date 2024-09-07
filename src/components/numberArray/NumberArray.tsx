//components
import { NumberTile } from "./NumberTile";

//types
import { NumberItem } from "./types";

interface Props {
  numberList: NumberItem[];
}

const INTENT_VS_CLASSNAME = {
  sucess: "bg-green-400",
  warning: "bg-yellow-400",
  default: "",
};

export const NumberArray = ({ numberList }: Props): JSX.Element => {
  return (
    <div className="flex gap-1">
      {numberList.map(({ value, intent }, index) => (
        <NumberTile
          key={index}
          value={value}
          className={intent ? INTENT_VS_CLASSNAME[intent] : undefined}
        />
      ))}
    </div>
  );
};
