import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AGHLogo from '../assets/AGH_logo.png';
import PedestrianDetection from '../assets/pedestrian_detection.jpeg';
import TravelItinerary from '../assets/travel_itinerary.png';
import { useTheme } from '@mui/material/styles';

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'Low-Latency Object Detection in Autonomous Vehicles using DVS and RGB camera',
      period: 'Oct 2024 - Jan 2025',
      organization: 'AGH University of Science and Technology',
      description: 'Conducted research on quality of Dynamic Vision Sensors (DVS) and RGB cameras for low-latency object detection in autonomous vehicles. Developed synthetic AEDAT datasets using v2e software and evaluated their quality through metrics such as Mean Squared Error (MSE), Structural Similarity Index (SSIM), polarity accuracy, and temporal precision. This work improved dataset reliability and enhanced model performance by optimizing event-based data processing pipelines.',
      skills: ['Dataset Quality Verification', 'Event-based Vision', 'Low-latency Object Detection', 'Verification Metrics', 'Data Visualization']
    },
    {
      title: 'Crowdsourced Travel Itinerary Site',
      period: 'Oct 2024 - Dec 2024',
      organization: 'AGH University of Science and Technology',
      description: 'Developed a collaborative platform for travellers to crowdsource and customize travel itineraries. Designed an intuitive user interface using Figma, focusing on seamless user experience for itinerary creation and sharing. Implemented features for real-time itinerary updates, voting, commenting and recommendations. Optimized design for accessibility and cross-device compatibility to enhance engagement and usability.',
      skills: ['Figma', 'UI/UX Design', 'Collaborative Platforms', 'Real-Time Features']
    }
  ];

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: 4,
                      backgroundColor: theme.palette.background.paper,
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
                      },
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: { xs: 3, md: 4 }
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', md: '300px' },
                        height: { xs: '200px', md: '300px' },
                        flexShrink: 0,
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <img
                        src={index === 0 ? PedestrianDetection : TravelItinerary}
                        alt={index === 0 ? "Pedestrian Detection" : "Travel Itinerary"}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{
                        display: 'flex',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        flexDirection: { xs: 'column', md: 'row' },
                        mb: 2,
                        gap: { xs: 1, md: 2 }
                      }}>
                        <motion.div
                          initial={{ scale: 0.8, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          style={{ display: 'inline-block', cursor: 'pointer' }}
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
                              transition: 'all 0.3s ease-in-out',
                              mr: 2
                            }}
                          >
                            <img
                              src={AGHLogo}
                              alt="AGH University Logo"
                              style={{ height: '40px', objectFit: 'contain' }}
                            />
                          </Box>
                        </motion.div>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            color: theme.palette.text.primary
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        component="a"
                        href="https://www.agh.edu.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#1270ce',
                          mb: 1,
                          textDecoration: 'none',
                          '&:hover': {
                            color: '#0d47a1',
                          },
                        }}
                      >
                        {project.organization}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, mb: 3 }}
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.primary, mb: 3, lineHeight: 1.8 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.skills.map((skill, i) => (
                          <Paper
                            key={i}
                            elevation={0}
                            sx={{
                              px: 2,
                              py: 1,
                              borderRadius: 2,
                              backgroundColor: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(0, 0, 0, 0.04)',
                              color: theme.palette.text.secondary,
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                backgroundColor: theme.palette.mode === 'dark'
                                  ? 'rgba(255, 255, 255, 0.15)'
                                  : 'rgba(0, 0, 0, 0.08)',
                                transform: 'translateY(-2px)',
                                boxShadow: theme.palette.mode === 'dark'
                                  ? '0 4px 8px rgba(0,0,0,0.3)'
                                  : '0 4px 8px rgba(0,0,0,0.1)',
                              },
                            }}
                          >
                            <Typography variant="body2">
                              {skill}
                            </Typography>
                          </Paper>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;