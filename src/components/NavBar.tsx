
import { Link, useLocation } from "react-router-dom";
import { Home, Award, Book, Video, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Главная", icon: <Home className="h-5 w-5" /> },
    { path: "/progress", label: "Прогресс", icon: <BarChart className="h-5 w-5" /> },
    { path: "/materials", label: "Материалы", icon: <Book className="h-5 w-5" /> },
    { path: "/video-tasks", label: "Видео", icon: <Video className="h-5 w-5" /> },
    { path: "/challenges", label: "Челленджи", icon: <Award className="h-5 w-5" /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="py-4">

          <div className="py-4">
            <Link to="/" className="text-xl font-bold text-gray-800">Самбо-Интерактив</Link>
          </div>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md flex items-center space-x-1",
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-2",
                isActive(item.path)
                  ? "text-blue-700"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
