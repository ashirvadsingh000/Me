// Gaming.jsx

import React from 'react';

const photos = [
  { id: 1, url: 'https://example.com/photo1.jpg', title: 'Photo 1' },
  { id: 2, url: 'https://example.com/photo2.jpg', title: 'Photo 2' },
  { id: 3, url: 'https://example.com/photo3.jpg', title: 'Photo 3' },
  // Add more photos as needed
];

const Gaming = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Photo Album</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{photo.title}</h2>
                {/* You can add more details like date, location, etc. */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;
