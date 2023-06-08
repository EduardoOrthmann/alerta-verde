'use client';

import { useTheme } from '@mui/material';
import Image from 'next/image';

export default function Logo() {
  const theme = useTheme();

  return theme.palette.mode === 'light' ? (
    <Image src="/big-transparent-black-logo.png" width={231} height={65} alt="logo" />
  ) : (
    <Image src="/big-transparent-white-logo.png" width={231} height={65} alt="logo" />
  );
}
