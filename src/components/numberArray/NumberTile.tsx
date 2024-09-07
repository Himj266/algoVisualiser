interface Props {
  value: number;
  className?: string;
}

export const NumberTile = ({ value, className }: Props): JSX.Element => {
  return (
    <div
      className={`flex justify-center items-center w-14 h-14 border bg-cyan-400 text-slate-800 rounded-sm ${
        className ?? ""
      }`}
    >
      {value}
    </div>
  );
};
