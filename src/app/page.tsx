import { Typography } from "@/components/atomic/Typography";
import { AlgoCards } from "@/components/algoCards";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-3">
      <Typography variant="heroText" className="flex justify-center">
        Algo Visualiser
      </Typography>
      <div>
        <AlgoCards />
      </div>
    </div>
  );
}
