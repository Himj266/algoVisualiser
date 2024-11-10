import { Typography } from "../atomic/Typography";

interface Props {
  value: number;
  className?: string;
}

export const NumberTile = ({ value, className }: Props): JSX.Element => {
  return (
    <div
      className={`flex justify-center items-center w-14 h-14 border bg-pink-500 text-slate-800 rounded-sm shadow-md shadow-pink-300 ${
        className ?? ""
      }`}
    >
      <Typography variant="body">{value}</Typography>
    </div>
  );
};
