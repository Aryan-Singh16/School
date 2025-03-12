
import { CalendarClock, Info, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  date: string;
  category: "event" | "announcement" | "important";
}

const Notice = ({ title, content, date, category }: NoticeProps) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "event":
        return <CalendarClock className="h-5 w-5 text-blue-500" />;
      case "important":
        return <Info className="h-5 w-5 text-red-500" />;
      case "announcement":
      default:
        return <Bell className="h-5 w-5 text-amber-500" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "event":
        return "bg-blue-50 border-blue-200";
      case "important":
        return "bg-red-50 border-red-200";
      case "announcement":
      default:
        return "bg-amber-50 border-amber-200";
    }
  };

  return (
    <div className={cn("p-4 rounded-lg border shadow-sm mb-3", getCategoryColor())}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {getCategoryIcon()}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Notice;
