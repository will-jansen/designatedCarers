# Favicon Setup Guide

## Required Favicon Files

You need to create the following favicon files and place them in your website root directory:

### 1. **favicon.ico** (16x16, 32x32, 48x48 pixels)
- **Purpose**: Main favicon for browsers
- **Format**: ICO format
- **Sizes**: Multiple sizes in one file (16x16, 32x32, 48x48)
- **Location**: `/favicon.ico`

### 2. **favicon-16x16.png** (16x16 pixels)
- **Purpose**: Small favicon for modern browsers
- **Format**: PNG format
- **Size**: 16x16 pixels
- **Location**: `/favicon-16x16.png`

### 3. **favicon-32x32.png** (32x32 pixels)
- **Purpose**: Standard favicon for modern browsers
- **Format**: PNG format
- **Size**: 32x32 pixels
- **Location**: `/favicon-32x32.png`

### 4. **apple-touch-icon.png** (180x180 pixels)
- **Purpose**: Icon for iOS devices when adding to home screen
- **Format**: PNG format
- **Size**: 180x180 pixels
- **Location**: `/apple-touch-icon.png`

## How to Create Favicons

### Option 1: Online Favicon Generator (Recommended)
1. Go to [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload your logo/icon image
3. Download the generated favicon package
4. Extract and upload the files to your website root

### Option 2: Design Software
1. Create a square logo/icon (minimum 512x512 pixels)
2. Export in multiple sizes:
   - 16x16, 32x32, 48x48 for favicon.ico
   - 16x16, 32x32 for PNG favicons
   - 180x180 for Apple touch icon

### Option 3: Use Your Brand Color
If you don't have a logo yet, create a simple favicon using your brand color (#20ce88):
1. Create a square image with your brand color
2. Add a simple "DC" or heart icon
3. Export in the required sizes

## File Structure After Setup

Your website root should contain:
```
designatedCarers/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── index.html
├── carers.html
├── contact.html
└── ... (other files)
```

## Testing Your Favicons

After uploading the files:

1. **Browser Test**: Visit your website and check if the favicon appears in the browser tab
2. **Mobile Test**: On mobile devices, try adding your site to the home screen
3. **Validation**: Use [realfavicongenerator.net/favicon_checker](https://realfavicongenerator.net/favicon_checker) to validate your favicon setup

## Important Notes

- All favicon files must be in the root directory of your website
- The files are already referenced in your HTML files
- The web manifest (site.webmanifest) is already configured
- Your brand color (#20ce88) is set as the theme color

## Quick Start

If you want to get started quickly:
1. Create a simple 512x512 pixel square image with your brand color (#20ce88)
2. Add a simple "DC" text or heart icon in white
3. Use an online favicon generator to create all required sizes
4. Upload the generated files to your website root

This will give you a professional-looking favicon that matches your brand!
