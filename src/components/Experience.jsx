import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AGHLogo from '../assets/AGH_logo.png';
import { useTheme } from '@mui/material/styles';

const Experience = () => {
  const theme = useTheme();

  const experiences = [
    {
      title: 'Machine Learning Research (Intern)',
      company: 'AGH University of Science and Technology',
      period: 'June, 2024 - Present',
      achievements: [
        'Developed cutting-edge algorithms that enhanced dataset quality for autonomous driving models, leading to a 15% increase in model performance accuracy and reducing error rates by 20%.',
        'Collaborated with the Machine Learning team to optimize Python scripts for data engineering processes, resulting in a 30% decrease in runtime and improving overall efficiency.',
        'Contributed significantly to the research team\'s efforts towards publishing a conference paper on key advancements in the field of Machine Learning, showcasing expertise in project management and collaboration.'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Ayar Yadanar Co., Ltd',
      period: 'June, 2022 - December, 2023',
      achievements: [
        'Created and optimized data visualizations using Python and Tableau, enabling stakeholders to make informed decisions.',
        'Analyzed large datasets to identify trends in operational performance, improving process efficiency by 12%.',
        'Built statistical models for resource allocation forecasting, reducing operational costs by 10%.',
        'Streamlined data collection and reporting workflows with SQL and automation tools, enhancing data reliability and cutting processing time by 20%.'
      ]
    },
    {
      title: 'IT Volunteer',
      company: 'NUG',
      period: 'March, 2024 - June, 2024',
      achievements: [
        'Architected a media monitoring tool to facilitate efficient tracking and analysis of media data.',
        'Developed backend features including user registration, login, authentication, and data security protocols, reducing system vulnerabilities by 30%.',
        'Enhanced backend performance using robust coding practices, boosting application scalability by 25% and cutting server response time by 15%.',
        'Collaborated with cross-functional teams to align technical development with organizational goals and user requirements, achieving a 90% user satisfaction rate.'
      ]
    }
  ];

  return (
    <Box
      id="experience"
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
            Experience
          </Typography>

          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      {exp.company === 'AGH University of Science and Technology' && (
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
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}
                        >
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ color: theme.palette.text.secondary, mb: 1 }}
                        >
                          {exp.company} {exp.company === 'AGH University of Science and Technology' ? '• Krakow, Poland 🇵🇱' : '• Remote 🌐'}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="ul" sx={{ m: 0, pl: 2 }}>
                      {exp.achievements.map((achievement, i) => (
                        <Typography
                          component="li"
                          key={i}
                          sx={{ 
                            mb: 1,
                            color: theme.palette.text.primary,
                            '&::marker': {
                              color: theme.palette.text.secondary
                            }
                          }}
                        >
                          {achievement}
                        </Typography>
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

export default Experience;