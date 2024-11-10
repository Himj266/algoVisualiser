//components
import { NumberTile } from "./NumberTile";

//types
import { NumberItem } from "./types";

interface Props {
  numberList: NumberItem[];
}

const INTENT_VS_CLASSNAME = {
  sucess: "!bg-teal-800 !shadow-teal-600",
  warning: "!bg-blue-400 !shadow-blue-300",
  active: "opacity-50",
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
