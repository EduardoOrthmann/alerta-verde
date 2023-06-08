import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PAGES from '@/constants/pageConstants';
import Link from 'next/link';

export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: '60vw' }}>
          {PAGES.map((page) => (
            <Link href={page.href} key={page.name} onClick={() => setOpenDrawer(false)}>
              <ListItemButton>
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginRight: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
