import React from 'react';
import NoticeBoard from './NoticeBoard';
import AnnouncementPopup from './AnnouncementPopup';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Your existing page content */}
      {children}
      
      {/* Notice Board component */}
      <NoticeBoard />
      
      {/* Popup that appears on page visit */}
      <AnnouncementPopup />
    </div>
  );
};

export default Layout;