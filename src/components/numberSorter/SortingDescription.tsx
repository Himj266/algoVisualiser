import { Typography } from "../atomic/Typography";

interface Props {
  description: string;
  spaceComplexity: string;
  timeComplexity: string;
}

export const SortingDescription = ({
  description,
  spaceComplexity,
  timeComplexity,
}: Props) => {
  return (
    <div className="flex flex-col gap-5 border rounded-lg p-10 border-pink-500 shadow-md shadow-pink-300">
      <Typography variant="body">{description}</Typography>
      <Typography variant="body" className="text-teal-400 flex gap-2">
        Space Complexity:{" "}
        <Typography variant="body">{spaceComplexity}</Typography>
      </Typography>
      <Typography variant="body" className="text-teal-400 flex gap-2">
        Time Complexity:{" "}
        <Typography variant="body">{timeComplexity}</Typography>
      </Typography>
    </div>
  );
};
