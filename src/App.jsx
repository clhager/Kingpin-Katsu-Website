import _ from 'lodash';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DesktopView from './desktop_components/DesktopView';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import MobileView from './mobile_components/MobileView';
import { useIsMobile } from './useIsMobile';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
}
