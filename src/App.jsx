// src/App.js
import React from 'react';

import './App.css';
import SideBar from './layouts/SideBar';

function App() {
    return (
        <div className="App">
            <SideBar/>
            <div className="content">
                <h1>Welcome to the Responsive Sidebar Example</h1>
                <p>Click the menu icon to open the sidebar.</p>
            </div>
        </div>
    );
}

export default App;
