import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';


import SpaApp from './SpaApp'
import Landing from './pages/landing/Landing'
import Download from './oxap/pages/download/Download'
import Ranking from './oxap/pages/ranking/Ranking'
import WallpaperMarketing from './pages/wallpaper_marketing/WallpaperMarketing'

function App() {
    /*const referrer = window.history.state?.referrer;
    if (window.location.pathname === '/' && referrer !== 'marketing-beta') {
        window.location.href = '/newsletter'
    } else if (window.location.pathname === '/marketing-beta') {
        window.history.pushState({ 'referrer': 'marketing-beta' }, '', '/');
        window.location.href = "/";
    }*/
    return (
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <React.Fragment>
                    <CssBaseline />
                    <Router>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/collection/0xapes-trilogy/twitter-wallpaper-builder" element={<Download />} />
                            <Route
                                path="/collection/0xapes-trilogy/downloads"
                                element={<Navigate to="/collection/0xapes-trilogy/twitter-wallpaper-builder" />}
                            />
                            <Route
                                path="/collection/0xapes-trilogy/wallpapers"
                                element={<Navigate to="/collection/0xapes-trilogy/twitter-wallpaper-builder" />}
                            />

                            <Route path="/collection/0xapes-trilogy/rankings" element={<Ranking />} />

                            <Route path="/twitter-wallpaper-builder/" element={<WallpaperMarketing />} />

                        </Routes>
                    </Router>
                </React.Fragment>
            </React.StrictMode>
        </ThemeProvider>
    );
}

export default App;
