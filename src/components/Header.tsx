import { Typography } from "./atomic/Typography";

export const Header = ({ title }: { title: string }) => {
  return (
    <Typography
      variant="h3"
      className="flex justify-center items-center bg-slate-900 text-slate-200 w-full p-5"
    >
      {title}
    </Typography>
  );
};
