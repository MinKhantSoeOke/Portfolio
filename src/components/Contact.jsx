import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
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
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)'
                : 'linear-gradient(45deg, #000000 30%, #666666 90%)',
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
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))'
                  : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
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
                variant="body1"
                sx={{
                  fontSize: '1.2rem',
                  color: theme.palette.text.primary,
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.2))'
                        }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 300,
                          damping: 15
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <EmailIcon sx={{ fontSize: 24, color: theme.palette.text.primary }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                        Email
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
                      alexminkhant007@gmail.com
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<LaunchIcon />}
                      href="mailto:alexminkhant007@gmail.com"
                      sx={{
                        borderColor: theme.palette.text.primary,
                        color: theme.palette.text.primary,
                        '&:hover': {
                          borderColor: theme.palette.text.secondary,
                          color: theme.palette.text.secondary,
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      Send Email
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1, justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.2))'
                        }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 300,
                          damping: 15
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <PhoneIcon sx={{ fontSize: 24, color: theme.palette.text.primary }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                        Phone
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
                      +48 572 581 007
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<LaunchIcon />}
                      href="tel:+48572581007"
                      sx={{
                        borderColor: theme.palette.text.primary,
                        color: theme.palette.text.primary,
                        '&:hover': {
                          borderColor: theme.palette.text.secondary,
                          color: theme.palette.text.secondary,
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      Call Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;