import { extendTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  //generated with https://maketintsandshades.com/
  colors: {
    //brand
    pink: {
      50: '#f194b3',
      100: '#f194b3',
      200: '#f194b3',
      300: '#f194b3',
      400: '#ef88aa',
      500: '#ef88aa',
      600: '#ef88aa',
      700: '#d77a99',
      800: '#d77a99',
      900: '#d77a99',
    },
    lavender: {
      50: '#b1a1ef',
      100: '#b1a1ef',
      200: '#b1a1ef',
      300: '#b1a1ef',
      400: '#a896ed',
      500: '#a896ed',
      600: '#a896ed',
      700: '#9787d5',
      800: '#9787d5',
      900: '#9787d5',
    },
    indigo: {
      50: '#422d8d',
      100: '#422d8d',
      200: '#422d8d',
      300: '#422d8d',
      400: '#2d1680',
      500: '#2d1680',
      600: '#2d1680',
      700: '#291473',
      800: '#291473',
      900: '#291473',
    },
    //components colors
    rhino: {
      50: '#5a637e',
      100: '#5a637e',
      200: '#5a637e',
      300: '#5a637e',
      400: '#313C5E',
      500: '#313C5E',
      600: '#313C5E',
      700: '#27304b',
      800: '#27304b',
      900: '#27304b',
    },
    //components
    card: {
      100: '#0d1126',
    },
    border: {
      100: '#ff0000',
    },
    text: {
      100: '#7B85A7',
    },
  },
  breakpoints: ['320px', '480px', '768px', '1025px', '1200px'],
});

export const GlobalStyle = css`
  @font-face {
    font-family: 'SF-Pro';
    font-weight: normal;
    font-style: normal;
    src: local('SF Pro Display Regular'),
      url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff2')
        format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'SF-Pro';
    font-weight: 500;
    src: local('SF Pro Display Medium'),
      url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2')
        format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'SF-Pro';
    font-weight: 600;
    src: local('SF Pro Display Semibold'),
      url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff2')
        format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'SF-Pro';
    font-weight: bold;
    src: local('SF Pro Display Bold'),
      url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff2')
        format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'SF-Pro';
    font-weight: 800;
    src: local('SF Pro Display Heavy'),
      url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-heavy-webfont.woff2')
        format('woff2');
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
  button {
    user-select: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-family: 'SF-Pro', Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    min-width: 240px;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    position: relative;
    background-repeat: no-repeat;
    background-color: #151b30;
  }

  a {
    color: #ffffff !important;
  }
`;
