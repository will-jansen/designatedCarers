# Assets Folder Structure Guide

## 📁 Complete Folder Structure

Your website now uses an organized assets folder structure:

```
designatedCarers/
├── assets/
│   ├── favicons/
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── apple-touch-icon.png
│   ├── images/
│   │   ├── carers/
│   │   │   ├── README.md
│   │   │   ├── sarah-johnson.jpg
│   │   │   ├── emma-williams.jpg
│   │   │   ├── lisa-chen.jpg
│   │   │   ├── maria-rodriguez.jpg
│   │   │   ├── jennifer-taylor.jpg
│   │   │   └── amanda-foster.jpg
│   │   ├── services/
│   │   │   ├── README.md
│   │   │   ├── transportation-service.jpg
│   │   │   ├── counselling-support.jpg
│   │   │   ├── nutrition-cooking.jpg
│   │   │   ├── personal-training.jpg
│   │   │   ├── companionship.jpg
│   │   │   └── shopping-assistance.jpg
│   │   ├── og/
│   │   │   ├── README.md
│   │   │   ├── og-image.jpg
│   │   │   ├── carers-og.jpg
│   │   │   └── contact-og.jpg
│   │   └── logo.png
│   └── README.md
├── index.html
├── carers.html
├── contact.html
├── styles.css
├── script.js
├── config.js
├── site-utils.js
├── site.webmanifest
├── sitemap.xml
├── robots.txt
└── ... (other files)
```

## 🎯 What You Need to Do

### 1. **Move Your Favicon Files**
Move your created favicon files to the correct locations:
- `favicon.ico` → `assets/favicons/favicon.ico`
- `favicon-16x16.png` → `assets/favicons/favicon-16x16.png`
- `favicon-32x32.png` → `assets/favicons/favicon-32x32.png`
- `apple-touch-icon.png` → `assets/favicons/apple-touch-icon.png`

### 2. **Create Carer Profile Images**
Add professional photos of your caregivers to `assets/images/carers/`:
- `sarah-johnson.jpg`
- `emma-williams.jpg`
- `lisa-chen.jpg`
- `maria-rodriguez.jpg`
- `jennifer-taylor.jpg`
- `amanda-foster.jpg`

**Image Requirements:**
- Format: JPG or PNG
- Size: 400x400 pixels (square)
- Quality: Professional, high-resolution photos
- File Size: Under 500KB

### 3. **Create Service Images**
Add service-related images to `assets/images/services/`:
- `transportation-service.jpg`
- `counselling-support.jpg`
- `nutrition-cooking.jpg`
- `personal-training.jpg`
- `companionship.jpg`
- `shopping-assistance.jpg`

**Image Requirements:**
- Format: JPG or PNG
- Size: 600x400 pixels (landscape)
- Quality: Professional, high-resolution photos
- File Size: Under 800KB

### 4. **Create Open Graph Images**
Add social media sharing images to `assets/images/og/`:
- `og-image.jpg` - Main homepage image
- `carers-og.jpg` - Carers page image
- `contact-og.jpg` - Contact page image

**Image Requirements:**
- Format: JPG
- Size: 1200x630 pixels
- Quality: High resolution
- File Size: Under 1MB

### 5. **Create Company Logo**
Add your company logo to `assets/images/logo.png`:
- Format: PNG (with transparent background)
- Size: 512x512 pixels (square)
- Quality: High resolution
- File Size: Under 500KB

## 🔧 Code Updates Completed

All code has been updated to use the new folder structure:

### ✅ **HTML Files Updated**
- All favicon references point to `/assets/favicons/`
- All Open Graph images point to `/assets/images/og/`
- Logo reference in structured data points to `/assets/images/logo.png`

### ✅ **JavaScript Updated**
- All carer image paths updated to `assets/images/carers/`
- Ready for real carer photos

### ✅ **Web Manifest Updated**
- Favicon paths updated to new structure

### ✅ **Robots.txt Updated**
- Allows access to `/assets/` folder
- Blocks access to configuration files

## 🎨 Image Creation Tips

### **For Carer Photos:**
- Use professional headshots
- Ensure good lighting and clear backgrounds
- Maintain consistent style across all photos
- Get proper permissions from caregivers

### **For Service Images:**
- Show the service in action
- Use your brand colors (#20ce88) when possible
- Include diverse, inclusive imagery
- Focus on the caregiving aspect

### **For Open Graph Images:**
- Include your company name "Designated Carers"
- Use your brand color (#20ce88)
- Add relevant imagery (caregivers, services, Mornington Peninsula)
- Keep text minimal and readable

## 📱 Benefits of This Structure

✅ **Organized** - Easy to find and manage images  
✅ **Scalable** - Easy to add new images  
✅ **SEO Optimized** - Proper image organization  
✅ **Performance** - Can implement lazy loading later  
✅ **Maintainable** - Clear separation of image types  

## 🚀 Next Steps

1. **Upload your favicon files** to the correct locations
2. **Create or source** the required images
3. **Test the website** to ensure all images load correctly
4. **Optimize images** for web (compress if needed)
5. **Update carer data** with real information when ready

This organized structure will make your website more professional and easier to maintain as it grows!
