
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChallengeProps {
  title: string;
  onComplete?: () => void;
}

const Challenge = ({ title, onComplete }: ChallengeProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
          <span className="text-yellow-800">₽</span>
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

interface MedalProps {
  type: "progress" | "effort" | "winner";
  title: string;
}

const Medal = ({ type, title }: MedalProps) => {
  const getBgColor = () => {
    switch (type) {
      case "progress": return "from-orange-300 to-orange-500";
      case "effort": return "from-blue-300 to-blue-500";
      case "winner": return "from-yellow-300 to-yellow-500";
    }
  };

  const getMedalColor = () => {
    switch (type) {
      case "progress": return "bg-yellow-400 text-yellow-800";
      case "effort": return "bg-blue-200 text-blue-800";
      case "winner": return "bg-yellow-500 text-yellow-800";
    }
  };

  const getRoman = () => {
    switch (type) {
      case "progress": return "II";
      case "effort": return "II";
      case "winner": return "I";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <div className="w-16 h-4 bg-gradient-to-b rounded-t-sm relative overflow-hidden flex items-center justify-center transform rotate-180 bottom-0 -mb-1.5 z-10">
          <div className={`w-full h-full bg-gradient-to-b ${getBgColor()}`}></div>
        </div>
        <div className={`w-16 h-16 rounded-full ${getMedalColor()} flex items-center justify-center text-xl font-bold border-4 border-yellow-500 relative z-20`}>
          {getRoman()}
        </div>
      </div>
      <p className="text-center font-medium mt-2">{title}</p>
    </div>
  );
};

const Challenges = () => {
  const challenges = [
    { title: "Посещай тренировки всю неделю" },
    { title: "Пригласи друга и получи награду" },
    { title: "Правильный бросок в бою" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Челленджи и награды</h1>
        <p className="text-xl text-gray-600">Зарабатывай баллы и получай медали за активность</p>
        <div className="absolute right-8 top-40 bg-gray-100 px-4 py-1 rounded-full font-semibold">
          80 баллов
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {challenges.map((challenge, index) => (
          <Challenge 
            key={index} 
            title={challenge.title} 
            onComplete={() => console.log(`Completing challenge: ${challenge.title}`)}
          />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Твои награды</h2>
        <div className="flex justify-around">
          <Medal type="progress" title="За прогресс" />
          <Medal type="effort" title="Старания" />
          <Medal type="winner" title="Победитель" />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
