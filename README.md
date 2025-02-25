# WhitePearl Dental Clinic Website

A luxury dental clinic website built with Next.js and TailwindCSS, featuring a premium design aesthetic with black, white, and gold color scheme.

## Author

**Ruhan Pacolli**
- GitHub: [@Ruhanpaco](https://github.com/Ruhanpaco)
- Portfolio: [ruhanpacolli.online](https://ruhanpacolli.online)
- Contact: hi@ruhanpacolli.online

## Design System

### Color Palette
- **Primary Colors**
  - Black (`#000000`) - Used for backgrounds and text
  - White (`#FFFFFF`) - Used for backgrounds and text
  - Gold (`#C6A265`) - Primary accent color, used for borders, icons, and hover states

### Typography
- **Font Families**
  - Heading Font: Playfair Display (font-heading)
    - Used for main headings and titles
    - Conveys luxury and elegance
  - Body Font: Raleway (font-body)
    - Used for paragraphs and general content
    - Clean and modern sans-serif
  - UI Font: Inter (font-ui)
    - Used for buttons, labels, and navigation
    - Excellent readability for interface elements

### Components

#### Navigation
- Fixed navigation bar with transparent to solid transition
- Mobile-responsive hamburger menu
- Animated hover effects on links
- Book Appointment CTA button

#### Hero Sections
- Full-width design with background images
- Dark overlay for better text readability
- Animated text elements using Framer Motion
- Consistent heading and subheading structure

#### Cards & Sections
- Gold border accents
- Consistent padding and spacing
- Hover animations on interactive elements
- Shadow effects for depth

#### Forms
- Gold-bordered input fields
- Icon-enhanced form elements
- Clear visual hierarchy
- Responsive grid layouts

### Pages

#### Home (/)
- Hero section with CTA
- Welcome section
- Services overview
- Statistics section
- Testimonials
- CTA section

#### Services (/services)
- Category navigation
- Service cards with hover effects
- Detailed service information
- Filterable service grid

#### About (/about)
- Team member profiles
- Company history
- Core values
- Facility showcase

#### Contact (/contact)
- Contact form
- Location information
- Business hours
- Social media links
- Interactive map

#### Appointment (/appointment)
- Booking form
- Time slot selection
- Service selection
- New patient information

## Technologies Used

### Frontend
- **Next.js 14** - React framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **TypeScript** - Type safety and better developer experience

### Features
- Fully responsive design
- Smooth animations and transitions
- Form validation and handling
- Interactive components
- SEO optimized
- Performance optimized images

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── appointment/
│   │   └── page.tsx
│   └── page.tsx
├── styles/
│   └── globals.css
└── public/
    └── assets/
        ├── images/
        └── icons/
```

## Required Images

### Hero Images
- `/assets/images/hero-bg.jpg` - Homepage hero background
- `/assets/images/contact-hero.jpg` - Contact page hero
- `/assets/images/booking-hero.jpg` - Appointment page hero
- `/assets/images/about-hero.jpg` - About page hero

### Service Images
- `/assets/images/services/*.jpg` - Service-specific images
- `/assets/images/team/*.jpg` - Team member photos
- `/assets/images/facility/*.jpg` - Facility and equipment photos

### Icons
- `/assets/icons/*.svg` - Custom icons for values and features

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/whitepearl-dental.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Performance Optimization
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts with next/font
- Minified CSS and JS
- Responsive images for different screen sizes

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Made with ❤️ by [Ruhan Pacolli](https://github.com/Ruhanpaco)
