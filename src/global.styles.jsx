import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1200px;
    --padding: 1rem;
    --padding-sm: 0.5rem;
    --margin: 1rem;
    --font-size: 16px;
    --font-size-lg: 1.25rem;
    --font-size-sm: 0.875rem;

    --breakpoint-xs: 480px;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1300px;
    --breakpoint-xxl: 2000px;
  }

  * {
    box-sizing: border-box;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }

  body {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size);
  }

  a {
    text-decoration: none;
    color: black;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--padding);
  }

  @media (max-width: var(--breakpoint-xxl)) {
    body {
      font-size: var(--font-size-lg);
    }
  }
  @media (max-width: var(--breakpoint-xl)) {
    body {
      font-size: var(--font-size-lg);
    }
  }

  @media (max-width: var(--breakpoint-lg)) {
    .container {
      padding: var(--padding-sm);
    }
    body {
      font-size: var(--font-size);
    }
  }

  @media (max-width: var(--breakpoint-md)) {
    body {
      font-size: var(--font-size-sm);
    }
  }

  @media (max-width: var(--breakpoint-sm)) {
    .container {
      padding: 0.25rem;
    }
    body {
      font-size: 0.75rem;
    }
  }


  @media (max-width: var(--breakpoint-xs)) {
    .container {
      padding: 0.2rem;
    }
    body {
      font-size: 0.5rem;
    }
  }
`;
