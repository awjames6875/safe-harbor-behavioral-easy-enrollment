# Safe Harbor Easy Enrollment System

## Overview

The Safe Harbor Easy Enrollment System is a bilingual (English/Spanish) web application designed to simplify the enrollment process for parents joining the Body & Brain™ Program at Safe Harbor Behavioral Health daycare facilities. The system provides an accessible, user-friendly interface for parent enrollment and attendance tracking through QR codes.

The application serves as a modern enrollment portal that integrates with GoHighLevel (GHL) for CRM, form handling, and automated communications. It features a landing page with enrollment forms and a separate check-in system for attendance tracking at daycare sites.

## Recent Changes

**November 12, 2025 (Hero Messaging & Enrollment Steps Update):**
- Updated hero headline to emphasize "Free Safe Harbor Day Care Partnership" in both English and Spanish
- Revised subheadline to include "Join our program!" call-to-action while maintaining child development messaging
- "Free" placement at the beginning of headline for maximum parent attention
- Redesigned 3-step enrollment process to match actual workflow:
  - Step 1: Watch Welcome Video (directs parents to watch the welcome video)
  - Step 2: Fill Out Form Below (clearly tells them to complete the GoHighLevel form on the page)
  - Step 3: Check Email & Finish (explains they'll receive emails for Therapy Notes forms and booking link)
- Updated step icons to Play, FileText, and Mail for better visual clarity
- All text remains at 5th grade reading level
- Safe Harbor branding preserved throughout messaging

**November 11, 2025 (Component Upgrade & Video Modal & Live Photo Effect):**
- Integrated premium 21st.dev components for enhanced user experience
- Added GlowingEffect component to hero buttons with animated glowing borders that follow mouse cursor
- Enhanced StepsSection cards with gradient overlays, animated accent bars, and smooth hover transitions
- Implemented aurora-like gradient animations in hero background (subtle teal pulsing effect)
- Upgraded button styling with prominent border-2 and enhanced interactive effects
- Created VideoModal component with shadcn Dialog for YouTube video playback
- Integrated video modal with "Watch Video" button in hero section
- Added bilingual accessibility support (English/Spanish) with screen-reader-friendly titles
- Video modal features responsive 16:9 aspect ratio, multiple close methods (button, Escape, backdrop click)
- Implemented "live photo" effect on hero background: smooth 5-second zoom-in animation (100% to 110% scale) that plays once on page load, creating the illusion of kids and teachers coming alive
- Added accessibility support with prefers-reduced-motion media query to respect user motion preferences
- All enhancements maintain existing teal color scheme (HSL 174 72% 28%)

**November 11, 2025 (Earlier):**
- Added animated floating geometric shapes to hero section using framer-motion
- Generated unique portrait photos for all 4 testimonials (Maria, David, Carmen, James)
- Implemented smooth scrolling marquee animation for testimonials section
- Added hover-to-pause functionality using Tailwind group utilities
- Expanded testimonials from 2 to 4 parent quotes for richer content
- Created seamless infinite loop with duplicated testimonial arrays

**November 10, 2025:**
- Added Safe Harbor lighthouse logo to fixed header on all pages
- Updated all imagery to show diverse brown-skinned children and brown caregivers in daycare settings
- Simplified all content to 5th grade reading level in both English and Spanish
- Implemented pulse-glow animation on primary "Start Now" call-to-action button
- Increased font sizes across the site for better readability (headings: text-5xl to text-6xl, body: text-lg to text-xl)
- Fixed routing issue for /check-in page
- Created reusable Header component with logo (left) and language toggle (right)

## User Preferences

Preferred communication style: Simple, everyday language at 5th grade reading level.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React hooks for local state, TanStack Query for server state
- **Build Tool**: Vite

**Design Principles:**
- **Accessibility-First**: Large touch targets, high contrast, clear visual hierarchy optimized for all parents. Larger font sizes (text-lg to text-6xl) and increased button sizes for easier reading and clicking.
- **Bilingual Parity**: Equal visual weight for English and Spanish content with language toggle. All content simplified to 5th grade reading level.
- **Progressive Disclosure**: Information revealed in digestible chunks to avoid overwhelming users
- **Healthcare-Focused**: Combines healthcare portal clarity with modern SaaS onboarding simplicity
- **Inclusive Imagery**: All photos feature diverse brown-skinned children and brown caregivers in authentic daycare settings

**Component Structure:**
- Modular, reusable components with language prop injection
- Header component with Safe Harbor logo and language toggle (fixed positioning)
- Sections include: Hero, Steps, Testimonials, Form Embed, Footer
- Separate pages for Home enrollment and Check-in functionality
- Typography system using Inter font family with larger scale (text-5xl to text-6xl for headings)
- Spacing based on Tailwind's 4-unit system (4, 6, 8, 12, 16, 20, 24)
- Custom pulse-glow animation for primary CTA buttons

**Responsive Strategy:**
- Mobile-first approach with breakpoint adaptations
- Container max-widths: 6xl for sections, 4xl for content, 2xl for forms
- Generous vertical rhythm with py-16/py-24 section padding

### Backend Architecture

**Server Setup:**
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **Development**: Vite middleware integration for HMR
- **Production**: Static file serving of built React app

**API Strategy:**
- RESTful endpoints prefixed with `/api`
- Minimal backend logic - primary processing handled by GoHighLevel
- Storage interface pattern for future database integration
- Currently using in-memory storage (MemStorage) as placeholder

**Route Handling:**
- Request/response logging middleware
- JSON body parsing with raw body preservation for webhook verification
- Catch-all routing to serve React SPA

### Data Storage Solutions

**Current Implementation:**
- In-memory storage interface (`MemStorage`) for development
- User schema defined with Drizzle ORM for future PostgreSQL migration

**Planned Database:**
- PostgreSQL via Neon Database (@neondatabase/serverless)
- Drizzle ORM for type-safe database operations
- Schema includes users table with UUID primary keys

**Data Model:**
According to PRD documentation, the system tracks:
- Contact information (parent/child details)
- QR code URLs for attendance tracking
- Check-in dates and daycare associations
- Language preferences for message routing
- Paperwork completion status

**Migration Strategy:**
- Drizzle Kit configured for schema migrations
- Database credentials via environment variables
- Push-based deployment model (`db:push` script)

### Authentication and Authorization

**Current State:**
- Basic user schema with username/password fields
- No active authentication implementation
- Session infrastructure prepared (connect-pg-simple for future use)

**Planned Approach:**
- Session-based authentication with PostgreSQL session store
- Cookie-based session management
- User roles to differentiate parents from staff

### External Dependencies

**Primary CRM Integration:**
- **GoHighLevel (GHL)**: Handles form submissions, contact management, automated workflows, SMS/email campaigns, and appointment scheduling
- Form embeds integrated into landing page
- Webhook support planned for bi-directional data sync

**Third-Party Services:**
- **QR Code Generation**: goqr.me API for creating attendance QR codes
- **Video Hosting**: YouTube/Loom for welcome videos and training content
- **Font Delivery**: Google Fonts CDN (Inter font family)

**Development Tools:**
- Replit-specific plugins for runtime error overlay and dev tooling
- Vite plugins for React, error handling, and development experience

**UI Component Libraries:**
- Radix UI primitives (26+ component packages) for accessible, unstyled components
- shadcn/ui configuration for component styling
- Lucide React for icons
- class-variance-authority and clsx for conditional styling

**Utility Libraries:**
- date-fns for date manipulation
- zod for schema validation (integrated with Drizzle)
- embla-carousel-react for carousel functionality
- TanStack React Query for server state management

**Hosting & Deployment:**
- Primary domain: safeharboreasyenrollment.com
- Replit hosting platform
- Static asset serving from attached_assets directory