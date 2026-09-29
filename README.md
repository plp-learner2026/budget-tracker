# SpendWise Dashboard

## About the Project

SpendWise is a modern personal finance dashboard designed to help users view and organize their spending, budgeting, and savings information in one place.

This Week 4 project focuses on rebuilding the Budget Tracker layout using CSS Grid and Flexbox. The dashboard includes a navigation sidebar, financial overview header, and category cards with realistic static financial information.

## What I Built

### 1. Dashboard Layout

The dashboard includes:

- A SpendWise sidebar navigation menu
- A main dashboard area
- A financial overview header
- A monthly budget summary
- Six financial category cards:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities

### 2. CSS Grid

CSS Grid is used for the overall dashboard layout.

It creates:

- A sidebar column
- A main content column
- A three-column layout for the financial cards

The card layout changes to a single column on smaller screens.

### 3. Flexbox

Flexbox is used inside the dashboard for:

- Sidebar navigation
- Header content
- Monthly budget summary
- Individual dashboard cards
- Card content

### 4. CSS Custom Properties

CSS custom properties are defined in `:root` and used throughout the stylesheet for consistent styling.

The variables include:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color
- Border color
- Sidebar color
- Sidebar text color
- Card shadow

### 5. Responsive Design

A responsive media query is included for screens below 768px.

On smaller screens:

- The dashboard changes to a single-column layout
- Navigation items wrap
- The header stacks vertically
- Financial cards display one per row

The responsive layout was tested using Chrome DevTools Device Toolbar with an iPhone 16 Pro Max viewport.

### 6. Card Micro-Interactions

The financial cards include:

- Hover effects
- Keyboard focus effects
- A subtle upward movement
- A soft box-shadow effect
- A 200ms transition

The cards are keyboard-focusable using `tabindex="0"`.

### 7. Dark Theme

A dark theme stretch goal was included using:

```css
@media (prefers-color-scheme: dark)
## Files in the Project

- `index.html` — Contains the dashboard structure, navigation, header, and financial cards.
- `style.css` — Contains the Grid, Flexbox, responsive design, custom properties, and micro-interactions.
- `README.md` — Explains the project and the technologies used.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Responsive Design
- Chrome DevTools

## Author

PLP Learner