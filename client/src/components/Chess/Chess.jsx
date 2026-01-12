import React, { useEffect, useState } from "react";
import "./Chess.css";
import StatCard from "./StatCard";
import {
  FaBolt,
  FaExternalLinkAlt,
  FaStopwatch,
  FaRocket
} from "react-icons/fa";

const Chess = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const USERNAME = "balor381";

  useEffect(() => {
    const fetchChessStats = async () => {
      try {
        const response = await fetch(
          `https://api.chess.com/pub/player/${USERNAME}/stats`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChessStats();
  }, []);

  if (loading)
    return (
      <div className="chess-loader-container">
        <div className="chess-loading">Blundering pieces soon...</div>
      </div>
    );
  
  if (error)
    return (
      <div className="chess-loader-container">
        <div className="chess-error">⚠️ Oops! Could not load stats.</div>
      </div>
    );

  return (
    <div className="chess-container">
      <div className="chess-header">
        <p>
          Strategy doesn't stop at deployments. Check out my live stats from the battlefield.<br />
          I play casually on{" "}
          <a
            href={`https://www.chess.com/member/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            Chess.com
          </a>.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Rapid"
          type="rapid"
          icon={<FaStopwatch />}
          rating={stats.chess_rapid?.last?.rating}
          best={stats.chess_rapid?.best?.rating}
          record={stats.chess_rapid?.record}
        />

        <StatCard
          title="Blitz"
          type="blitz"
          icon={<FaBolt />}
          rating={stats.chess_blitz?.last?.rating}
          best={stats.chess_blitz?.best?.rating}
          record={stats.chess_blitz?.record}
        />

        <StatCard
          title="Bullet"
          type="bullet"
          icon={<FaRocket />}
          rating={stats.chess_bullet?.last?.rating}
          best={stats.chess_bullet?.best?.rating}
          record={stats.chess_bullet?.record}
        />
      </div>

      <div className="challenge-section">
        <div className="challenge-content">
            <h2>Think you can beat me?</h2>
            <p className="note">I'm always up for a friendly match!</p>
        </div>
        
        <a
          href={`https://www.chess.com/play/online/new?opponent=${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="challenge-btn"
        >
          Challenge Me <FaExternalLinkAlt style={{ fontSize: '0.9rem' }}/>
        </a>
      </div>
    </div>
  );
};

export default Chess;