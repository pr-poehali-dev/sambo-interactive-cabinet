import { BookOpen, BookText, Video, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Materials = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-sambo-blue rounded-2xl p-6 mb-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Учебные материалы</h1>
        <p className="opacity-90">Изучай теорию и технику самбо в удобном формате</p>
      </div>

      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="theory">Теория</TabsTrigger>
          <TabsTrigger value="technique">Техника бросков</TabsTrigger>
          <TabsTrigger value="video">Видеоматериалы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="theory">
          <div className="grid gap-4 md:grid-cols-2">
            {theoryMaterials.map((item, index) => (
              <MaterialCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technique">
          <div className="grid gap-4 md:grid-cols-2">
            {techniqueMaterials.map((item, index) => (
              <MaterialCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="video">
          <div className="grid gap-4 md:grid-cols-2">
            {videoMaterials.map((item, index) => (
              <MaterialCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

type MaterialCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress?: number;
  color?: string;
};

const MaterialCard = ({ title, description, icon, progress = 0, color = "#2174CF" }: MaterialCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className="text-sambo-blue">{icon}</div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full bg-gray-200 rounded-full h-2 my-2">
          <div
            className="h-2 rounded-full"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Прогресс: {progress}%</span>
          {progress === 100 ? <span className="text-sambo-green">Завершено</span> : null}
        </div>
      </CardContent>
    </Card>
  );
};

// Временные данные для демонстрации
const theoryMaterials = [
  {
    title: "Основы самбо",
    description: "История, правила и основные принципы",
    icon: <BookOpen className="h-5 w-5" />,
    progress: 80,
  },
  {
    title: "Стойки и захваты",
    description: "Основные стойки и техники захватов",
    icon: <BookText className="h-5 w-5" />,
    progress: 60,
  },
  {
    title: "Падения и страховки",
    description: "Безопасные способы падения",
    icon: <BookText className="h-5 w-5" />,
    progress: 40,
  },
];

const techniqueMaterials = [
  {
    title: "Бросок через бедро",
    description: "Техника выполнения и типичные ошибки",
    icon: <FileText className="h-5 w-5" />,
    progress: 100,
    color: "#4CAF50",
  },
  {
    title: "Передняя подножка",
    description: "Подготовка и выполнение приема",
    icon: <FileText className="h-5 w-5" />,
    progress: 50,
  },
  {
    title: "Задняя подножка",
    description: "Техника и практическое применение",
    icon: <FileText className="h-5 w-5" />,
    progress: 10,
  },
];

const videoMaterials = [
  {
    title: "Разминка перед тренировкой",
    description: "Комплекс упражнений для разминки",
    icon: <Video className="h-5 w-5" />,
    progress: 100,
    color: "#4CAF50",
  },
  {
    title: "Техника броска через спину",
    description: "Пошаговая демонстрация броска",
    icon: <Video className="h-5 w-5" />,
    progress: 75,
    color: "#FF8D28",
  },
  {
    title: "Удержания и болевые приемы",
    description: "Основные техники для борьбы лежа",
    icon: <Video className="h-5 w-5" />,
    progress: 30,
  },
];

export default Materials;