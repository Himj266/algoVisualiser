import Link from "next/link";
import { Typography } from "./atomic/Typography";
import { MdHome } from "react-icons/md";

export const Header = ({ title }: { title: string }) => {
  return (
    <div className="text-slate-200 relative w-full p-5 flex justify-center items-center border-b-purple-700 border-b">
      <Link href="./" className="absolute left-0 px-5">
        <MdHome size={30} />
      </Link>
      <Typography variant="h3">{title}</Typography>
    </div>
  );
};
