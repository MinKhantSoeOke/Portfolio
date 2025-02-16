import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AGHLogo from '../assets/AGH_logo.png';

const Experience = () => {
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
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      {exp.company === 'AGH University of Science and Technology' && (
                        <img
                          src={AGHLogo}
                          alt="AGH University Logo"
                          style={{ height: '50px', marginRight: '16px', objectFit: 'contain' }}
                        />
                      )}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ color: '#666', mb: 1 }}
                        >
                          {exp.company} {exp.company === 'AGH University of Science and Technology' ? '• Krakow, Poland 🇵🇱' : '• Remote 🌐'}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: '#888' }}
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
                            color: '#333',
                            '&::marker': {
                              color: '#666'
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