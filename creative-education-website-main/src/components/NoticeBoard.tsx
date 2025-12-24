import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Notice, { NoticeProps } from "./Notice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, CalendarClock, Info } from "lucide-react";

// Enhanced notices data with structured content
const sampleNotices: NoticeProps[] = [
  {
    id: "1",
    title: "Admission Open for 2026-27",
    content: "Admissions for the next academic year are now open.",
    highlight: "Special Discount for admission",
    date: "1 Dec, 2025",
    category: "announcement"
  },
  {
    id: "3",
    title: "Affiliation To ICSE (CISCE), New Delhi",
    content: "We are proud to announce that ST. Maria School is now affiliated to ICSE (CISCE), New Delhi.",
    date: "Feb 10, 2025",
    category: "announcement"
  },
  {
  id: "2",
  title: "Christmas Carnival 2025 Celebration",
  content: "ST. Maria School successfully celebrated Christmas Carnival 2025 on 22nd December 2025 within the school campus. The event was filled with joy and enthusiasm, featuring fun activities, games, cultural performances, and beautiful festive decorations.",
  date: "Dec 22, 2025",
  category: "event"
}
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