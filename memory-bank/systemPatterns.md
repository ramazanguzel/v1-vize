# System Patterns

## Component Architecture
- Framework: Next.js
- UI Library: React
- Styling: Tailwind CSS
- Component Structure: Follows atomic design principles

## File Organization
- `/app`: Next.js App Router pages and layouts
- `/lib`: Utility functions and shared code
- `/public`: Static assets

## System Components from PRD
1. Frontend Application: React-based web application using Next.js for server-side rendering and optimal performance.
2. Form State Management: Zustand for managing form state across steps with persistence.
3. Form Validation: Zod for schema validation and type safety.
4. PDF Processing Service: Client-side PDF manipulation using pdf-lib.
5. User Authentication System: Secure login and data protection.
6. Payment Integration: Lemon Squeezy for payment processing and merchant of record services.
7. AI Service (future): Integration with language models for generating letters of intent.

## Planned Directory Structure from PRD
```
/app
  /page.tsx                  # Landing page
  /(auth)                    # Authentication routes
  /(dashboard)               # Protected routes
    /form                    # Form wizard routes
      /[step]/page.tsx       # Dynamic step pages
  /api                       # API routes

/components
  /ui                        # Shadcn UI components
  /form                      # Form-specific components
    /steps                   # Step-specific form components
  /layout                    # Layout components
  /pdf                       # PDF-related components

/lib
  /store                     # Zustand store
  /validation                # Zod schemas
  /pdf                       # PDF utilities
  /utils                     # Utility functions

/public
  /templates                 # PDF templates
```
