import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DatasetIcon from '@mui/icons-material/Dataset';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MyPhoto from '../assets/my_photo.jpg';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
      setMouseY(e.clientY - rect.top);
    };

    const photoContainer = document.querySelector('.photo-container');
    if (photoContainer) {
      const rect = photoContainer.getBoundingClientRect();
      setMouseX(rect.width / 2);
      setMouseY(rect.height / 2);
      
      photoContainer.addEventListener('mousemove', handleMouseMove);
      return () => photoContainer.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        pt: { xs: 8, md: 0 },
        pb: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          direction={isMobile ? 'column-reverse' : 'row'}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' },
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)'
                    : 'linear-gradient(45deg, #000000 30%, #666666 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Min Khant Soe Oke
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                  fontWeight: 500,
                  mb: 3,
                  color: theme.palette.text.secondary,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Data Analyst & Machine Learning Enthusiast
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  mb: 4,
                  color: theme.palette.text.primary,
                  maxWidth: '600px',
                  lineHeight: 1.8,
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Fresh Computer Science graduate with a passion for transforming data into actionable insights. Specialized in data analysis, machine learning, and creating impactful visualizations.
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap'
                }}
              >
                <Button
                  variant="contained"
                  href="https://github.com/minkhantsoeoke"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                  sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? '#8b949e' : '#24292e',
                    '&:hover': { 
                      backgroundColor: theme.palette.mode === 'dark' ? '#6e7681' : '#2c3238' 
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  href="https://www.linkedin.com/in/minkhantsoeoke/"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': { backgroundColor: theme.palette.primary.dark },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  href="https://www.kaggle.com/alexminkhant"
                  target="_blank"
                  startIcon={<DatasetIcon />}
                  sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.main : '#1fbeff',
                    '&:hover': { 
                      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : '#1ca5e3' 
                    },
                  }}
                >
                  Kaggle
                </Button>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1,
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.text.secondary }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.2))'
                    }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 15
                    }}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    <EmailIcon />
                  </motion.div>
                  alexminkhant007@gmail.com
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.text.secondary }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.2))'
                    }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 15
                    }}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    <PhoneIcon />
                  </motion.div>
                  +48 572 581 007
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{
              mb: { xs: 4, md: 0 }
            }}
          >
            <motion.div
              className="photo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover="hover"
              whileTap="tap"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                perspective: '1000px',
              }}
              variants={{
                hover: { scale: 1.02 },
                tap: { scale: 0.98 }
              }}
            >
              <Box
                component="img"
                src={MyPhoto}
                alt="Min Khant Soe Oke"
                sx={{
                  width: { xs: '280px', sm: '320px', md: '100%' },
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: theme.palette.mode === 'dark'
                    ? (theme) => {
                        const rect = document.querySelector('.photo-container')?.getBoundingClientRect();
                        const centerX = rect ? rect.width / 2 : 0;
                        const centerY = rect ? rect.height / 2 : 0;
                        const shadowX = ((mouseX - centerX) / centerX) * 20;
                        const shadowY = ((mouseY - centerY) / centerY) * 20;
                        
                        return `
                          ${-shadowX}px ${-shadowY}px 80px rgba(255,255,255,0.2),
                          ${shadowX * 0.8}px ${shadowY * 0.8}px 40px rgba(255,255,255,0.15),
                          0 0 60px rgba(255,255,255,0.3),
                          0 25px 50px rgba(0,0,0,0.4)
                        `;
                      }
                    : '0 20px 40px rgba(0,0,0,0.1)',
                  transform: { xs: 'none', md: 'perspective(1000px) rotateY(-5deg)' },
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.1s linear, border 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'none', md: 'perspective(1000px) rotateY(0deg)' },
                    border: theme.palette.mode === 'dark' 
                      ? '2px solid rgba(255,255,255,0.1)' 
                      : 'none',
                  },
                  position: 'relative',
                  zIndex: 1,
                  border: '2px solid transparent',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    background: theme.palette.mode === 'dark'
                      ? (theme) => `radial-gradient(
                          circle at ${mouseX}px ${mouseY}px,
                          rgba(255,255,255,0.3) 0%,
                          transparent 60%
                        )`
                      : 'none',
                    filter: 'blur(30px)',
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.4s ease-in-out, background 0.2s linear',
                  },
                  '&:hover::before': {
                    opacity: theme.palette.mode === 'dark' ? 0.8 : 0,
                    background: theme.palette.mode === 'dark'
                      ? (theme) => `radial-gradient(
                          circle at ${mouseX}px ${mouseY}px,
                          rgba(255,255,255,0.4) 0%,
                          transparent 70%
                        )`
                      : 'none',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;