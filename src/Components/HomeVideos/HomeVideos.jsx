import React from 'react';
import './HomeVideos.css'

const HomeVideos = () => {
    const videos = [
        {
            id: 1,
            title: 'Beautiful Beach',
            image: 'beach.jpg',
            description: 'Enjoy the serene beauty of the beach.',
            videoUrl: 'https://example.com/beach-video',
            locationUrl: 'https://example.com/beach-location'
        },
        {
            id: 2,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 3,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        }
    ];

    return (
        <div className="home-videos">
            {videos.map(video => (
                <div key={video.id} className="video-card">
                    <img src={video.image} alt={video.title} className="video-image" />
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <div className="buttons">
                        <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="btn">View</a>
                        <a href={video.locationUrl} target="_blank" rel="noopener noreferrer" className="btn">Location</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeVideos;