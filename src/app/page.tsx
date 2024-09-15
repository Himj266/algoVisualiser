import { Typography } from "@/components/atomic/Typography";
import { AlgoCard } from "@/components/algoCard";

const ALGORITHMS = [
  {
    name: "Bubble Sort",
    id: "bubbleSort",
    url: "/bubble-sort",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Typography variant="heroText" className="flex justify-center">
        Algo Visualiser
      </Typography>
      <div>
        {ALGORITHMS.map(({ name, id, url }) => (
          <AlgoCard key={id} name={name} url={url} />
        ))}
      </div>
    </div>
  );
}
