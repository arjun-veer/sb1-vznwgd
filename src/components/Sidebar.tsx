import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Library, History, Clock, ThumbsUp, BookMarked } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Clock, label: 'Watch Later', path: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked PDFs', path: '/liked' },
    { icon: BookMarked, label: 'Bookmarks', path: '/bookmarks' },
  ];

  return (
    <div className="w-64 bg-white h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center p-3 hover:bg-gray-100 rounded-lg mb-1"
          >
            <item.icon className="h-5 w-5 mr-4" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}