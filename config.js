// Centralized Configuration for Designated Carers Website
// Update these values once and they will be applied across all pages

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
        // Placeholder contact information - replace with real details
        // email: 'info@designatedcarers.com.au',
        // phone: '(03) 1234 5678',
        // address: 'Mornington Peninsula, Victoria'
        email: '[contact-email]',
        phone: '[contact-phone]',
        address: '[business-address]'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
