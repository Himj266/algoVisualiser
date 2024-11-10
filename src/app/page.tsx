import { Typography } from "@/components/atomic/Typography";
import { AlgoCards } from "@/components/algoCards";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-3">
      <Typography
        variant="heroText"
        className="flex justify-center"
        style={{ textShadow: "2px 2px purple" }}
      >
        Algo Visualiser
      </Typography>
      <AlgoCards />
    </div>
  );
}
