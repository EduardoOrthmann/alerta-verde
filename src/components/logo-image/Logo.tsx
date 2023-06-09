'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import css from './Logo.module.css';

export default function Logo() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return theme.palette.mode === 'light' ? (
    <Image
      src="/big-transparent-black-logo.png"
      width={231}
      height={65}
      alt="logo"
      className={isMatch ? css.small : ''}
    />
  ) : (
    <Image
      src="/big-transparent-white-logo.png"
      width={231}
      height={65}
      alt="logo"
      className={isMatch ? css.small : ''}
    />
  );
}
