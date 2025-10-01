import _ from 'lodash';
import React from 'react';
import DesktopView from './desktop_components/DesktopView';
import MobileView from './mobile_components/MobileView';
import { useIsMobile } from './useIsMobile';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const isMobile = useIsMobile();
    return <div>
        {<DesktopView />}
    </div>
}
