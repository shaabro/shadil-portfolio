# Portfolio Project - Agent Instructions

## Project Overview
This is a modern web developer portfolio website built with vanilla HTML, CSS, and JavaScript. The site features interactive elements including sticky navigation, mobile responsiveness, scroll animations, and hover effects.

## File Structure
- `index.html` - Main landing page with hero section, navigation, and grid layouts
- `works.html` - Works/projects showcase page
- `upgrade.html` - Additional portfolio section
- `script.js` - Vanilla JavaScript for DOM interactions, animations, and navigation
- `style.css` - Main stylesheet
- `images/` - Asset directory for images
- `.vscode/settings.json` - VS Code configuration

## Key Architecture & Conventions

### JavaScript
- Uses vanilla JavaScript (no frameworks)
- Event listeners: hamburger menu toggle, scroll effects, navigation link highlighting
- Intersection Observer API for scroll-reveal animations
- All functionality initialized on `DOMContentLoaded`

### CSS
- Mobile-first responsive design with media queries
- Smooth scroll behavior enabled at HTML level
- Uses Phosphor Icons from CDN
- Tailored grid layouts for different screen sizes

### HTML Structure
- Semantic HTML with sections and IDs for navigation anchors
- Classes follow pattern: `.reveal` for animation triggers, `.nav-link` for navigation
- External dependencies: Google Fonts, Phosphor Icons

## Running the Project

### Using Live Server with Local IP
The project is configured to run on **port 5501** via Live Server extension.

**To run on local IP instead of localhost:**

1. **Start Live Server**: Right-click `index.html` → "Open with Live Server"
2. **Access via Local IP**: 
   - Instead of `http://localhost:5501`
   - Use `http://<YOUR_LOCAL_IP>:5501`
   - Find your local IP:
     - **Windows**: Open Command Prompt and run `ipconfig` (look for IPv4 Address, typically `192.168.x.x`)
     - This allows mobile devices and other machines on the network to access the site

**Why use Local IP?**
- Test on actual mobile devices on the same network
- Simulate real device access vs. localhost-only access
- Verify responsive design on different screen sizes and devices
- Share preview with teammates or clients on the same network

### LiveServer Configuration
- Port: `5501` (configured in `.vscode/settings.json`)
- Edit the setting to change port if needed: `"liveServer.settings.port": 5501`

## Common Development Tasks

### Edit Navigation
- Update nav links in `index.html` (`.nav-menu` section)
- Corresponding links in `script.js` use the `href` attribute for active state detection
- Mobile menu toggle controlled by `.nav-link` click handlers

### Add Scroll Animations
- Add `class="reveal"` to any element for scroll-in animation
- Intersection Observer threshold set to 15% visibility
- Animation CSS defined in `style.css`

### Responsive Design
- Breakpoints: 1200px, 900px, 600px, 400px
- Grid layouts adjust column count at each breakpoint
- Test at different screen sizes before deploying

### Update Images
- Place images in `images/` folder
- Reference in HTML with relative paths: `images/filename.ext`
- Use when running on local IP to verify image loading from different IPs

## Development Environment
- No build tool or package manager required (vanilla setup)
- VS Code extensions recommended: Live Server
- All changes auto-reload when running Live Server
- Test on network by accessing `http://<LOCAL_IP>:5501` on mobile or another machine

## Conventions for AI Agents
- Use semantic HTML elements (section, header, nav, main)
- Keep JavaScript vanilla unless otherwise specified
- Maintain mobile-first CSS approach
- Update all navigation references when adding new pages
- Test responsive design across the configured breakpoints
- Verify local IP accessibility when adding new features
