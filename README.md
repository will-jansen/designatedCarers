# Designated Carers Website

A modern, accessible website for professional caregiving services in Mornington Peninsula, Victoria. This website provides a platform for women and children to connect with qualified female caregivers offering various support services.

## Features

### 🏠 Homepage
- Hero section with company introduction
- Services overview with icons and descriptions
- About section highlighting company values
- Call-to-action sections
- SEO optimized with structured data

### 👥 Carers Page
- Grid layout displaying available caregivers
- **Multiple service filter selection** - Select multiple services to find carers
- Individual carer profiles with detailed information
- Service tags and specializations
- Interactive carer cards with view profile and booking options
- Screen reader announcements for filter changes

### 📅 Booking System
- **Mobile-friendly calendar** with swipe navigation
- Week-by-week availability calendar for each carer
- Interactive booking form with validation
- Service selection and scheduling options
- Special requests and notes functionality
- **Google reCAPTCHA integration** for security

### 📞 Contact Page
- Business contact information
- Interactive contact form with validation
- **Google reCAPTCHA integration** for security
- Service area and business hours
- Emergency contact information

## Technical Features

### ♿ Accessibility (WCAG Compliant)
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility with live announcements
- High contrast mode support
- Focus management
- Skip links for navigation
- Enhanced screen reader support for all interactive elements

### 📱 Mobile Responsive
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes
- Mobile navigation menu
- **Swipe navigation for calendar booking**
- Touch-optimized calendar interactions

### 🎨 Modern Design
- Clean, professional aesthetic
- Brand color integration (#20ce88)
- Smooth animations and transitions
- Card-based layouts
- Modern typography (Inter font)

### ⚡ Performance
- Optimized CSS and JavaScript
- Efficient DOM manipulation
- Lazy loading considerations
- Minimal external dependencies

### 🔒 Security
- Google reCAPTCHA integration for form protection
- Client-side form validation
- Secure form submission handling

### 📊 Analytics & SEO
- Google Analytics integration
- Comprehensive SEO optimization
- Open Graph meta tags for social sharing
- Structured data markup
- Mobile-friendly and fast loading

## File Structure

```
designatedCarers/
├── index.html              # Homepage
├── carers.html             # Carers listing and profiles
├── contact.html            # Contact information and form
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── config.js               # Centralized configuration
├── site-utils.js           # Site utilities and dynamic loading
├── README.md               # Project documentation
└── SETUP_INSTRUCTIONS.md   # Configuration guide
```

## Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Interactive functionality without frameworks
- **Font Awesome** - Icons for visual elements
- **Google Fonts** - Inter font family for typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. Clone or download the repository
2. **Configure your site in one place:**
   - Open `config.js` and update your Google Analytics ID and reCAPTCHA site key
   - Update your domain and contact information
   - All settings are automatically applied across all pages
3. Follow the detailed setup instructions in `SETUP_INSTRUCTIONS.md`
4. Open `index.html` in a web browser
5. Navigate through the different pages to explore functionality

## GitHub Pages Deployment

This website is designed to work seamlessly with GitHub Pages:

1. Push the files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as the source
4. The website will be available at `https://[username].github.io/[repository-name]`

## Customization

### Centralized Configuration
All site configuration is centralized in `config.js`:
- Google Analytics and reCAPTCHA settings
- Site information (name, domain, contact details)
- Enable/disable features

### Brand Colors
The primary brand color (#20ce88) is defined in CSS custom properties and can be easily modified in the `:root` section of `styles.css`.

### Carer Data
Sample carer data is included in `script.js`. To add real carer information, modify the `carersData` array with actual caregiver profiles.

### Contact Information
Update contact details in `config.js` - they will be automatically applied across all pages.

## Features in Detail

### Carer Filtering
- Filter carers by specific services
- Dynamic grid updates
- Accessible filter buttons

### Booking System
- Visual availability calendar
- Form validation
- Service selection
- Time and duration options

### Contact Form
- Client-side validation
- Accessibility features
- Error handling
- Success feedback

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark roles
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color combinations
- **Screen Reader Support**: Proper labeling and descriptions

## Future Enhancements

- Backend integration for real booking system
- User authentication and accounts
- Payment processing integration
- Real-time availability updates
- Email notifications
- Admin dashboard for carer management

## License

This project is created for Designated Carers and is proprietary software.

## Support

For technical support or questions about the website, please contact the development team.

