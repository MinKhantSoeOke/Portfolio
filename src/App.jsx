import React, { useState, useMemo } from 'react';
import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyStory from './components/MyStory';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box } from '@mui/material';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' ? {
      primary: { main: '#90caf9' },
      secondary: { main: '#f48fb1' },
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#ffffff', secondary: 'rgba(255, 255, 255, 0.7)' }
    } : {
      primary: { main: '#1976d2' },
      secondary: { main: '#9c27b0' },
      background: { default: '#ffffff', paper: '#f8f9fa' },
      text: { primary: '#000000', secondary: '#666666' }
    }),
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MainContent = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('colorMode');
    return savedMode || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        localStorage.setItem('colorMode', newMode);
        return newMode;
      });
    },
  }), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              minHeight: '100vh',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)'
                : 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
            }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/my-story" element={<MyStory />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </HashRouter>
    </ColorModeContext.Provider>
  );
}

export default App
