interface Props {
  value: number;
}

export const NumberTile = ({ value }: Props): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-10 h-10 border bg-cyan-400">
      {value}
    </div>
  );
};
