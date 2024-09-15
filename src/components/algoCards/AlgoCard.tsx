//components
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../atomic/Typography";

interface Props {
  name: string;
  url: string;
  imageSrc: string;
}

export const AlgoCard = ({ name, url, imageSrc }: Props) => (
  <Link
    href={url}
    className="border border-emerald-700 flex flex-col rounded-md"
  >
    <Image
      src={imageSrc}
      alt={name}
      width={300}
      height={150}
      fill={false}
      className="object-cover rounded-t-md"
      style={{ height: "150px" }}
    />
    <Typography variant="body">{name}</Typography>
  </Link>
);
