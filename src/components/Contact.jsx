import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LaunchIcon from '@mui/icons-material/Launch';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
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
            Contact Me
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
                boxShadow: '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  color: '#333',
                  mb: 4,
                  textAlign: 'center',
                  lineHeight: 1.8,
                }}
              >
                I'm always interested in hearing about new opportunities and collaborating on exciting projects.
                Feel free to reach out through any of the channels below.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1, justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>                      <EmailIcon sx={{ fontSize: 24, color: '#666' }} />                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>                        Email                      </Typography>                    </Box>                    <Typography variant="body1" sx={{ color: '#666', textAlign: 'center' }}>                      alexminkhant007@gmail.com                    </Typography>                    <Button                      variant="outlined"                      startIcon={<LaunchIcon />}                      href="mailto:alexminkhant007@gmail.com"                      sx={{                        borderColor: '#666',                        color: '#666',                        '&:hover': {                          borderColor: '#333',                          color: '#333',                          backgroundColor: 'rgba(0, 0, 0, 0.04)',                        },                      }}                    >                      Send Email                    </Button>                  </Box>                </Box>                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1, justifyContent: 'center' }}>                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>                      <PhoneIcon sx={{ fontSize: 24, color: '#666' }} />                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>                        Phone                      </Typography>                    </Box>                    <Typography variant="body1" sx={{ color: '#666', textAlign: 'center' }}>                      +48 572 581 007                    </Typography>                    <Button                      variant="outlined"                      startIcon={<LaunchIcon />}                      href="tel:+48572581007"                      sx={{                        borderColor: '#666',                        color: '#666',                        '&:hover': {                          borderColor: '#333',                          color: '#333',                          backgroundColor: 'rgba(0, 0, 0, 0.04)',                        },                      }}                    >                      Call Now                    </Button>                  </Box>                </Box>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;