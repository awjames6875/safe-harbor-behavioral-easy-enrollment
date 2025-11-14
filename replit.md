# Safe Harbor Easy Enrollment System

## Overview

The Safe Harbor Easy Enrollment System is a bilingual (English/Spanish) web application designed to streamline the enrollment process for parents joining the Body & Brain™ Program at Safe Harbor Behavioral Health daycare facilities. It provides a user-friendly interface for parent enrollment, integrates with GoHighLevel for CRM and automated communications, and features QR code-based attendance tracking. The system aims to be an accessible, modern enrollment portal, simplifying operations for Safe Harbor and enhancing the experience for parents.

## User Preferences

Preferred communication style: Simple, everyday language at 5th grade reading level.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React hooks for local state, TanStack Query for server state
- **Build Tool**: Vite

**Design Principles:**
- **Accessibility-First**: Large touch targets, high contrast, clear visual hierarchy, larger font sizes, and increased button sizes. All animations respect prefers-reduced-motion user preferences.
- **Bilingual Parity**: Equal visual weight for English and Spanish content with a language toggle; all content at a 5th-grade reading level.
- **Progressive Disclosure**: Information presented in digestible chunks.
- **Healthcare-Focused**: Combines healthcare portal clarity with modern SaaS onboarding simplicity.
- **Inclusive Imagery**: Features diverse brown-skinned children and caregivers.
- **UI/UX**: Features include animated elements (sparkles, shimmer headings, glowing buttons, aurora-like background gradients, floating geometric shapes), an Apple-style 3D rotating logo with smooth Y-axis rotation and Safe Harbor teal glow effects, a "live photo" zoom effect on hero background, a responsive modern footer with 7 social media platforms, and an integrated AI chatbot with professional chat bubbles and an enhanced visibility launcher.

**Component Structure:**
- Modular and reusable components with language prop injection.
- Key sections: Hero, Steps, Testimonials, Form Embed, Footer, and a ChatAssistant component.
- Separate pages for Home enrollment and Check-in functionality.
- Typography system using Inter font family with a larger scale.

**Responsive Strategy:**
- Mobile-first approach with breakpoint adaptations for different screen sizes.

### Backend Architecture

**Server Setup:**
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **Development**: Vite middleware integration for HMR
- **Production**: Static file serving of built React app

**API Strategy:**
- RESTful endpoints prefixed with `/api`.
- Minimal backend logic, primarily handled by GoHighLevel.
- Currently uses in-memory storage (`MemStorage`) as a placeholder.

### Data Storage Solutions

**Current Implementation:**
- In-memory storage interface (`MemStorage`) for development.

**Planned Database:**
- PostgreSQL via Neon Database.
- Drizzle ORM for type-safe database operations.

**Data Model:**
- Tracks contact information (parent/child details), QR code URLs for attendance, check-in dates, daycare associations, language preferences, and paperwork completion status.

### Authentication and Authorization

**Current State:**
- Basic user schema, no active authentication implemented.

**Planned Approach:**
- Session-based authentication with PostgreSQL session store and cookie-based session management.
- User roles to differentiate parents from staff.

## External Dependencies

- **GoHighLevel (GHL)**: For CRM, form submissions, contact management, automated workflows, SMS/email campaigns, and appointment scheduling. The enrollment survey is embedded directly on the homepage via iframe (URL: https://api.leadconnectorhq.com/widget/survey/ilYKNge7tHozcy1PNsdI) with auto-resize script (https://link.msgsndr.com/js/form_embed.js).
- **Anthropic SDK (Claude AI)**: Integrated for the AI chatbot functionality (Claude Sonnet 4.5).
- **Goqr.me API**: For generating attendance QR codes.
- **YouTube/Loom**: For video hosting.
- **Google Fonts CDN**: For the Inter font family.
- **Radix UI primitives & shadcn/ui**: For UI components.
- **Lucide React**: For icons.
- **date-fns**: For date manipulation.
- **zod**: For schema validation.
- **embla-carousel-react**: For carousel functionality.
- **TanStack React Query**: For server state management.
- **Replit**: Hosting platform.