import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* ===== CSS Variables & Spacing System ===== */
  :root {
    /* Color Palette */
    --medhal-navy: #0F1C2E;
    --medhal-gold: #C6A75E;
    --medhal-cream: #F7F4EE;
    --medhal-text: #1F2937;
    --medhal-muted: #5F6470;
    --medhal-light-gray: #E5E7EB;
    --medhal-border: #D1D5DB;
    --medhal-success: #10B981;
    --medhal-error: #EF4444;
    --medhal-warning: #F59E0B;
    
    /* Spacing Scale (8px base) */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;
    --spacing-3xl: 64px;
    
    /* Typography */
    --font-family-primary: Georgia, 'Times New Roman', Tahoma, Arial, sans-serif;
    --font-family-secondary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-2xl: 24px;
    --font-size-3xl: 32px;
    
    /* Line Heights */
    --line-height-tight: 1.2;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition-base: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
    
    /* Layout */
    --header-height: 78px;
    --max-width-container: 1200px;
  }

  /* ===== Reset & Base Styles ===== */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  /* ===== RTL Support ===== */
  [dir="rtl"] {
    direction: rtl;
    text-align: right;
  }

  [dir="ltr"] {
    direction: ltr;
    text-align: left;
  }

  body {
    margin: 0;
    padding-top: var(--header-height);
    min-width: 320px;
    min-height: calc(100vh - var(--header-height));
    color: var(--medhal-text);
    background: var(--medhal-cream);
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--transition-base);
  }

  body, button, input, textarea, select {
    font-family: var(--font-family-primary);
  }

  /* ===== Typography ===== */
  h1 {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-tight);
    margin: var(--spacing-lg) 0;
    font-weight: 700;
  }

  h2 {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-tight);
    margin: var(--spacing-md) 0;
    font-weight: 700;
  }

  h3 {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-tight);
    margin: var(--spacing-md) 0;
    font-weight: 600;
  }

  h4, h5, h6 {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-normal);
    margin: var(--spacing-sm) 0;
    font-weight: 600;
  }

  p {
    margin: 0 0 var(--spacing-md) 0;
    line-height: var(--line-height-relaxed);
  }

  a {
    text-decoration: none;
    color: var(--medhal-gold);
    transition: color var(--transition-fast);

    &:hover {
      color: var(--medhal-gold);
      opacity: 0.8;
    }

    &:focus {
      outline: 2px solid var(--medhal-gold);
      outline-offset: 2px;
      border-radius: var(--radius-sm);
    }
  }

  /* ===== Buttons ===== */
  button, input:where([type="button"], [type="submit"], [type="reset"]) {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border: none;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-weight: 500;
    transition: all var(--transition-fast);

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  /* ===== Form Elements ===== */
  input, textarea, select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--medhal-border);
    border-radius: var(--radius-md);
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--medhal-gold);
      box-shadow: 0 0 0 3px rgba(198, 167, 94, 0.1);
    }
  }

  textarea {
    resize: vertical;
  }

  /* ===== Media Objects & Images ===== */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  video {
    max-width: 100%;
    height: auto;
  }

  /* ===== Lists ===== */
  ul, ol {
    margin: var(--spacing-md) 0;
    padding-${props => props.dir === 'rtl' ? 'right' : 'left'}: var(--spacing-lg);
  }

  li {
    margin-bottom: var(--spacing-sm);
  }

  /* ===== Container & Layout ===== */
  .container {
    max-width: var(--max-width-container);
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  .container-fluid {
    margin: 0;
    padding: 0;
  }

  /* ===== Utility Spacing Classes ===== */
  .p-0 { padding: 0 !important; }
  .p-xs { padding: var(--spacing-xs) !important; }
  .p-sm { padding: var(--spacing-sm) !important; }
  .p-md { padding: var(--spacing-md) !important; }
  .p-lg { padding: var(--spacing-lg) !important; }
  .p-xl { padding: var(--spacing-xl) !important; }
  .p-2xl { padding: var(--spacing-2xl) !important; }

  .m-0 { margin: 0 !important; }
  .m-xs { margin: var(--spacing-xs) !important; }
  .m-sm { margin: var(--spacing-sm) !important; }
  .m-md { margin: var(--spacing-md) !important; }
  .m-lg { margin: var(--spacing-lg) !important; }
  .m-xl { margin: var(--spacing-xl) !important; }
  .m-2xl { margin: var(--spacing-2xl) !important; }

  .mt-0 { margin-top: 0 !important; }
  .mt-xs { margin-top: var(--spacing-xs) !important; }
  .mt-sm { margin-top: var(--spacing-sm) !important; }
  .mt-md { margin-top: var(--spacing-md) !important; }
  .mt-lg { margin-top: var(--spacing-lg) !important; }
  .mt-xl { margin-top: var(--spacing-xl) !important; }

  .mb-0 { margin-bottom: 0 !important; }
  .mb-xs { margin-bottom: var(--spacing-xs) !important; }
  .mb-sm { margin-bottom: var(--spacing-sm) !important; }
  .mb-md { margin-bottom: var(--spacing-md) !important; }
  .mb-lg { margin-bottom: var(--spacing-lg) !important; }
  .mb-xl { margin-bottom: var(--spacing-xl) !important; }

  /* ===== Accessible Skip Link ===== */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* ===== Responsive Design ===== */
  @media (max-width: 768px) {
    :root {
      --font-size-3xl: 28px;
      --font-size-2xl: 22px;
      --font-size-xl: 18px;
      --spacing-lg: 20px;
      --spacing-xl: 28px;
    }
  }

  @media (max-width: 480px) {
    :root {
      --font-size-3xl: 24px;
      --font-size-2xl: 20px;
      --font-size-xl: 16px;
      --spacing-lg: 16px;
      --spacing-xl: 24px;
    }
  }
`;

export default GlobalStyle;
