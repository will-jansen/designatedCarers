// Site Utilities - Handles dynamic loading of Google Analytics and reCAPTCHA
// This script loads the configuration and applies it across all pages

(function() {
    'use strict';
    
    // Load configuration
    let config = {};
    
    // Try to load config from config.js
    if (typeof SITE_CONFIG !== 'undefined') {
        config = SITE_CONFIG;
    } else {
        // Fallback configuration if config.js is not loaded
        console.warn('SITE_CONFIG not found. Using fallback configuration.');
        config = {
            analytics: { measurementId: 'G-3Z7R6ZNN8K', enabled: true },
            recaptcha: { siteKey: '6Lf-dbgrAAAAAKla5K0Sl0ebwlB0vw7QXD9rB-YM', enabled: true, version: 'enterprise' },
            site: { name: 'Designated Carers', domain: 'https://designatedcarers.com.au' }
        };
    }
    
    // Initialize Google Analytics
    function initGoogleAnalytics() {
        if (!config.analytics.enabled || !config.analytics.measurementId) {
            console.log('Google Analytics disabled or no measurement ID provided');
            return;
        }
        
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.measurementId}`;
        document.head.appendChild(script);
        
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', config.analytics.measurementId);
        
        console.log('Google Analytics initialized with ID:', config.analytics.measurementId);
    }
    
    // Initialize Google reCAPTCHA
    function initGoogleRecaptcha() {
        if (!config.recaptcha.enabled || !config.recaptcha.siteKey) {
            console.log('Google reCAPTCHA disabled or no site key provided');
            return;
        }
        
        // Load reCAPTCHA script based on version
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        
        if (config.recaptcha.version === 'enterprise') {
            script.src = `https://www.google.com/recaptcha/enterprise.js?render=${config.recaptcha.siteKey}`;
        } else {
            script.src = 'https://www.google.com/recaptcha/api.js';
        }
        
        document.head.appendChild(script);
        
        console.log('Google reCAPTCHA initialized with site key:', config.recaptcha.siteKey);
    }
    
    // Update reCAPTCHA site keys in forms
    function updateRecaptchaSiteKeys() {
        if (!config.recaptcha.enabled || !config.recaptcha.siteKey) {
            return;
        }
        
        // Update all reCAPTCHA divs with the correct site key
        const recaptchaDivs = document.querySelectorAll('.g-recaptcha');
        recaptchaDivs.forEach(div => {
            if (div.getAttribute('data-sitekey') === 'PLACEHOLDER_SITE_KEY') {
                div.setAttribute('data-sitekey', config.recaptcha.siteKey);
            }
        });
        
        console.log('Updated reCAPTCHA site keys for', recaptchaDivs.length, 'forms');
    }
    
    // Initialize everything when DOM is ready
    function init() {
        initGoogleAnalytics();
        initGoogleRecaptcha();
        
        // Update reCAPTCHA site keys after a short delay to ensure DOM is ready
        setTimeout(updateRecaptchaSiteKeys, 100);
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export config for use in other scripts
    window.SITE_CONFIG = config;
    
})();
