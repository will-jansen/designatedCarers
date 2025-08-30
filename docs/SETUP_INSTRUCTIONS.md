# Setup Instructions for Designated Carers Website

## Required Configuration

### 1. Centralized Configuration Setup

**All configuration is now centralized in one file!** Simply update `config.js` with your settings:

1. **Open `config.js`** and update the following values:

```javascript
const SITE_CONFIG = {
    // Google Analytics Configuration
    analytics: {
        measurementId: 'G-3Z7R6ZNN8K', // Replace with your Google Analytics Measurement ID
        enabled: true // Set to false to disable analytics
    },
    
    // Google reCAPTCHA Configuration
    recaptcha: {
        siteKey: '6Lf-dbgrAAAAAKla5K0Sl0ebwlB0vw7QXD9rB-YM', // Replace with your reCAPTCHA Site Key
        enabled: true, // Set to false to disable reCAPTCHA
        version: 'enterprise' // 'v2' or 'enterprise'
    },
    
    // Site Information
    site: {
        name: 'Designated Carers',
        domain: 'https://designatedcarers.com.au', // Replace with your actual domain
        email: 'info@designatedcarers.com.au',
        phone: '(03) 1234 5678',
        address: 'Mornington Peninsula, Victoria'
    }
};
```

### 2. Google reCAPTCHA Setup

1. **Get reCAPTCHA Keys:**
   - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Create a new site
   - Choose reCAPTCHA v2 ("I'm not a robot" Checkbox) or Enterprise
   - Add your domain (e.g., `designatedcarers.com.au` or `yourusername.github.io`)
   - Copy the Site Key and Secret Key

2. **Update Configuration:**
   - Open `config.js`
   - Replace the `siteKey` value with your actual Site Key
   - Set `version` to 'v2' or 'enterprise' based on your choice

3. **Backend Integration (when ready):**
   - Use the Secret Key on your server to verify reCAPTCHA responses
   - Implement server-side validation for form submissions

### 3. Google Analytics Setup

1. **Get Google Analytics ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Update Configuration:**
   - Open `config.js`
   - Replace the `measurementId` value with your actual Measurement ID

### 4. Domain Configuration

Update the domain in `config.js`:

1. **Update Site Domain:**
   - Open `config.js`
   - Replace `https://designatedcarers.com.au` with your actual domain
   - This will be used for Open Graph URLs and structured data

2. **Update HTML Meta Tags (Optional):**
   - The system will automatically use the domain from config.js
   - You can manually update Open Graph URLs in HTML files if needed:
     - `index.html` (lines 15, 21)
     - `carers.html` (lines 13, 19)
     - `contact.html` (lines 12, 18)

### 5. Image Assets

Create and add the following images to an `images/` folder:

- `og-image.jpg` - Open Graph image for social sharing (1200x630px)
- `carers-og.jpg` - Carers page social sharing image
- `contact-og.jpg` - Contact page social sharing image
- `logo.png` - Company logo for structured data

### 6. Content Customization

Update the following with your actual business information:

1. **Contact Information in `config.js`:**
   - Update `email`, `phone`, and `address` in the site configuration
   - These values will be used across all pages

2. **Carer Data:**
   - Replace sample carer data in `script.js` with real caregiver profiles
   - Update services, availability, and contact information

3. **Business Hours:**
   - Update business hours in `contact.html`

## Deployment to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

3. **Update Domain References:**
   - Once deployed, update all domain references to use your GitHub Pages URL
   - Format: `https://yourusername.github.io/designatedcarers`

## Testing Checklist

### Accessibility Testing
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Test with high contrast mode

### Mobile Testing
- [ ] Test calendar swipe functionality
- [ ] Verify touch targets are adequate
- [ ] Test form interactions on mobile
- [ ] Check responsive design on various screen sizes

### Functionality Testing
- [ ] Test multiple filter selection
- [ ] Verify reCAPTCHA integration
- [ ] Test booking form submission
- [ ] Test contact form submission
- [ ] Verify Google Analytics tracking

### SEO Testing
- [ ] Check meta tags are properly set
- [ ] Verify structured data with Google's Rich Results Test
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Check page loading speed

## Security Considerations

1. **Form Validation:**
   - All forms include client-side validation
   - reCAPTCHA prevents automated submissions
   - Server-side validation should be implemented for production

2. **Data Protection:**
   - No sensitive data is stored in the frontend
   - Form submissions should be handled securely on the server
   - Consider implementing HTTPS for production

## Support

For technical support or questions about the website setup, please refer to the documentation or contact the development team.

## Notes

- The website is designed to work without a backend server for the prototype phase
- All form submissions are currently simulated
- Real booking and contact form processing requires backend implementation
- The website is fully accessible and mobile-responsive
- All features work offline except for reCAPTCHA and Google Analytics
