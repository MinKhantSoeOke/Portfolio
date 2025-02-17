import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink, Link } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
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
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'My Story', path: '/my-story' },
    { title: 'About', id: 'about' },
    { title: 'Experience', id: 'experience' },
    { title: 'Education', id: 'education' },
    { title: 'Certifications', id: 'certifications' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact Me', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: isScrolled ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
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
              color: '#000',
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
              sx={{ color: '#000' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
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
                        color: '#000',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
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
                  >
                    <Button
                      sx={{
                        color: '#000',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                      onClick={() => {
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
                    >
                      {item.title}
                    </Button>
                  </ScrollLink>
                )
              ))}
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
            width: 240,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List sx={{ pt: 8 }}>
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
                      color: '#000',
                      justifyContent: 'flex-start',
                      pl: 3,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
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
                      color: '#000',
                      justifyContent: 'flex-start',
                      pl: 3,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;