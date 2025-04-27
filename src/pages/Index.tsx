import { Book, Video, MessageSquare, Trophy, Smile } from "lucide-react";
import QuickActionButton from "@/components/QuickActionButton";
import ScheduleWidget from "@/components/ScheduleWidget";

const Index = () => {
  // Временные данные для демонстрации
  const scheduleItems = [
    { day: "Сегодня", title: "Тренировка", time: "17:00", completed: true },
    { day: "Суббота", title: "Дружеская встреча" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-sambo-blue rounded-2xl p-6 relative overflow-hidden mb-6">
        <div className="absolute bottom-0 right-0">
          <img
            src="https://cdn.poehali.dev/files/a3014143-26f9-4c83-894a-3ba124d3e967.png"
            alt="Самбисты"
            className="h-[180px] object-contain"
          />
        </div>
        <div className="max-w-[60%] text-white z-10 relative">
          <h1 className="text-3xl font-bold mb-8">Привет, Гость!</h1>
          <div className="space-y-3">
            <QuickActionButton
              to="/materials"
              icon={<Book size={24} />}
              label="Учебные материалы"
              className="bg-white/90 backdrop-blur"
            />
            <QuickActionButton
              to="/video-tasks"
              icon={<Video size={24} />}
              label="Видеоанализ"
              className="bg-white/90 backdrop-blur"
            />
            <QuickActionButton
              to="/messages"
              icon={<MessageSquare size={24} />}
              label="Сообщения"
              className="bg-white/90 backdrop-blur"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScheduleWidget items={scheduleItems} />
        
        <div className="grid grid-cols-2 gap-4">
          <QuickActionButton
            to="/progress"
            icon={<Trophy size={24} />}
            label="Мой прогресс"
            className="h-full flex-col justify-center items-center bg-sambo-yellow/90"
          />
          <QuickActionButton
            to="/mood"
            icon={<Smile size={24} />}
            label="Настроение"
            className="h-full flex-col justify-center items-center bg-sambo-orange/90"
          />
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold mb-2">Последняя активность</h3>
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
          <div className="text-sambo-blue">
            <Video size={20} />
          </div>
          <p className="text-sm">Бросок от Ивана Иванова на тренировке</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
