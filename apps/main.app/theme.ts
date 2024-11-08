'use client';

import { createTheme, rem } from '@mantine/core';
import classes from './styles.module.css';

export const theme = createTheme({
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
  defaultRadius: 'sm',
  activeClassName: classes.active,
  autoContrast: true,
  luminanceThreshold: 0.36,
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
