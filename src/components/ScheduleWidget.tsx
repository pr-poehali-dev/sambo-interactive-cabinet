import { Calendar, Check } from "lucide-react";

type ScheduleItem = {
  day: string;
  title: string;
  time?: string;
  completed?: boolean;
};

type ScheduleWidgetProps = {
  items: ScheduleItem[];
};

const ScheduleWidget = ({ items }: ScheduleWidgetProps) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-bold mb-3">Расписание</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-sambo-blue mt-0.5" />
              <div>
                <div className="font-medium">{item.title}</div>
                {item.time && <div className="text-sm text-gray-500">{item.day} – {item.time}</div>}
                {!item.time && <div className="text-sm text-gray-500">{item.day}</div>}
              </div>
            </div>
            {item.completed && (
              <span className="flex items-center text-sambo-green">
                <Check className="h-4 w-4 mr-1" />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleWidget;