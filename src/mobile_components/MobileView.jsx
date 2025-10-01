import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from '../desktop_components/NavigationBar';
import About from '../desktop_components/About';
import Contact from '../desktop_components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileHome from './MobileHome';

export default function MobileView() {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
}