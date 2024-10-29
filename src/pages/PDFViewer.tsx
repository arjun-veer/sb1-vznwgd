import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { ThumbsUp, ThumbsDown, Share2, BookmarkPlus, MessageCircle } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const { id } = useParams();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <Document
              file={`/api/pdfs/${id}`} // This would be your actual PDF URL
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex justify-center"
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
            
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <span className="py-2">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                disabled={pageNumber >= (numPages || 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>
              <select
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="px-2 py-2 border rounded-lg"
              >
                <option value={0.5}>50%</option>
                <option value={0.75}>75%</option>
                <option value={1}>100%</option>
                <option value={1.5}>150%</option>
                <option value={2}>200%</option>
              </select>
            </div>

            <div className="flex justify-between mt-6 pb-4 border-b">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1">
                  <ThumbsUp className="h-6 w-6" />
                  <span>123K</span>
                </button>
                <button className="flex items-center space-x-1">
                  <ThumbsDown className="h-6 w-6" />
                  <span>4K</span>
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2">
                  <Share2 className="h-6 w-6" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2">
                  <BookmarkPlus className="h-6 w-6" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="flex-1">
                <textarea
                  placeholder="Add a comment..."
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                ></textarea>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended PDFs */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Recommended PDFs</h3>
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400`}
                alt="Thumbnail"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h4 className="font-medium">Related PDF Title {item}</h4>
              <p className="text-sm text-gray-600">Author Name</p>
              <p className="text-sm text-gray-500">10K views • 2 days ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}