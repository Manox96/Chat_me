
import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaComment } from 'react-icons/fa';
import './SideBar.css';

const SideBar = () => {
    const conversations = [
        { id: 1, title: 'Conversation 1' },
        { id: 2, title: 'Conversation 2' },
        { id: 3, title: 'Conversation 3' },
        { id: 4, title: 'Conversation 4' },
    ];

    return (
        <div className="sidebar-container">
            <nav className="sidebar open">
                <div className="conversations">
                    <ul>
                        {conversations.map((conv) => (
                            <li key={conv.id}>
                                <a href="#"><FaComment /> {conv.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default SideBar;
