import React from 'react';

const VideoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">First Aid Instructional Video</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Watch this video for a comprehensive guide on first aid procedures and emergency response techniques.
      </p>
      <div className="w-full flex justify-center">
        <video width="800" height="450" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage; 