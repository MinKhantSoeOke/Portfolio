import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
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
        background: 'transparent',
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
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)'
                : 'linear-gradient(45deg, #000000 30%, #666666 90%)',
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
              <Grid container spacing={4} direction="column">
                <Grid item xs={12}>
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
                        variant="h4"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Introduction
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                          color: theme.palette.text.secondary,
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
                          color: theme.palette.text.secondary,
                        }}
                      >
                        Passionate about transforming complex datasets into clear, actionable insights that support informed decision-making.
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>

                <Grid item xs={12}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
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
                        variant="h4"
                        sx={{
                          mb: 3,
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Languages
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1.5,
                        }}
                      >
                        {[
                          { lang: 'Burmese', level: 'Native' },
                          { lang: 'English', level: 'Advanced' },
                          { lang: 'Polish', level: 'Beginner' }
                        ].map((item, index) => (
                          <motion.div
                            key={item.lang}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <Paper
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
                                {item.lang} ({item.level})
                              </Typography>
                            </Paper>
                          </motion.div>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
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
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Skills
                  </Typography>

                  {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                    <Box key={category} sx={{ mb: categoryIndex === Object.entries(skills).length - 1 ? 0 : 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.secondary,
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