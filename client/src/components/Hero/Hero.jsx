import React, { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import './Hero.css';
import LikeButton from "../LikeButton/LikeButton";

const Hero = () => {
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem("portfolio_liked") === "true";
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.title = "Ayush Shah";
  }, []);

  const handleLike = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();

    if (!isLiked) {
      setIsLiked(true);
      setShowPopup(true);
      localStorage.setItem("portfolio_liked", "true");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>
          Hi, I'm Ayush.<br /> I build things for the Web.
        </h1>
        <br />
        <p>
          Software Engineer by profession, Badminton player by passion, and Chess player by obsession. When I'm not shipping code, I'm probably calculating a checkmate or diving for a drop shot...
        </p>
        <Link to="/projects" className="hero-cta">
          View My Work →
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ayush&accessories[]=wayfarers&accessoriesColor=3c4f5c&accessoriesProbability=100&backgroundColor=c0aede&clothesColor=3c4f5c&clothing=hoodie&hairColor=000000&mouth=smile&skinColor[]=edb98a&top=shaggy"
          alt="Ayush"
          className="profile-img"
        />
      </div>

      {createPortal(
        <div className={`like-section ${isLiked ? 'is-liked' : ''}`} onClick={!isLiked ? handleLike : null}>
          <LikeButton disabled={isLiked} />
        </div>,
        document.body
      )}

      {showPopup && createPortal(
        <div className="popup-backdrop" onClick={closePopup}>
          <div className="achievement-popup" onClick={(e) => e.stopPropagation()}>
            <span className="popup-icon">🎉</span>
            <div className="popup-content">
              <strong>Achievement Unlocked</strong>
              <p>You're now officially on my friend list!</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Hero;
