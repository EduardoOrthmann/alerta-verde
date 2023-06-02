'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import PAGES from '@/constants/pageConstants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DrawerComp from '../drawer/Drawer';
import css from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(pathname);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <nav className={css.navbar}>
      <AppBar sx={{ background: 'transparent', color: '#000', backdropFilter: 'blur(4px)' }} elevation={0}>
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
                <Image
                  src="/big-transparent-black-logo.png"
                  width={231}
                  height={65}
                  alt="logo"
                  style={{ padding: '0.5rem 0' }}
                />
              </Link>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  src="/big-transparent-black-logo.png"
                  width={231}
                  height={65}
                  alt="logo"
                  style={{ padding: '0.5rem 0' }}
                />
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
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="text">Entrar</Button>
                <Button variant="contained">Cadastrar</Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}
