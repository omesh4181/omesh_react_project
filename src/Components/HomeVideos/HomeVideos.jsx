
import React, { useState, useEffect } from 'react';
import './HomeVideos.css';

const HomeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/videos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="home-videos">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <video controls loop muted>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <div className="buttons">
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
            <a
              href={video.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Location
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeVideos;
