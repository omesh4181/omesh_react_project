import React from 'react';
import './HomeVideos.css';
import  {vid1,vid2}  from '../../assets';

const HomeVideos = () => {
    const videos = [
        {
            id: 1,
            title: 'Beautiful Beach',
            image: 'beach.jpg',
            description: 'Enjoy the serene beauty of the beach.',
            videoUrl: vid1,
            locationUrl: ''
        },
        {
            id: 2,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: vid2,
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 3,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 4,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 5,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 6,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 7,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        {
            id: 8,
            title: 'Mountain Adventure',
            image: 'mountain.jpg',
            description: 'Experience the thrill of mountain climbing.',
            videoUrl: 'https://example.com/mountain-video',
            locationUrl: 'https://example.com/mountain-location'
        },
        // {
        //     id: 9,
        //     title: 'Mountain Adventure',
        //     image: 'mountain.jpg',
        //     description: 'Experience the thrill of mountain climbing.',
        //     videoUrl: 'https://example.com/mountain-video',
        //     locationUrl: 'https://example.com/mountain-location'
        // },
        
    ];

    return (
        <div className="home-videos">
            {videos.map(video => (
                <div key={video.id} className="video-card">
                   <video width="100%" controls loop muted>
                           <source src={video.videoUrl} type="video/mp4" />
                           Your browser does not support the video tag.
                         </video>
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