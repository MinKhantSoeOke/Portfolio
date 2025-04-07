import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink, Link } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { ColorModeContext } from '../App';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const scrollToElement = () => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // First attempt after a short delay
      const initialTimeout = setTimeout(() => {
        if (!scrollToElement()) {
          // If first attempt fails, try again after a longer delay
          const retryTimeout = setTimeout(() => {
            scrollToElement();
          }, 500);
          return () => clearTimeout(retryTimeout);
        }
      }, 100);

      return () => clearTimeout(initialTimeout);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'My Story', path: '/my-story' },
    { title: 'About', id: 'about' },
    { title: 'Experience', id: 'experience' },
    { title: 'Education', id: 'education' },
    { title: 'Publications', id: 'publications' },
    { title: 'Certifications', id: 'certifications' },
    { title: 'Projects', id: 'projects' },
    { title: 'Resume', path: '/resume' },
    { title: 'Contact Me', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolled 
            ? theme.palette.mode === 'dark'
              ? `rgba(${theme.palette.background.paper.replace(/^rgba?\(|\s+|\)$/g, '')},0.8)`
              : `rgba(255,255,255,0.8)`
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled 
            ? `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{
              flexGrow: 1,
              color: theme.palette.text.primary,
              fontWeight: 600,
              letterSpacing: '-0.5px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                item.path ? (
                  <RouterLink
                    key={item.title}
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Button
                      sx={{
                        color: theme.palette.text.primary,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {item.title}
                    </Button>
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={item.title}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    onClick={() => {
                      if (location.pathname !== '/') {
                        navigate('/', { state: { scrollTo: item.id } });
                      }
                    }}
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      cursor: 'pointer',
                      borderBottom: '2px solid transparent',
                      '&:hover': {
                        borderColor: theme.palette.primary.main
                      }
                    }}
                  >
                    <Button
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'transparent'
                        }
                      }}
                    >
                      {item.title}
                    </Button>
                  </ScrollLink>
                )
              ))}
              <ColorModeContext.Consumer>
                {({ toggleColorMode }) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      onClick={toggleColorMode}
                      sx={{
                        color: 'text.primary',
                        ml: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        }
                      }}
                    >
                      {theme.palette.mode === 'dark' ? (
                        <Brightness7Icon />
                      ) : (
                        <Brightness4Icon />
                      )}
                    </IconButton>
                  </motion.div>
                )}
              </ColorModeContext.Consumer>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            overflow: 'auto',
            background: theme.palette.mode === 'dark' ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List sx={{ pt: 8, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item) => (
            <ListItem key={item.title} sx={{ p: 0 }}>
              {item.path ? (
                <RouterLink
                  to={item.path}
                  style={{ textDecoration: 'none', width: '100%' }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <Button
                    fullWidth
                    sx={{
                      py: 2,
                      color: theme.palette.text.primary,
                      justifyContent: 'flex-start',
                      pl: 3,
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </RouterLink>
              ) : (
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => {
                    handleDrawerToggle();
                    if (window.location.pathname !== '/') {
                      navigate('/', { 
                        state: { scrollTo: item.id }
                      });
                    } else {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                  style={{ width: '100%' }}
                >
                  <Button
                    fullWidth
                    sx={{
                      py: 2,
                      color: theme.palette.text.primary,
                      justifyContent: 'flex-start',
                      pl: 3,
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              )}
            </ListItem>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <ListItem sx={{ 
            p: 2,
            borderTop: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            position: 'sticky',
            bottom: 0,
            zIndex: 1
          }}>
            <ColorModeContext.Consumer>
              {({ toggleColorMode }) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    fullWidth
                    onClick={toggleColorMode}
                    startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    sx={{
                      color: theme.palette.text.primary,
                      justifyContent: 'space-between',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    {theme.palette.mode === 'dark' ? 'Light' : 'Dark'} Mode
                  </Button>
                </motion.div>
              )}
            </ColorModeContext.Consumer>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;