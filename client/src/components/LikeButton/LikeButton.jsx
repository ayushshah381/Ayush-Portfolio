import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './LikeButton.css';

const LikeButton = ({ disabled }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // NUCLEAR OPTION: Hardcoding the full backend URL for testing.
  // This guarantees we are hitting the right endpoint.
  const FULL_URL = 'https://portfolio-backend-552v.onrender.com/api/likes';

  useEffect(() => {
    console.log("Fetching likes from:", FULL_URL); // Debug log

    axios.get(FULL_URL)
        .then((response) => {
            // Check what data we actually get
            console.log("Data received:", response.data); 
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

    axios.post(FULL_URL)
        .then(() => console.log("Like recorded successfully"))
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