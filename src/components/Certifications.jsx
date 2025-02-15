import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import GoogleLogo from '../assets/google_logo.png';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'Foundations: Data, Data, Everywhere',
      issueDate: 'January 21, 2025',
      issuer: 'Google',
      grade: '97.12%',
      credentialId: 'HR8FVWFPIOY1',
      link: 'https://www.coursera.org/account/accomplishments/verify/HR8FVWFPIOY1',
      skills: ['Spreadsheet', 'Data Analysis', 'SQL', 'Data Visualization', 'Data Cleansing']
    },
    {
      name: 'Ask Questions to Make Data-Driven Decisions',
      issueDate: 'January 25, 2025',
      issuer: 'Google',
      grade: '97.18%',
      credentialId: 'YNWYXU2JJCI9',
      link: 'https://www.coursera.org/account/accomplishments/verify/YNWYXU2JJCI9',
      skills: ['Decision-Making', 'Spreadsheet', 'Data Analysis', 'Problem Solving', 'Questioning']
    },
    {
      name: 'Prepare Data for Exploration',
      issueDate: 'February 12, 2025',
      issuer: 'Google',
      grade: '100%',
      credentialId: '5FSGXCM8UQKZ',
      link: 'https://www.coursera.org/account/accomplishments/verify/5FSGXCM8UQKZ',
      skills: ['Data Collection', 'Spreadsheet', 'Metadata', 'SQL', 'Data Ethics']
    }
  ];

  return (
    <Box
      id="certifications"
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
            Certifications
          </Typography>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>                      <img
                        src={GoogleLogo}
                        alt="Google Logo"
                        style={{ height: '30px', marginRight: '16px', display: 'block' }}
                      />
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600 }}
                      >
                        {cert.name}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: '#666', mb: 1 }}
                    >
                      {cert.issuer}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#888', mb: 2 }}
                    >
                      Issued: {cert.issueDate}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: '#333', mb: 1 }}
                    >
                      Grade: {cert.grade}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#666', mb: 2 }}
                    >
                      Credential ID: {cert.credentialId}
                    </Typography>
                    {cert.credentialId && (
                      <Box sx={{ mb: 2 }}>
                        <Paper
                          component="button"
                          elevation={0}
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            background: 'rgba(26, 115, 232, 0.1)',
                            color: '#1a73e8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            minWidth: '80px',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              background: 'rgba(26, 115, 232, 0.15)',
                              boxShadow: '0 4px 8px rgba(26, 115, 232, 0.15)'
                            },
                            '&:active': {
                              transform: 'translateY(0)',
                              boxShadow: '0 2px 4px rgba(26, 115, 232, 0.1)'
                            }
                          }}
                          onClick={() => window.open(cert.link, '_blank')}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: '0.5px' }}>
                            VERIFY
                          </Typography>
                          <Box
                            component="span"
                            sx={{
                              display: 'inline-block',
                              width: '8px',
                              height: '8px',
                              borderTop: '1.25px solid currentColor',
                              borderRight: '1.25px solid currentColor',
                              transform: 'rotate(45deg)',
                              position: 'relative',
                              top: '-1px',
                              ml: 1
                            }}
                          />
                        </Paper>
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {cert.skills.map((skill, i) => (
                        <Paper
                          key={i}
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

export default Certifications;