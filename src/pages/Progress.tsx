import { Award, Check, Calendar } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import AchievementItem from "@/components/AchievementItem";
import ProgressBar from "@/components/ProgressBar";
import MoodTracker from "@/components/MoodTracker";

const Progress = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-sambo-progressBg rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-20">
          <img
            src="https://cdn.poehali.dev/files/9a19c8bf-94d3-434f-8855-89250af1ee4f.png"
            alt="Самбист фон"
            className="h-[200px] object-contain"
          />
        </div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center mb-2">МОЙ ПРОГРЕСС</h1>
          <p className="text-center mb-4">Привет, Гость! Вот твои успехи! 🚀</p>
          
          <div className="bg-white rounded-xl p-4 shadow-sm text-gray-900">
            <div className="flex items-center">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-sambo-yellow rounded-full text-sm font-medium mb-2">
                  Новичок
                </span>
                <h3 className="font-bold">Общий прогресс</h3>
                <div className="mt-2">
                  <p className="text-sm">
                    Последняя награда:<br />
                    <span className="font-medium">Сертификат за 5 успешных бросков</span>
                  </p>
                  <p className="mt-1 text-sm">
                    Баллы: <span className="font-medium">420 / 500</span><br />
                    до следующего уровня
                  </p>
                </div>
              </div>
              <CircularProgress percentage={60} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <h3 className="font-bold flex items-center mb-3">
          <Award className="h-5 w-5 mr-2 text-sambo-orange" /> Достижения
        </h3>
        <div className="space-y-1 divide-y">
          <AchievementItem 
            icon={<Video className="h-5 w-5" />} 
            title="Видеоанализ броска через бедро" 
            status="completed" 
          />
          <AchievementItem 
            icon={<Award className="h-5 w-5" />} 
            title="Челлендж «Успей за 5 дней!»" 
            status="completed" 
          />
          <AchievementItem 
            icon={<Check className="h-5 w-5" />} 
            title="Упражнение на растяжку" 
            status="in-progress" 
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <h3 className="font-bold mb-3">Учебные блоки</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Теория приёмов: 60%</span>
              <span className="flex items-center">🥋</span>
            </div>
            <ProgressBar percentage={60} />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Видеоуроки: 80%</span>
            </div>
            <ProgressBar percentage={80} color="#FF8D28" />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Тесты: 40% выполнено</span>
            </div>
            <ProgressBar percentage={40} color="#E94F37" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <h3 className="font-bold flex items-center mb-3">
          <Smile className="h-5 w-5 mr-2 text-sambo-orange" /> Мотивация
        </h3>
        <MoodTracker title="До тренировок" />
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">После тренировок</h3>
          <ProgressBar percentage={40} className="mb-4" color="#4CAF50" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold flex items-center mb-3">
          <Calendar className="h-5 w-5 mr-2 text-sambo-blue" /> Расписание
        </h3>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Сегодня:</span> Индивидуальная тренировка в 17:00
          </p>
          <p className="text-sm">
            <span className="font-medium">Суббота:</span> Дружеская встреча
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
