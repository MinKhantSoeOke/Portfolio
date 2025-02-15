import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    'Data Science': [
      'Machine Learning',
      'Data Analysis',
      'Data Modeling',
      'Data Visualization',
      'Data Cleaning',
      'Data Collection',
      'Spiking Neural Network'
    ],
    'Tools & Technologies': [
      'Python (NumPy, Pandas, TensorFlow)',
      'Database (SQL, BigQuery)',
      'Google Sheets',
      'Excel'
    ],
    'Soft Skills': [
      'Decision Making',
      'Problem Solving'
    ]
  };

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        py: 12,
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
              background: 'linear-gradient(45deg, #000000 30%, #666666 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
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
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: '#333',
                    }}
                  >
                    Introduction
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#666',
                      mb: 2,
                    }}
                  >
                    Freshly graduated with a Bachelor of Science in Computer Science, eager to start a career as a Data Analyst. Proficient in Python, SQL, and Data Visualization tools like Tableau and Matplotlib, with a strong foundation in data cleaning, statistical analysis, and creating actionable insights.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#666',
                    }}
                  >
                    Passionate about transforming complex datasets into clear, actionable insights that support informed decision-making.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: '#333',
                    }}
                  >
                    Skills
                  </Typography>

                  {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                    <Box key={category} sx={{ mb: categoryIndex === Object.entries(skills).length - 1 ? 0 : 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#666',
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {category}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1.5,
                        }}
                      >
                        {skillList.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + categoryIndex * 0.2,
                            }}
                            viewport={{ once: true }}
                          >
                            <Paper
                              elevation={0}
                              sx={{
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                color: '#666',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                },
                              }}
                            >
                              <Typography variant="body2">
                                {skill}
                              </Typography>
                            </Paper>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;