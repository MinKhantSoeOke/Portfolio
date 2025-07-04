import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const Publications = () => {
  const theme = useTheme();
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (index) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateToSentences = (text, sentenceCount = 2) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    return sentences.slice(0, sentenceCount).join(' ');
  };

  const publications = [
    {
      title: 'Cyberattack Resilience of Autonomous Vehicle Sensor Systems: Evaluating RGB vs. Dynamic Vision Sensors in CARLA',
      authors: 'Mustafa Sakhai, Min Khant Soe Oke, Kaung Sithu, Maciej Wielgosz',
      journal: 'Applied Sciences, 2025, 15(13), 7493',
      year: '2025',
      abstract: 'Autonomous vehicles (AVs) rely on a heterogeneous sensor suite of RGB cameras, LiDAR, GPS/IMU, and emerging event-based dynamic vision sensors (DVS) to perceive and navigate complex environments. However, these sensors can be deceived by realistic cyberattacks, undermining safety. In this work, we systematically implement seven attack vectors in the CARLA simulator—salt and pepper noise, event flooding, depth map tampering, LiDAR phantom injection, GPS spoofing, denial of service, and steering bias control—and measure their impact on a state-of-the-art end-to-end driving agent. We then equip each sensor with tailored defenses (e.g., adaptive median filtering for RGB and spatial clustering for DVS) and integrate a unsupervised anomaly detector (EfficientAD from anomalib) trained exclusively on benign data. Our detector achieves clear separation between normal and attacked conditions (mean RGB anomaly scores of 0.00 vs. 0.38; DVS: 0.61 vs. 0.76), yielding over 95% detection accuracy with fewer than 5% false positives. Defense evaluations reveal that GPS spoofing is fully mitigated, whereas RGB- and depth-based attacks still induce 30–45% trajectory drift despite filtering. Notably, our research-focused evaluation of DVS sensors suggests potential intrinsic resilience advantages in high-dynamic-range scenarios, though their asynchronous output necessitates carefully tuned thresholds. These findings underscore the critical role of multi-modal anomaly detection and demonstrate that DVS sensors exhibit greater intrinsic resilience in high-dynamic-range scenarios, suggesting their potential to enhance AV cybersecurity when integrated with conventional sensors.',
      doi: '',
      link: 'https://doi.org/10.3390/app15137493',
      tags: ['Autonomous Vehicles', 'Cybersecurity', 'Dynamic Vision Sensors', 'CARLA'],
    },
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
                      {expandedAbstracts[index] 
                        ? publication.abstract 
                        : `${truncateToSentences(publication.abstract)} `}
                      {!expandedAbstracts[index] && publication.abstract.length > truncateToSentences(publication.abstract).length && (
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => toggleAbstract(index)}
                          sx={{
                            p: 0,
                            minWidth: 'auto',
                            color: theme.palette.primary.main,
                            textTransform: 'none',
                            fontSize: 'inherit',
                            fontStyle: 'normal',
                            verticalAlign: 'baseline',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          See more
                        </Button>
                      )}
                      {expandedAbstracts[index] && (
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => toggleAbstract(index)}
                          sx={{
                            ml: 1,
                            p: 0,
                            minWidth: 'auto',
                            color: theme.palette.primary.main,
                            textTransform: 'none',
                            fontSize: 'inherit',
                            fontStyle: 'normal',
                            verticalAlign: 'baseline',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          See less
                        </Button>
                      )}
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