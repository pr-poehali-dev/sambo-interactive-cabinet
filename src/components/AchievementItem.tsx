import { CheckCircle, Circle, Clock } from "lucide-react";

type AchievementStatus = "completed" | "in-progress" | "not-started";

type AchievementItemProps = {
  icon: React.ReactNode;
  title: string;
  status: AchievementStatus;
};

const AchievementItem = ({ icon, title, status }: AchievementItemProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return (
          <span className="text-sambo-green flex items-center">
            <CheckCircle className="w-5 h-5 mr-1" />
            Выполнено
          </span>
        );
      case "in-progress":
        return (
          <span className="text-sambo-orange flex items-center">
            <Clock className="w-5 h-5 mr-1" />
            В процессе
          </span>
        );
      case "not-started":
        return (
          <span className="text-gray-400 flex items-center">
            <Circle className="w-5 h-5 mr-1" />
          </span>
        );
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="text-sambo-blue">{icon}</div>
        <span className="font-medium">{title}</span>
      </div>
      <div className="text-sm">{getStatusIcon()}</div>
    </div>
  );
};

export default AchievementItem;