import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const mockPDFs = [
  {
    id: 1,
    title: 'Complete Guide to React Development',
    author: 'Tech Academy',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    views: '125K',
    timestamp: '3 days ago',
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    author: 'AI Research Lab',
    thumbnail: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60',
    views: '89K',
    timestamp: '1 week ago',
  },
  // Add more mock data as needed
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockPDFs.map((pdf) => (
        <div key={pdf.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/pdf/${pdf.id}`}>
            <img
              src={pdf.thumbnail}
              alt={pdf.title}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{pdf.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{pdf.author}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{pdf.views} views</span>
              <span className="mx-2">•</span>
              <span>{pdf.timestamp}</span>
            </div>
            <div className="flex justify-between mt-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ThumbsUp className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Clock className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}