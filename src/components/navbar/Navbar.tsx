'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import PAGES from '@/constants/pageConstants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DrawerComp from '../drawer/Drawer';
import css from './Navbar.module.css';
import Logo from '../logo-image/Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('');
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <AppBar color="transparent">
      <Toolbar
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          placeItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isMatch ? (
          <>
            <DrawerComp />
            <Link href="/">
              <Logo />
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <Logo />
            </Link>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={PAGES.some((page) => page.href === activeTab) ? activeTab : false}
              onChange={(event, newPath) => setActiveTab(newPath)}
            >
              {PAGES.map((page) => (
                <Tab label={page.name} value={page.href} component={Link} href={page.href} key={page.name} />
              ))}
            </Tabs>
            <div className={css.flexGap}>
              <Button variant="text">Entrar</Button>
              <Button variant="contained">Cadastrar</Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
