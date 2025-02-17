import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import confetti from 'canvas-confetti';

const MyStory = () => {
  const timelineEvents = [
    {
      year: '2025',
      events: [
        {
          period: 'February',
          title: 'Bachelor of Science in Computer Science',
          icon: <SchoolIcon />,
          celebrate: true,
          description: [
            'I graduated from AGH University of Science and Technology in Krakow, Poland, with an overall GPA of 4.5/5.0 and achieved top marks (5.0/5.0) in the Engineer Qualification Examination, solidifying my expertise in data analytics and machine learning.'
          ]
        },
        {
          period: 'January',
          title: 'Education Agency Management',
          icon: <BusinessIcon />,
          description: [
            'Successfully managed and grew the Education Agency, implementing data-driven strategies that improved student success rates and operational efficiency.',
            '✅ Data Collection & Cleaning – Gathered and processed client data for better decision-making.',
            '✅ Performance Tracking – Used data visualization to monitor student progress.',
            '✅ Automation & Efficiency – Developed an Education Agency Management Website to track applications, streamline processes, and provide personalized guidance.'
          ]
        }
      ]
    },
    {
      year: '2024',
      events: [
        {
          period: 'June',
          title: 'Machine Learning Research Intern',
          icon: <SchoolIcon />,
          description: [
            'Joined the Machine Learning Research team at AGH University of Science and Technology in Krakow, Poland, working on cutting-edge autonomous driving technologies.',
            '✅ Algorithm Development – Enhanced dataset quality verification algorithms for autonomous driving models, achieving 15% accuracy improvement.',
            '✅ Process Optimization – Streamlined data engineering workflows with optimized Python scripts, reducing runtime by 30%.',
            '✅ Research Publication – Contributed to a conference paper on machine learning advancements, demonstrating strong research and collaboration skills.',
            '✅ Technical Skills – Applied expertise in Machine Learning, Python, Dataset Quality Verification, and Research Methodologies.'
          ]
        },
        {
          period: 'April',
          title: 'Restaurant Business Transition',
          icon: <RestaurantIcon />,
          description: [
            'Made the strategic decision to sell Fork Tale Asian Fusion Restaurant to fully focus on my career in data analytics and technology.',
            'During the restaurant\'s operation:',
            '✅ Customer Surveys – Conducted research across malls and city centers to tailor menu offerings.',
            '✅ Data Management – Cleaned and analyzed customer feedback & sales data to identify trends.',
            '✅ Decision-Making – Adjusted services and pricing strategies based on insights.',
            '✅ Growth Tracking – Monitored key metrics like foot traffic, customer satisfaction, and revenue.',
            '✅ Staff Optimization – Used Connect Team to track schedules and streamline workforce management.',
            '✅ Tech-Driven Experience – Implemented QR Code Ordering Systems for seamless, contactless ordering.'
          ]
        }
      ]
    },
    {
      year: '2022',
      events: [
        {
          period: 'November',
          title: 'Founder, Asian Fusion Restaurant',
          icon: <RestaurantIcon />,
          description: [
            'Launched Fork Tale Asian Fusion Restaurant in Krakow, Poland, applying data analytics to optimize growth and improve customer experience.'
          ]
        },
        {
          period: 'January',
          title: 'Founder, Education Agency',
          icon: <BusinessIcon />,
          description: [
            'Founded an Education Agency to assist students in pursuing their dreams of studying abroad in Poland, applying data analysis skills in real-world scenarios.'
          ]
        }
      ]
    },
    {
      year: '2021',
      events: [
        {
          period: 'October',
          title: 'University Journey Begins',
          icon: <SchoolIcon />,
          description: [
            'Embarked on an exciting chapter at AGH University of Science and Technology in Krakow, Poland, to study Computer Science. My time at AGH was transformative—I developed a passion for technology, problem-solving, and data-driven insights.'
          ]
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          period: 'March',
          title: 'High School Graduation',
          icon: <SchoolIcon />,
          celebrate: true,
          description: [
            'Graduated from high school, ready to take on new challenges and explore new opportunities in higher education.'
          ]
        }
      ]
    },
    {
      year: '2009',
      events: [
        {
          period: 'June',
          title: 'Formal Education Begins',
          icon: <SchoolIcon />,
          description: [
            'Embarked on my formal education journey, laying the groundwork for academic success and personal growth that would span over a decade of learning and development.'
          ]
        }
      ]
    }
  ];

  const runFireworks = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        pt: { xs: 10, md: 12 },
        pb: 8,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8, lg: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
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
            My Story
          </Typography>

          <Box sx={{ position: 'relative', maxWidth: '1400px', mx: 'auto' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '35px', md: '50%' },
                transform: { xs: 'none', md: 'translateX(-50%)' },
                height: '100%',
                width: '2px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: 0
              }}
            />
            {timelineEvents.map((yearGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    mt: index === 0 ? 0 : 4,
                    fontWeight: 600,
                    color: '#333',
                    pl: { xs: 7, md: 0 },
                    textAlign: { xs: 'left', md: 'right' },
                    pr: { xs: 0, md: 4 },
                    width: { xs: 'auto', md: '45%' }
                  }}
                >
                  {yearGroup.year}
                </Typography>

                {yearGroup.events.map((event, eventIndex) => (
                  <Box
                    key={eventIndex}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: 'space-between',
                      mb: 4,
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: '16px', md: '50%' },
                        transform: { xs: 'none', md: 'translateX(-50%)' },
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        border: '2px solid #000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        color: '#000',
                        mt: { xs: 0, md: 2 }
                      }}
                    >
                      {event.icon}
                    </Box>

                    <Box
                      sx={{
                        width: { xs: 'auto', md: '45%' },
                        textAlign: { xs: 'left', md: 'right' },
                        pr: { xs: 0, md: 4 },
                        pl: { xs: 7, md: 0 },
                        mb: { xs: 2, md: 0 }
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#666',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: { xs: 'flex-start', md: 'flex-end' },
                          gap: 1
                        }}
                      >
                        <ArrowUpwardIcon /> {event.period}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: { xs: 'auto', md: '45%' },
                        pl: { xs: 7, md: 4 }
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 4,
                          background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.6)',
                          boxShadow: '10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-5px)'
                          },
                          cursor: event.celebrate ? 'pointer' : 'auto'
                        }}
                        onClick={() => event.celebrate && runFireworks()}
                      >
                        <Typography
                          variant="h5"
                          sx={{ 
                            fontWeight: 600, 
                            mb: 2,
                            ...(event.celebrate && {
                              background: 'linear-gradient(45deg, #ff6b6b 30%, #ff8e53 90%)',
                              backgroundClip: 'text',
                              textFillColor: 'transparent',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              transition: 'all 0.3s ease'
                            }) 
                          }}
                        >
                          {event.title}
                        </Typography>
                        {event.description.map((paragraph, i) => (
                          <Typography
                            key={i}
                            variant="body1"
                            sx={{
                              color: '#333',
                              lineHeight: 1.8,
                              mb: i < event.description.length - 1 ? 2 : 0,
                              ...(paragraph.startsWith('✅') && {
                                pl: 2
                              })
                            }}
                          >
                            {paragraph}
                          </Typography>
                        ))}
                      </Paper>
                    </Box>
                  </Box>
                ))}
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MyStory;