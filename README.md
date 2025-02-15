# Portfolio Website

A modern, responsive portfolio website built with React and Material-UI, featuring smooth animations and a clean design aesthetic.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI**: Clean and professional interface using Material-UI components
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Dynamic Navigation**: Smooth scrolling navigation with mobile-responsive drawer
- **Sections Include**:
  - Hero section with personal introduction
  - About section with skills overview
  - Experience timeline
  - Education details
  - Certifications showcase
  - Projects portfolio
  - Contact information

## Technologies Used

- React.js
- Material-UI (MUI)
- Framer Motion
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Portfolio\ Website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
 npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for deployment on GitHub Pages using GitHub Actions. The deployment workflow is automated through the `.github/workflows/deploy.yml` configuration.

## Project Structure

```
/src
  /assets        # Images and static assets
  /components    # React components
    - About.jsx
    - Certifications.jsx
    - Contact.jsx
    - Education.jsx
    - Experience.jsx
    - Hero.jsx
    - Navbar.jsx
    - Projects.jsx
  App.jsx        # Main application component
  App.css        # Global styles
  main.jsx       # Application entry point
```

## Features Overview

### Responsive Navigation
- Collapsible navigation menu for mobile devices
- Smooth scroll to section functionality
- Transparent to solid navbar transition on scroll

### Interactive UI Elements
- Animated section transitions
- Hover effects on cards and buttons
- Dynamic skill tags
- Responsive image layouts

### Performance Optimizations
- Lazy loading of images
- Optimized animations for better performance
- Efficient component rendering

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Min Khant Soe Oke
- GitHub: [@minkhantsoeoke](https://github.com/minkhantsoeoke)
- LinkedIn: [Min Khant Soe Oke](https://www.linkedin.com/in/minkhantsoeoke/)
- Kaggle: [Alex Min Khant](https://www.kaggle.com/alexminkhant)
