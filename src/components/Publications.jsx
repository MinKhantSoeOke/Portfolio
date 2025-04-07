import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const Publications = () => {
  const theme = useTheme();

  const publications = [
    {
      title: 'Evaluating Synthetic vs. Real Dynamic Vision Sensor Data for SNN-Based Object Detection Classification',
      authors: 'Mustafa Sakhai, Min Khant Soe Oke, Kaung Sithu, Szymon Mazurek, Maciej Wielgosz',
      journal: 'Konferencja Użytkowników Komputerów Dużej Mocy - KUKDM 2025',
      year: '2025',
      abstract: 'This paper compares synthetic and real DVS data with RGB imagery, focusing on detection performance and latency.',
      doi: '',
      link: 'https://events.plgrid.pl/event/70/attachments/143/364/PROCEEDINGS%202025_na%20www%20bez%20notatek.pdf',
      tags: ['Dynamic Vision Sensors', 'Classification', 'Low-Latency Perception', 'Spiking Neural Networks'],
    },
  ];

  return (
    <Box
      id="publications"
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
            Publications
          </Typography>

          <Grid container spacing={4}>
            {publications.map((publication, index) => (
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
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}
                    >
                      {publication.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: theme.palette.text.secondary, mb: 1 }}
                    >
                      {publication.authors}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary, mb: 1 }}
                    >
                      {publication.journal} • {publication.year}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.primary, mb: 2, fontStyle: 'italic' }}
                    >
                      {publication.abstract}
                    </Typography>
                    
                    {publication.link && (
                      <Box sx={{ mb: 3 }}>
                        <Paper
                          component="a"
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          elevation={0}
                          sx={{
                            px: 2,
                            py: 1,
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            background: 'rgba(26, 115, 232, 0.1)',
                            color: '#1a73e8',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              background: 'rgba(26, 115, 232, 0.15)',
                              boxShadow: '0 4px 8px rgba(26, 115, 232, 0.15)'
                            },
                          }}
                        >
                          <Typography variant="button">View Publication</Typography>
                        </Paper>
                      </Box>
                    )}
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {publication.tags.map((tag, i) => (
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
                            {tag}
                          </Typography>
                        </Paper>
                      ))}
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

export default Publications;