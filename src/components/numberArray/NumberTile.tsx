interface Props {
  value: number;
  className?: string;
}

export const NumberTile = ({ value, className }: Props): JSX.Element => {
  return (
    <div
      className={`flex justify-center items-center w-10 h-10 border bg-cyan-400 ${
        className ?? ""
      }`}
    >
      {value}
    </div>
  );
};
