//components
import { AlgoCard } from "./AlgoCard";

const ALGORITHMS = [
  {
    name: "Bubble Sort",
    id: "bubbleSort",
    url: "/bubble-sort",
    imageSrc: "/images/bubbleSort.jpg",
  },
  {
    name: "Selection Sort",
    id: "selectionSort",
    url: "/selection-sort",
    imageSrc: "/images/selectionSort.jpg",
  },
];

export const AlgoCards = () => (
  <div className="flex gap-12 p-10">
    {ALGORITHMS.map(({ name, id, url, imageSrc }) => (
      <AlgoCard key={id} name={name} url={url} imageSrc={imageSrc} />
    ))}
  </div>
);