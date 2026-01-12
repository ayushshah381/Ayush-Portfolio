import { FaChessKnight, FaCode, FaHome, FaPlane } from "react-icons/fa";
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import './Navbar.css';

const tabs = [
    { id: '/', label: 'Home', icon: <FaHome />},
    { id: '/projects', label: 'Work', icon: <FaCode />},
    { id: '/chess', label: 'Chess', icon: <FaChessKnight />},
    { id: '/travel', label: 'Travel', icon: <FaPlane />},
];

const Navbar = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
    const location = useLocation();

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <span className="logo-bracket">&lt;</span>
                    Ayush
                    <span className="logo-bracket">/&gt;</span>
                </Link>

                <ul className="nav-list" onMouseLeave={() => setHoveredTab(null)}>
                    {tabs.map((tab) => {
                        const isActive = location.pathname === tab.id;

                        return (
                            <li key={tab.id} style={{ position: 'relative'}}> 
                                <Link
                                    to={tab.id}
                                    className={`nav-item ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setHoveredTab(tab.id)}
                                >
                                    {hoveredTab === tab.id && (
                                        <motion.div 
                                            layoutId="nav-pill"
                                            className="nav-pill"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {isActive && hoveredTab === null && (
                                        <motion.div 
                                            layoutId="nav-pill"
                                            className="nav-pill"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    <span style={{ position: 'relative', zIndex: 2, display:'flex', gap:'6px', alignItems:'center' }}>
                                        {tab.icon} {tab.label}
                                    </span>
                                </Link>
                            </li>
                        )    
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;