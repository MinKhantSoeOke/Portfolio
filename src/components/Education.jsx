import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import AGHLogo from '../assets/AGH_logo.png';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const Education = () => {
  const theme = useTheme();

  return (
    <Box
      id="education"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              fontWeight: 700,
              textAlign: 'center',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)'
                : 'linear-gradient(45deg, #000000 30%, #666666 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: theme.palette.background.paper,
                backdropFilter: 'blur(10px)',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '10px 10px 30px rgba(209,209,209,0.05), -10px -10px 30px rgba(255,255,255,0.01)'
                  : '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  style={{ display: 'inline-block', marginRight: '16px', cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0px 4px 12px rgba(0,0,0,0.2)'
                        : 'none',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <img
                      src={AGHLogo}
                      alt="AGH University Logo"
                      style={{ height: '40px', objectFit: 'contain' }}
                    />
                  </Box>
                </motion.div>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  AGH University of Science and Technology
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.secondary, mb: 1 }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.secondary, mb: 1 }}
              >
                October 2021 - February 2025
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.secondary, mb: 2 }}
              >
                Krakow, Poland 🇵🇱
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.primary, mb: 1 }}
                >
                  Overall GPA: 4.5 / 5.0
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.primary, mb: 1 }}
                >
                  Engineer Qualification Examination: 5.0 / 5.0
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.primary }}
                >
                  Diploma Project: Low-Latency Object Detection in Autonomous Vehicles
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;