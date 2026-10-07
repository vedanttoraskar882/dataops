# DataOps Guardian Ltd. – Frontend Landing Page

A complete, modern, responsive, frontend-only landing page and interactive platform preview for **DataOps Guardian Ltd.**, built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## Overview

DataOps Guardian is a planned SME-focused, policy-controlled data reliability platform designed to help organisations determine whether their business data is trustworthy enough for reporting, forecasting, automation, and AI.

### Core Structure (In exact order):
1. **Home** – Sticky navigation, hero section, value highlights, and illustrative platform preview dashboard.
2. **About** – Conceptual foundation, 4 core pillars, and factual typography-based founder profile for Narasimha Chirumamilla.
3. **Platform** – 6 core modules categorized across development stages, distinction between Trust Passports and Trust Tokens, supporting capabilities, and planned integration coverage badges.
4. **How It Works** – 7-step operational lifecycle and illustrative order feed incident scenario.
5. **Market & Pricing** – Target SME profiles & sectors, transparent subscription plans (£450 Basic, £750 Standard, £950 Premium Year 2), pricing roadmap note, and additional services.
6. **FAQ** – Accessible 12-question accordion with exact factual answers.
7. **Footer** – Company summary, smooth section navigation links, pilot modal trigger, and demonstration privacy notice.

### Request a Pilot Modal:
- Accessible keyboard-operable modal with focus trap, Escape key handler, and focus restoration to the triggering button.
- Validates Full Name, Phone Number, Email Address, and Organisation Name.
- Automatically captures ISO 8601 submission timestamp and unique browser identifier.
- Saves entries exclusively to browser `localStorage` (`dataopsGuardianPilotSubmissions`).
- Retains existing submissions across sessions without overwriting.
- Safe error handling: Preserves malformed storage without data loss, retains form entries on error, and announces status with accessible alerts.

---

## Quick Start / Local Run Instructions

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *(On Windows PowerShell with script restriction, use `npm.cmd install`)*

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *(Or `npm.cmd run dev`)*

3. **Open in browser:**
   Open the displayed URL (typically `http://localhost:5173/`).

### Production Build & Preview

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Architectural & Design Principles

- **Frontend Only:** Zero backend, server, or cloud database dependencies.
- **Privacy & Security:** No network transmissions of form data; no analytics or telemetry scripts.
- **Figma-grade Design:** Deep navy palette, cyan/teal accenting, restrained ambient glows, subtle card borders, and smooth transitions that respect user `prefers-reduced-motion` settings.
- **Blank Favicon:** Configured empty data URI favicon (`data:,`) ensuring no default framework icons appear.
