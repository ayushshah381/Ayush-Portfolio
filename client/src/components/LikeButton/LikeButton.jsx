import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './LikeButton.css';

const LikeButton = ({ disabled }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Helper function to ensure the URL is always correct
  const getBackendUrl = () => {
    let url = import.meta.env.VITE_API_URL || 'http://localhost:8081';
    
    // Remove trailing slash if it exists (fixes the double-slash issue)
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    
    // Always return the full path to the endpoint
    return `${url}/api/likes`;
  };

  const ENDPOINT = getBackendUrl();

  useEffect(() => {
    // Debugging: This will show you exactly what URL is being hit
    console.log("FINAL URL being requested:", ENDPOINT);

    axios.get(ENDPOINT)
        .then((response) => {
            setIsLoading(false);
        })
        .catch(error => {
            console.error("GET Error:", error);
            setIsLoading(false);
        }); 
  }, []);

  const handleLike = () => {
    if (hasLiked || disabled) return;

    setHasLiked(true);

    axios.post(ENDPOINT)
        .then(() => console.log("Like recorded"))
        .catch(err => {
          console.error("POST Error:", err);
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