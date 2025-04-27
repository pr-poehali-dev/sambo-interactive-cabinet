import { useState } from "react";

type Mood = "great" | "good" | "neutral" | "bad" | "terrible";

type MoodOption = {
  value: Mood;
  emoji: string;
  label: string;
};

const moodOptions: MoodOption[] = [
  { value: "great", emoji: "😁", label: "Отлично" },
  { value: "good", emoji: "🙂", label: "Хорошо" },
  { value: "neutral", emoji: "😐", label: "Нормально" },
  { value: "bad", emoji: "😔", label: "Плохо" },
  { value: "terrible", emoji: "😩", label: "Ужасно" },
];

type MoodTrackerProps = {
  title: string;
};

const MoodTracker = ({ title }: MoodTrackerProps) => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex justify-between">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              selectedMood === option.value
                ? "bg-blue-100 scale-110"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedMood(option.value)}
          >
            <span className="text-2xl">{option.emoji}</span>
            <span className="text-xs mt-1">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;