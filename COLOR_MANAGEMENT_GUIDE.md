# MpowHR Growth Guide - Color Management System

## 🎨 Centralized Color System

Your website **already has a well-structured centralized color system**! Here's how to use it and make global color changes.

## 📍 The Central Color Hub

**Location**: `/src/index.css` (lines 8-78)

This is your **single source of truth** for all colors. All colors are defined using CSS custom properties (CSS variables) in the `:root` selector.

## 🔧 How to Change Colors Globally

### Primary Color (Currently: Olive Green)
To change the main green color throughout the website:

```css
/* In /src/index.css, lines 19-23 */
--primary: 75 35% 35%;           /* Main olive green */
--primary-foreground: 0 0% 100%; /* Text on primary (white) */
--primary-light: 75 35% 45%;     /* Lighter variant */
--primary-dark: 75 35% 25%;      /* Darker variant */
```

**Example**: To change to blue:
```css
--primary: 220 70% 50%;          /* Blue */
--primary-light: 220 70% 60%;    /* Light blue */
--primary-dark: 220 70% 40%;     /* Dark blue */
```

### Secondary Color (Currently: Beige)
```css
/* Lines 25-28 */
--secondary: 45 35% 88%;         /* Warm beige */
--secondary-foreground: 25 20% 15%; /* Text on secondary */
--secondary-dark: 45 30% 80%;    /* Darker beige */
```

### Accent Color (Currently: Light Sage)
```css
/* Lines 30-32 */
--accent: 75 20% 70%;            /* Light sage */
--accent-foreground: 25 20% 15%; /* Text on accent */
```

## 🌈 Color Format Explanation

Colors use **HSL format without the `hsl()` wrapper**:
- `75 35% 35%` = Hue: 75°, Saturation: 35%, Lightness: 35%
- This format is required for Tailwind CSS custom properties

## 🎯 Where Colors Are Used

### Primary Color (`--primary`) appears in:
- Buttons (default variant)
- Icons throughout the site
- Text highlights and gradients
- Navigation hover states (now centralized)
- Stats numbers
- Form focus states

### Secondary Color (`--secondary`) appears in:
- Background sections
- Card backgrounds
- Button secondary variant

### Accent Color (`--accent`) appears in:
- Subtle backgrounds
- Decorative elements
- Soft highlights

## 🛠 Recent Improvements Made

### ✅ Fixed Hardcoded Colors
1. **Navigation hover**: Changed from `yellow-400` to `--nav-hover`
2. **Mobile menu background**: Changed from `#003319` to `--nav-mobile-bg`
3. **Button navbar variant**: Changed from hex colors to `--button-navbar`

### ✅ Added New Color Variables
```css
/* Navigation Colors */
--nav-hover: 45 80% 60%;         /* Navigation link hover */
--nav-mobile-bg: 75 35% 10%;     /* Mobile menu background */

/* Button Variants */
--button-navbar: 45 30% 75%;     /* Navbar button background */
--button-navbar-hover: 45 25% 65%; /* Navbar button hover */
```

## 🚀 How to Use in Components

### Tailwind Classes (Recommended)
```jsx
<div className="bg-primary text-primary-foreground">
  <button className="bg-secondary hover:bg-secondary-dark">
    Click me
  </button>
</div>
```

### Available Tailwind Classes
- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`, `border-secondary`
- `bg-accent`, `text-accent`, `border-accent`
- `bg-nav-hover`, `text-nav-hover`
- `bg-nav-mobile-bg`
- `bg-button-navbar`, `bg-button-navbar-hover`

### CSS Custom Properties (Advanced)
```css
.custom-element {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

## 🎨 Color Scheme Examples

### Change to Blue Theme
```css
--primary: 220 70% 50%;
--primary-light: 220 70% 60%;
--primary-dark: 220 70% 40%;
--nav-hover: 220 80% 70%;
--button-navbar: 220 30% 75%;
--button-navbar-hover: 220 25% 65%;
```

### Change to Purple Theme
```css
--primary: 270 60% 50%;
--primary-light: 270 60% 60%;
--primary-dark: 270 60% 40%;
--nav-hover: 270 80% 70%;
--button-navbar: 270 30% 75%;
--button-navbar-hover: 270 25% 65%;
```

### Change to Teal Theme
```css
--primary: 180 60% 40%;
--primary-light: 180 60% 50%;
--primary-dark: 180 60% 30%;
--nav-hover: 180 80% 60%;
--button-navbar: 180 30% 70%;
--button-navbar-hover: 180 25% 60%;
```

## 📋 Testing Your Changes

1. **Save** `/src/index.css` after making changes
2. **Refresh** your browser
3. **Check these key areas**:
   - Navigation links (hover states)
   - Buttons throughout the site
   - Icons and highlights
   - Stats sections
   - Form elements

## 🔍 Dark Mode Support

The system also includes dark mode variants (lines 80-111). To modify dark mode colors:

```css
.dark {
  --primary: 149 70% 25%;     /* Dark mode primary */
  --secondary: 45 15% 15%;    /* Dark mode secondary */
  /* ... other dark mode colors */
}
```

## 📝 Best Practices

1. **Always use the centralized system** - avoid hardcoded colors
2. **Test in both light and dark modes** if dark mode is enabled
3. **Maintain color contrast** for accessibility
4. **Keep related colors harmonious** (adjust hue consistently)
5. **Update gradients** if you change primary colors significantly

## 🎯 Summary

Your website now has a **fully centralized color management system**. To change the main green color:

1. Open `/src/index.css`
2. Find lines 19-23 (primary colors)
3. Change the HSL values
4. Optionally update related colors (nav-hover, button variants)
5. Save and refresh!

**The change will automatically reflect everywhere** throughout your website! 🎉
