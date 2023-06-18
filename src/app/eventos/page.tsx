'use client';

import { Button, Container, Divider, MenuItem, Pagination, Select, useTheme, Paper } from '@mui/material';
import { useState } from 'react';
import './events.css';
import EventCard from '@/components/card/Card';

export default function Event() {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const backgroundImageUrl =
    theme.palette.mode === 'light' ? '/event-page-background.jpg' : '/event-page-background-dark.jpg';

  return (
    <div className="events" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <Container className="container">
        <div className="menu">
          <Select value={filter} onChange={(e) => setFilter(e.target.value)} displayEmpty sx={{ borderRadius: '10px' }}>
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Somente os meus">Somente os meus</MenuItem>
          </Select>
          <Button variant="contained">Adicionar novo evento</Button>
        </div>
        <Divider />
        <div className="cards-container">
          <div className="cards">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <Paper className="pagination-wrapper">
            <Pagination count={3} color="primary" page={page} onChange={(e, value) => setPage(value)} />
          </Paper>
        </div>
      </Container>
    </div>
  );
}
