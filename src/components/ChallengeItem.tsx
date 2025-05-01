
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChallengeItemProps = {
  title: string;
  rewardPoints: number;
  className?: string;
  onComplete?: () => void;
};

const ChallengeItem = ({ 
  title, 
  rewardPoints, 
  className,
  onComplete 
}: ChallengeItemProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-4 shadow-sm flex items-center justify-between", className)}>
      <div className="bg-sambo-blue text-white rounded-md p-4 flex-1 text-center text-lg font-medium">
        {title}
      </div>
      <div className="flex items-center gap-4 ml-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-yellow-800">₽</span>
          </div>
        </div>
        <Button 
          onClick={onComplete}
          className="bg-blue-50 text-black hover:bg-blue-100"
        >
          Выполнить
        </Button>
      </div>
    </div>
  );
};

export default ChallengeItem;
