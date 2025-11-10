# Safe Harbor Easy Enrollment System

## Overview

The Safe Harbor Easy Enrollment System is a bilingual (English/Spanish) web application designed to simplify the enrollment process for parents joining the Body & Brain™ Program at Safe Harbor Behavioral Health daycare facilities. The system provides an accessible, user-friendly interface for parent enrollment and attendance tracking through QR codes.

The application serves as a modern enrollment portal that integrates with GoHighLevel (GHL) for CRM, form handling, and automated communications. It features a landing page with enrollment forms and a separate check-in system for attendance tracking at daycare sites.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Accessibility-First**: Large touch targets, high contrast, clear visual hierarchy optimized for older parents
- **Bilingual Parity**: Equal visual weight for English and Spanish content with language toggle
- **Progressive Disclosure**: Information revealed in digestible chunks to avoid overwhelming users
- **Healthcare-Focused**: Combines healthcare portal clarity with modern SaaS onboarding simplicity

**Component Structure:**
- Modular, reusable components with language prop injection
- Sections include: Hero, Steps, Testimonials, Form Embed, Footer
- Separate pages for Home enrollment and Check-in functionality
- Typography system using Inter font family with defined scale (text-4xl to text-sm)
- Spacing based on Tailwind's 4-unit system (4, 6, 8, 12, 16, 20, 24)

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