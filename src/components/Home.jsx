import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -64
      });
    }
  }, [location.state]);

  return (
    <>
      <Element name="about">
        {/* Your About Section */}
      </Element>
      
      <Element name="education">
        {/* Your Education Section */}
      </Element>

      {/* Add similar Element wrappers for other sections */}
    </>
  );
};

export default Home; 