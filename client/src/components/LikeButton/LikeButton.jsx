import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './LikeButton.css';

const LikeButton = ({ disabled }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getBackendUrl = () => {
    let url = import.meta.env.VITE_API_URL || 'http://localhost:8081';
    
    // Remove trailing slash if it exists to prevent double-slash errors
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    
    return `${url}/api/likes`;
  };

  const ENDPOINT = getBackendUrl();

  useEffect(() => {
    axios.get(ENDPOINT)
        .then(() => {
            setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
        }); 
  }, []);

  const handleLike = () => {
    if (hasLiked || disabled) return;

    setHasLiked(true);

    axios.post(ENDPOINT)
        .catch(() => {
          setHasLiked(false);
        });
  };

  const isLikedState = hasLiked || disabled;

  return (
    <button
      className={`like-btn ${isLikedState ? 'liked' : ''}`}
      onClick={handleLike}
      disabled={isLoading || isLikedState}
      aria-label="like button"
    >
      <FaHeart />
    </button>
  );
};

export default LikeButton;