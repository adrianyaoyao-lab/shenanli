# Design System

## Overview
This document outlines the design system for the Swift Safe Energy website, ensuring consistency across all pages and components.

## Colors

### Primary Palette
- **Primary Background**: `#0B1020` (Deep Navy Black)
- **Secondary/Text**: `#F5F7FA` (Pure Light Gray)
- **Accent**: `#2F80FF` (Electric Blue)
- **Cyan Highlight**: `#4FD1FF` (Cyan)

### Usage
- Use `#0B1020` for backgrounds
- Use `#F5F7FA` for primary text on dark backgrounds
- Use `#2F80FF` for CTAs, links, and emphasis
- Use `#4FD1FF` for secondary highlights and gradients

## Typography

### Font Families
- **Headings**: Space Grotesk (via next/font)
- **Body**: Inter (via next/font)

### Scale
- Hero: 4xl-7xl (bold)
- H1: 5xl-6xl (bold)
- H2: 3xl-4xl (bold)
- H3: 2xl (semibold)
- Body: base-lg (regular)
- Small: sm (regular)
- Caption: xs (regular)

## Spacing

### Section Padding
- Mobile: 6rem (96px)
- Tablet: 8rem (128px)
- Desktop: 10rem (160px)

### Container Padding
- Mobile: 1.5rem
- Tablet: 3rem
- Desktop: 5-6rem

### Max Widths
- Content: 1280px
- Narrow: 768px

## Components

### Glass Cards
- Background: rgba(255, 255, 255, 0.03)
- Backdrop blur: 20px
- Border: 1px solid rgba(255, 255, 255, 0.06)
- Border radius: 1rem (16px)
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.2)

### Buttons
- Primary: Blue background with glow shadow
- Secondary: White/10 with border
- Glass: Backdrop blur with subtle border
- Sizes: sm (h-9), default (h-11), lg (h-13), xl (h-14)

### Navigation
- Fixed header with glassmorphism on scroll
- Transparent initially, blur on scroll
- Mobile: Slide-in drawer menu

## Animation

### Timing
- Quick: 0.2s
- Normal: 0.4s
- Slow: 0.6s
- Dramatic: 0.8s

### Easing
- Default: [0.22, 1, 0.36, 1] (smooth)
- Bounce: [0.34, 1.56, 0.64, 1]
- Sharp: [0.65, 0, 0.35, 1]

### Common Animations
- Fade in up on scroll
- Scale in on hover
- Text reveal word by word
- Image blur reveal

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1280px
