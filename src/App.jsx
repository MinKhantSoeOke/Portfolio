import React from 'react';
import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyStory from './components/MyStory';

const theme = createTheme({
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
  return (
    <Router basename="/Portfolio">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/my-story" element={<MyStory />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App
