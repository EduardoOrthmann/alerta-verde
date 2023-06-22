'use client';

import { Container, Divider, Pagination, useTheme, Paper } from '@mui/material';
import { useState } from 'react';
import './events.css';
import EventCard from '@/components/card/Card';
import Menu from '@/components/menu/Menu';

export default function Event() {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const backgroundImageUrl =
    theme.palette.mode === 'light' ? '/event-page-background.jpg' : '/event-page-background-dark.jpg';

  return (
    <div className="events" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Container className="container">
        <Menu getFilter={setFilter} />
        <Divider />
        <div className="cards-container">
          <div className="cards">
            <EventCard variant="event" />
            <EventCard variant="event" />
            <EventCard variant="event" />
          </div>
          <Paper className="pagination-wrapper">
            <Pagination count={3} color="primary" page={page} onChange={(e, value) => setPage(value)} />
          </Paper>
        </div>
      </Container>
    </div>
  );
}
