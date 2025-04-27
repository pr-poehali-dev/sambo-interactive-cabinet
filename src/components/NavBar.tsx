import { Link } from "react-router-dom";
import { Home, Book, Video, MessageSquare, Award, BarChart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-4 sm:relative sm:top-0 sm:py-4 sm:bg-sambo-blue">
      <div className="container mx-auto">
        <div className="flex justify-around sm:justify-center sm:gap-8">
          <NavItem to="/" icon={<Home />} label="Главная" />
          <NavItem to="/materials" icon={<Book />} label="Учебные материалы" />
          <NavItem to="/video-tasks" icon={<Video />} label="Видеозадания" />
          <NavItem to="/progress" icon={<BarChart />} label="Мой прогресс" />
          <NavItem to="/messages" icon={<MessageSquare />} label="Сообщения" />
          <NavItem to="/challenges" icon={<Award />} label="Челленджи" />
        </div>
      </div>
    </nav>
  );
};

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center text-gray-600 hover:text-sambo-blue sm:text-white sm:hover:text-sambo-yellow"
    >
      <span className="h-6 w-6">{icon}</span>
      <span className="mt-1 text-xs hidden sm:block">{label}</span>
    </Link>
  );
};

export default NavBar;