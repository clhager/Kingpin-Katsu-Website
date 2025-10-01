import _ from 'lodash';
import Homepage from './Homepage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DesktopView() {
    return <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
}