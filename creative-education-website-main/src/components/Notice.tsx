import React from "react";
import { Calendar, Bell, AlertTriangle } from "lucide-react";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  highlight?: string; // New optional prop for highlighted text
  date: string;
  category: "announcement" | "event" | "important";
}

const Notice: React.FC<NoticeProps> = ({ title, content, highlight, date, category }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "announcement":
        return <Bell className="h-4 w-4" />;
      case "event":
        return <Calendar className="h-4 w-4" />;
      case "important":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "announcement":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "event":
        return "text-green-600 bg-green-50 border-green-200";
      case "important":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200";
    }
  };

  return (
    <div className={`border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 ${getCategoryColor()}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {getCategoryIcon()}
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {date}
        </span>
      </div>
      
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-2">{content}</p>
        {highlight && (
          <div className="mt-3 p-3 bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-orange-800 font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              {highlight}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;