import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Upload, Bell, User, Menu, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center ml-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">PDFTube</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search PDFs..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/upload" className="p-2 hover:bg-gray-100 rounded-full">
              <Upload className="h-6 w-6" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}