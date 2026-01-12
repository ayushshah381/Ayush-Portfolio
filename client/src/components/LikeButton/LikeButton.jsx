import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './LikeButton.css';

const LikeButton = ({ disabled }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Clean Way: Use the variable (which is ...onrender.com)
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

  useEffect(() => {
    // We add the missing endpoint here
    axios.get(`${BASE_URL}/api/likes`)
        .then((response) => {
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        }); 
  }, []);

  const handleLike = () => {
    if (hasLiked || disabled) return;

    setHasLiked(true);

    axios.post(`${BASE_URL}/api/likes`)
        .then(() => console.log("Like recorded"))
        .catch(err => {
          console.error(err);
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