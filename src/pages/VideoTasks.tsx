import { Video, Clock, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type VideoTaskStatus = "pending" | "in-progress" | "completed" | "expired";

type VideoTask = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: VideoTaskStatus;
  points: number;
  thumbnail?: string;
};

const VideoTasks = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-sambo-blue rounded-2xl p-6 mb-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Видеозадания</h1>
        <p className="opacity-90">Записывай выполнение упражнений и получай обратную связь от тренера</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {videoTasks.map((task) => (
          <VideoTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

const VideoTaskCard = ({ task }: { task: VideoTask }) => {
  const getStatusBadge = () => {
    switch (task.status) {
      case "pending":
        return <Badge variant="outline" className="gap-1"><Clock className="h-3 w-3" /> Ожидает выполнения</Badge>;
      case "in-progress":
        return <Badge variant="secondary" className="gap-1 bg-amber-100 text-amber-800 hover:bg-amber-100"><Clock className="h-3 w-3" /> В процессе</Badge>;
      case "completed":
        return <Badge variant="secondary" className="gap-1 bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3" /> Выполнено</Badge>;
      case "expired":
        return <Badge variant="destructive" className="gap-1">Просрочено</Badge>;
    }
  };

  const getActionButton = () => {
    switch (task.status) {
      case "pending":
        return <Button className="w-full">Начать выполнение</Button>;
      case "in-progress":
        return <Button className="w-full">Продолжить</Button>;
      case "completed":
        return <Button variant="outline" className="w-full">Посмотреть отзыв</Button>;
      case "expired":
        return <Button variant="outline" className="w-full">Запросить продление</Button>;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40 bg-gray-200">
        {task.thumbnail ? (
          <img 
            src={task.thumbnail} 
            alt={task.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-blue-100">
            <Video className="h-12 w-12 text-sambo-blue opacity-40" />
          </div>
        )}
        {getStatusBadge()}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{task.title}</CardTitle>
          <div className="flex items-center gap-1 text-amber-600">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">{task.points} баллов</span>
          </div>
        </div>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-500">
          Срок выполнения: {task.dueDate}
        </p>
      </CardContent>
      <CardFooter>
        {getActionButton()}
      </CardFooter>
    </Card>
  );
};

// Временные данные для демонстрации
const videoTasks: VideoTask[] = [
  {
    id: "1",
    title: "Бросок через бедро",
    description: "Запиши видео выполнения броска через бедро из разных ракурсов",
    dueDate: "30 апреля 2025",
    status: "completed",
    points: 50,
    thumbnail: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2342&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Передняя подножка",
    description: "Выполни технику передней подножки и запиши на видео",
    dueDate: "5 мая 2025",
    status: "in-progress",
    points: 40,
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Упражнения на растяжку",
    description: "Выполни комплекс упражнений на растяжку",
    dueDate: "15 мая 2025",
    status: "pending",
    points: 30
  },
  {
    id: "4",
    title: "Удержание сбоку",
    description: "Продемонстрируй правильную технику удержания сбоку",
    dueDate: "20 апреля 2025",
    status: "expired",
    points: 35
  }
];

export default VideoTasks;