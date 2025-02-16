import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import AGHLogo from '../assets/AGH_logo.png';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        py: 12,
      }}
    >
      <Container maxWidth="md">
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
              background: 'linear-gradient(45deg, #000000 30%, #666666 90%)',
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
                background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '15px 15px 30px #d1d1d1, -15px -15px 30px #ffffff',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                  src={AGHLogo}
                  alt="AGH University Logo"
                  style={{ height: '50px', marginRight: '16px' }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600 }}
                >
                  AGH University of Science and Technology
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ color: '#666', mb: 1 }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#888', mb: 1 }}
              >
                October 2021 - February 2025
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#888', mb: 2 }}
              >
                Krakow, Poland 🇵🇱
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ color: '#333', mb: 1 }}
                >
                  Overall GPA: 4.5 / 5.0
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#333', mb: 1 }}
                >
                  Engineer Qualification Examination: 5.0 / 5.0
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#333' }}
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