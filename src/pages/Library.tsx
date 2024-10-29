import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark, ThumbsUp } from 'lucide-react';

export default function Library() {
  const categories = [
    { icon: Clock, label: 'History', count: 24 },
    { icon: Bookmark, label: 'Watch Later', count: 12 },
    { icon: ThumbsUp, label: 'Liked PDFs', count: 45 },
  ];

  const recentPDFs = [
    {
      id: 1,
      title: 'Advanced JavaScript Patterns',
      author: 'Tech Academy',
      lastViewed: '2 hours ago',
      progress: 75,
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      author: 'CS Learning',
      lastViewed: '1 day ago',
      progress: 30,
    },
    // Add more items as needed
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <div key={category.label} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <category.icon className="h-6 w-6 text-gray-600" />
              <span className="text-2xl font-bold">{category.count}</span>
            </div>
            <h3 className="text-lg font-semibold">{category.label}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent PDFs</h2>
        </div>
        <div className="divide-y">
          {recentPDFs.map((pdf) => (
            <div key={pdf.id} className="p-6 hover:bg-gray-50">
              <Link to={`/pdf/${pdf.id}`} className="flex items-center space-x-4">
                <div className="w-48 h-24 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{pdf.title}</h3>
                  <p className="text-sm text-gray-600">{pdf.author}</p>
                  <p className="text-sm text-gray-500">Last viewed {pdf.lastViewed}</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${pdf.progress}%` }}
                    ></div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}