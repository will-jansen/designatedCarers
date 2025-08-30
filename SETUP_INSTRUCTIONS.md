# Setup Instructions for Designated Carers Website

## Required Configuration

### 1. Google reCAPTCHA Setup

To enable form security, you need to set up Google reCAPTCHA:

1. **Get reCAPTCHA Keys:**
   - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Create a new site
   - Choose reCAPTCHA v2 ("I'm not a robot" Checkbox)
   - Add your domain (e.g., `designatedcarers.com.au` or `yourusername.github.io`)
   - Copy the Site Key and Secret Key

2. **Update the Website:**
   - Replace `YOUR_RECAPTCHA_SITE_KEY` in all HTML files with your actual Site Key
   - Files to update:
     - `contact.html` (line 191)
     - `script.js` (line 589)

3. **Backend Integration (when ready):**
   - Use the Secret Key on your server to verify reCAPTCHA responses
   - Implement server-side validation for form submissions

### 2. Google Analytics Setup

To track website analytics:

1. **Get Google Analytics ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Update the Website:**
   - Replace `GA_MEASUREMENT_ID` in all HTML files with your actual Measurement ID
   - Files to update:
     - `index.html` (lines 105, 110)
     - `carers.html` (lines 32, 37)
     - `contact.html` (lines 32, 37)

### 3. Domain Configuration

Update the following URLs in the HTML files to match your actual domain:

1. **Open Graph URLs:**
   - Replace `https://designatedcarers.com.au/` with your actual domain
   - Files to update:
     - `index.html` (lines 15, 21)
     - `carers.html` (lines 13, 19)
     - `contact.html` (lines 12, 18)

2. **Structured Data:**
   - Update the organization URL in `index.html` (line 34)
   - Update logo and image URLs (lines 35, 18, 25)

### 4. Image Assets

Create and add the following images to an `images/` folder:

- `og-image.jpg` - Open Graph image for social sharing (1200x630px)
- `carers-og.jpg` - Carers page social sharing image
- `contact-og.jpg` - Contact page social sharing image
- `logo.png` - Company logo for structured data

### 5. Content Customization

Update the following with your actual business information:

1. **Contact Information:**
   - Phone number: `(03) 1234 5678`
   - Email: `info@designatedcarers.com.au`
   - Address: Update to your actual business address

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
