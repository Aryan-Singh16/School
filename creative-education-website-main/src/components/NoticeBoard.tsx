
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Notice, { NoticeProps } from "./Notice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, CalendarClock, Info } from "lucide-react";

// Sample notices data
const sampleNotices: NoticeProps[] = [

  {
    id: "2",
    title: "Admission Open for 2025-26",
    content: "Admissions for the next academic year are now open.",
    date: "Jan 25, 2025",
    category: "announcement"
  },
  
];

const NoticeBoard = () => {
  const [filter, setFilter] = useState<"all" | "event" | "announcement" | "important">("all");
  
  const headingRef = useScrollAnimation();
  const boardRef = useScrollAnimation({ threshold: 0.2 });
  
  const filteredNotices = filter === "all" 
    ? sampleNotices 
    : sampleNotices.filter(notice => notice.category === filter);
  
  return (
    <section id="notices" className="py-16 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 ref={headingRef as React.RefObject<HTMLHeadingElement>} className="section-title mx-auto">
            Notice Board
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information from ST. Maria School.
          </p>
        </div>
        
        <div 
          ref={boardRef as React.RefObject<HTMLDivElement>} 
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6"
        >
          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="announcement" onClick={() => setFilter("announcement")}>
                <Bell className="h-4 w-4 mr-1" />
                Announcements
              </TabsTrigger>
              <TabsTrigger value="event" onClick={() => setFilter("event")}>
                <CalendarClock className="h-4 w-4 mr-1" />
                Events
              </TabsTrigger>
              <TabsTrigger value="important" onClick={() => setFilter("important")}>
                <Info className="h-4 w-4 mr-1" />
                Important
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="space-y-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map(notice => (
                    <Notice key={notice.id} {...notice} />
                  ))
                ) : (
                  <p className="text-center py-8 text-gray-500">No notices available in this category.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="announcement" className="mt-0">
              <div className="space-y-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map(notice => (
                    <Notice key={notice.id} {...notice} />
                  ))
                ) : (
                  <p className="text-center py-8 text-gray-500">No announcements available.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="event" className="mt-0">
              <div className="space-y-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map(notice => (
                    <Notice key={notice.id} {...notice} />
                  ))
                ) : (
                  <p className="text-center py-8 text-gray-500">No events available.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="important" className="mt-0">
              <div className="space-y-3">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map(notice => (
                    <Notice key={notice.id} {...notice} />
                  ))
                ) : (
                  <p className="text-center py-8 text-gray-500">No important notices available.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
