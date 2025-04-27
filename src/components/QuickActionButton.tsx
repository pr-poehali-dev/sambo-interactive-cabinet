import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type QuickActionButtonProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
};

const QuickActionButton = ({
  to,
  icon,
  label,
  className,
}: QuickActionButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all",
        className
      )}
    >
      <div className="text-sambo-orange flex-shrink-0">{icon}</div>
      <span className="font-medium text-gray-800">{label}</span>
    </Link>
  );
};

export default QuickActionButton;