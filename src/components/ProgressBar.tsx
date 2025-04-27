import { cn } from "@/lib/utils";

type ProgressBarProps = {
  percentage: number;
  className?: string;
  color?: string;
};

const ProgressBar = ({ percentage, className, color = "#4CAF50" }: ProgressBarProps) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div
        className="h-2.5 rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;