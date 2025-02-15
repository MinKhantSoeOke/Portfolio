import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DatasetIcon from '@mui/icons-material/Dataset';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MyPhoto from '../assets/my_photo.jpg';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
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
                  background: 'linear-gradient(45deg, #000000 30%, #666666 90%)',
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
                  color: '#666',
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
                  color: '#333',
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
                    backgroundColor: '#24292e',
                    '&:hover': { backgroundColor: '#2c3238' },
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
                    backgroundColor: '#0077b5',
                    '&:hover': { backgroundColor: '#006396' },
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
                    backgroundColor: '#20BEFF',
                    '&:hover': { backgroundColor: '#1CA5E3' },
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
                <Typography
                  variant="body1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#666',
                  }}
                >
                  <EmailIcon /> alexminkhant007@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#666',
                  }}
                >
                  <PhoneIcon /> +48 572 581 007
                </Typography>
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transform: { xs: 'none', md: 'perspective(1000px) rotateY(-5deg)' },
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: { xs: 'none', md: 'perspective(1000px) rotateY(0deg)' },
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