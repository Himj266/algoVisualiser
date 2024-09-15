interface Props {
  name: string;
  url: string;
}

export const AlgoCard = ({ name, url }: Props) => <div>{name}</div>;
