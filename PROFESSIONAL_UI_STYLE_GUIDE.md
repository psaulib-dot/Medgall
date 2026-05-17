# Professional UI/UX Style Guide - Medgall

## Overview
This guide ensures consistent, professional styling across the Medgall application with full RTL/LTR and bilingual support.

---

## 1. Spacing System

All spacing uses a standardized 8px base unit:

```jsx
// Available spacing values
--spacing-xs:   4px
--spacing-sm:   8px
--spacing-md:   16px
--spacing-lg:   24px
--spacing-xl:   32px
--spacing-2xl:  48px
--spacing-3xl:  64px
```

### Usage Examples:

```jsx
// Using CSS Variables
const Container = styled.div`
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
`;

// Using Utility Classes
<div className="p-lg m-md">Content</div>

// In inline styles
<div style={{ padding: 'var(--spacing-lg)' }}>Content</div>
```

---

## 2. RTL/LTR Support

### Using RTL Utilities

```jsx
import { useIsRTL, getDirection, getFlexDirection, getTextAlign } from '../rtlUtils';

function MyComponent() {
  const isRTL = useIsRTL();

  return (
    <div style={{ 
      flexDirection: getFlexDirection(isRTL),
      textAlign: getTextAlign(isRTL, 'left')
    }}>
      Content
    </div>
  );
}
```

### CSS RTL Selectors

```css
/* Target RTL direction */
[dir="rtl"] .my-element {
  margin-right: var(--spacing-md);
}

/* Target LTR direction */
[dir="ltr"] .my-element {
  margin-left: var(--spacing-md);
}

/* Flexbox reversal for RTL */
[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}
```

### Preferred Approach: CSS Logical Properties

```css
/* Modern approach - automatically handles RTL/LTR */
.element {
  margin-inline-start: var(--spacing-md);  /* Left in LTR, Right in RTL */
  margin-inline-end: var(--spacing-md);    /* Right in LTR, Left in RTL */
  padding-inline-start: var(--spacing-lg);
  padding-inline-end: var(--spacing-lg);
  text-align: start;  /* Left in LTR, Right in RTL */
  float: inline-start; /* Left in LTR, Right in RTL */
}
```

---

## 3. Styling Components

### Professional Container Structure

```jsx
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const Section = styled.section`
  padding: var(--spacing-2xl) var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const Card = styled.div`
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
`;
```

### Color Usage

```jsx
const styled.button`
  background-color: var(--medhal-navy);    // Primary
  color: var(--medhal-cream);              // Background
  border: 1px solid var(--medhal-gold);    // Secondary/Accent
  
  &:hover {
    background-color: var(--medhal-gold);
  }
`;
```

---

## 4. Responsive Design

### Using Breakpoints

```css
/* Default: Mobile-first */
.element {
  padding: var(--spacing-md);
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    padding: var(--spacing-lg);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    padding: var(--spacing-xl);
  }
}
```

### Grid System

```jsx
<div className="grid grid-3">
  <article className="card">Item 1</article>
  <article className="card">Item 2</article>
  <article className="card">Item 3</article>
</div>
```

---

## 5. Bilingual Text Handling

### Using i18next

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <button onClick={() => i18n.changeLanguage('ar')}>
        {t('common.language')}
      </button>
    </>
  );
}
```

### Language Files Structure

```json
// locales/ar.json
{
  "home": {
    "title": "مرحبا بكم في مدحل",
    "description": "اكتشف الآثار الرائعة"
  }
}

// locales/en.json
{
  "home": {
    "title": "Welcome to Medhal",
    "description": "Discover amazing archaeological sites"
  }
}
```

---

## 6. Professional Typography

```jsx
// Use semantic HTML
<h1>Page Title</h1>        // var(--font-size-3xl)
<h2>Section Title</h2>     // var(--font-size-2xl)
<h3>Subsection</h3>        // var(--font-size-xl)
<p>Body text</p>           // var(--font-size-base)
<small>Small text</small>  // var(--font-size-sm)

// Font sizes
--font-size-xs:   12px
--font-size-sm:   14px
--font-size-base: 16px
--font-size-lg:   18px
--font-size-xl:   20px
--font-size-2xl:  24px
--font-size-3xl:  32px
```

---

## 7. Shadow & Elevation System

```jsx
const element = styled.div`
  box-shadow: var(--shadow-sm);  // Subtle elevation
  
  &:hover {
    box-shadow: var(--shadow-md);  // Medium elevation
  }
`;

/* Available shadows */
--shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

---

## 8. Accessibility Guidelines

### Always Include:
- Proper heading hierarchy (h1 → h6)
- Alt text for images: `<img alt="Description" src="..." />`
- ARIA labels for complex components: `aria-label="Menu"`
- Focus styles: `:focus { outline: 2px solid var(--medhal-gold); }`
- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<article>`

### Color Contrast
- Text: Minimum WCAG AA (4.5:1 ratio)
- All interactive elements must be keyboard navigable

---

## 9. Button Variants

```jsx
const PrimaryButton = styled.button`
  background-color: var(--medhal-navy);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--medhal-gold);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 2px solid var(--medhal-gold);
  color: var(--medhal-gold);

  &:hover {
    background-color: var(--medhal-gold);
    color: white;
  }
`;
```

---

## 10. Complete Component Example

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useIsRTL } from '../rtlUtils';

const CardContainer = styled.article`
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  color: var(--medhal-navy);
`;

const CardDescription = styled.p`
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--medhal-muted);
  margin-bottom: var(--spacing-lg);
`;

const CardButton = styled.button`
  background-color: var(--medhal-gold);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export function ExampleCard() {
  const { t } = useTranslation();
  const isRTL = useIsRTL();

  return (
    <CardContainer>
      <CardTitle>{t('card.title')}</CardTitle>
      <CardDescription>{t('card.description')}</CardDescription>
      <CardButton onClick={() => alert('Clicked')}>
        {t('card.button')}
      </CardButton>
    </CardContainer>
  );
}
```

---

## Quick Reference

| Element | Margin | Padding | Gap |
|---------|--------|---------|-----|
| Component | md | lg | md |
| Section | xl | 2xl | lg |
| Card | lg | lg | md |
| Button | sm | sm md | - |
| Input | sm | sm md | - |

---

## Testing Checklist

- [ ] Component renders correctly in RTL mode
- [ ] Component renders correctly in LTR mode
- [ ] Text is properly translated
- [ ] Spacing is consistent with system
- [ ] Colors use CSS variables
- [ ] Hover states work
- [ ] Responsive on mobile (320px+)
- [ ] Keyboard navigation works
- [ ] Focus styles visible
- [ ] Accessibility labels present

