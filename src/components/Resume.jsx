import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';
import ResumePDF from '../assets/Resume.pdf';

const Resume = () => {
  const theme = useTheme();

  const handleDownload = () => {
    // Create an anchor element and set properties
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Min_Khant_Soe_Oke_Resume.pdf'; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        py: 12,
        pt: { xs: 12, md: 16 }, // Add more padding top to account for navbar
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            My Resume
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{
                backgroundColor: theme.palette.primary.main,
                '&:hover': { backgroundColor: theme.palette.primary.dark },
                px: 3,
                py: 1,
                borderRadius: 2,
              }}
            >
              Download Resume
            </Button>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              height: 'calc(100vh - 250px)',
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component="iframe"
              src={ResumePDF}
              title="Resume"
              sx={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume;