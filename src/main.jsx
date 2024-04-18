import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { Routes } from '@generouted/react-router';
import { routes } from './router'; // Assuming you have exported routes from router.ts

import './index.css';
import App from './App';

// Import the Project component
import Project from './pages/project.jsx';
import Home from './pages/index.jsx';

// Render the routes
createRoot(document.getElementById('root')).render(
  <Routes>
    {/* Define your routes */}
    <Routes.Home path={routes.home} element={<Home />} />
    <Routes.Project path={routes.project} element={<Project />} />
  </Routes>
);
