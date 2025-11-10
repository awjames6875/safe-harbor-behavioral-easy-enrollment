# Safe Harbor Easy Enrollment System - Design Guidelines

## Design Approach

**Selected Approach**: Hybrid - combining healthcare accessibility principles with modern enrollment system patterns

**Key References**: 
- Healthcare portals (clarity, trust-building)
- Modern SaaS onboarding (Typeform, Calendly for flow simplicity)
- Community center websites (warmth, multilingual support)

**Core Principles**:
1. **Accessibility-First**: Large touch targets, high contrast text, clear visual hierarchy for older parents
2. **Bilingual Parity**: Equal visual weight and polish for both English/Spanish content
3. **Trust & Warmth**: Healthcare requires credibility balanced with approachability
4. **Progressive Disclosure**: Don't overwhelm - reveal information in digestible chunks

## Typography System

**Font Family**: Inter (via Google Fonts CDN)
- Headers: 700 weight
- Subheaders: 600 weight  
- Body: 400 weight
- Emphasis: 500 weight

**Scale**:
- Hero Headline: text-4xl md:text-5xl (36-48px)
- Section Headers: text-3xl md:text-4xl (30-36px)
- Step Titles: text-xl md:text-2xl (20-24px)
- Body Text: text-base md:text-lg (16-18px)
- Small Print: text-sm (14px)

**Line Height**: Use generous spacing - leading-relaxed for body text, leading-tight for headlines

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mt-8, gap-12)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-6xl mx-auto px-6
- Content sections: max-w-4xl for readability
- Form areas: max-w-2xl for focus

**Vertical Rhythm**:
- Section padding: py-16 md:py-24
- Component spacing: space-y-12 for section elements
- Card spacing: gap-8 for grid layouts

## Component Library

### Landing Page Components

**Hero Section**:
- Full viewport height (min-h-screen) with centered content
- Large hero image showing warm daycare environment (children engaged in activities, caring staff interaction)
- Image placement: Full-width background with gradient overlay for text legibility
- Headline + subheadline + primary CTA button
- Language toggle prominently placed (top-right corner)
- Welcome video thumbnail with play button (embedded, not autoplay)

**Steps Section** (3-column on desktop, stack on mobile):
- Numbered circle icons (large, 64px diameter)
- Step title + brief description
- Visual connectors between steps (dashed lines on desktop)
- Grid layout: grid-cols-1 md:grid-cols-3 gap-8

**Testimonials Section**:
- 2-3 cards in horizontal layout
- Each card: parent quote + name + child's age + daycare name
- Card design: rounded-2xl with subtle shadow
- Include small photo placeholders (80px circles) for authenticity

**Form Embed Section**:
- Clear headline: "Get Started - Complete This Quick Form"
- Placeholder with border and background hint for GHL embed
- Instruction text for staff integration
- Full-width container with max-w-3xl

**Footer**:
- Two-column layout (desktop): Contact info | Quick links
- Safe Harbor logo (left-aligned)
- Bilingual toggle repeated
- Contact: phone, email, address
- Operating hours
- Social media icons (if applicable)

### Check-In Page Components

**Check-In Interface**:
- Centered card layout (max-w-md)
- Large heading: "Staff Check-In"
- QR scanner placeholder area (300px square, dashed border)
- Manual entry option: Input field for Contact ID
- Large "Mark Present" button (full-width within card)
- Success confirmation message (green background, check icon)
- Simple, distraction-free layout

**QR Code Display** (for parent emails):
- Centered QR code image (200x200px)
- Label: "Show this code at check-in"
- Instructions in parent's preferred language
- High contrast border around QR for scanning reliability

### Form Components

**Input Fields**:
- Height: h-12 for all inputs (easy tapping on mobile)
- Rounded: rounded-lg
- Border: 2px solid with clear focus states
- Label positioning: Above field with mb-2
- Required field indicators: Red asterisk
- Validation messages: Below field, text-sm

**Buttons**:
- Primary CTA: Large (px-8 py-4), rounded-lg, text-lg font-semibold
- Secondary actions: Outline style with border-2
- Disabled state: Reduced opacity with cursor-not-allowed
- Blurred background when overlaid on images (backdrop-blur-sm bg-white/90)

**Language Toggle**:
- Pill-style switcher (EN | ES)
- Active state clearly indicated
- Positioned consistently (top-right on all pages)
- Sticky on scroll

### Cards & Containers

**Testimonial Cards**:
- White background with rounded-2xl
- Padding: p-6 md:p-8
- Subtle shadow: shadow-lg
- Quote icon or formatting to distinguish text

**Step Cards**:
- Centered content with icon-title-description stack
- Minimal borders, rely on spacing
- Hover state: subtle lift (transform -translate-y-1)

## Responsive Behavior

**Breakpoints**:
- Mobile-first approach
- Tablet: md: (768px)
- Desktop: lg: (1024px)

**Mobile Optimizations**:
- Stack all multi-column layouts to single column
- Increase touch target sizes (minimum 44px)
- Larger font sizes for readability
- Simplified navigation
- Form fields full-width
- Hero text overlay with higher contrast

## Accessibility Standards

- **Contrast**: Maintain WCAG AA minimum (4.5:1 for body text)
- **Focus States**: Visible focus rings on all interactive elements (ring-2 ring-offset-2)
- **Alt Text**: Descriptive alt text for all images
- **Form Labels**: Explicit label-input associations
- **Language**: Proper lang attribute switching for EN/ES
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)

## Images

**Hero Section**: 
- Full-width background image showing Safe Harbor daycare environment
- Suggested image: Warm, inviting scene with children and caregivers engaged in Body & Brain activities
- Overlay: Gradient from transparent to semi-opaque for text legibility
- Image should convey safety, care, and professionalism

**Testimonial Section**:
- Small circular parent photos (80x80px, rounded-full)
- Optional: Stock photos if real photos unavailable
- Placement: Top-left of each testimonial card

**Icons**: 
- Use Heroicons via CDN for step numbers, check marks, and UI elements
- Consistent stroke-width across all icons