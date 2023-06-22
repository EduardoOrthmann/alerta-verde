import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import css from './Menu.module.css';

interface MenuProps {
  // eslint-disable-next-line no-unused-vars
  getFilter: (selectedFilter: string) => void;
}

export default function Menu({ getFilter }: MenuProps) {
  const [filter, setFilter] = useState('');

  const handleOnChange = (e: SelectChangeEvent<string>) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    getFilter(selectedFilter);
  };

  return (
    <div className={css.menu}>
      <Select value={filter} onChange={handleOnChange} displayEmpty sx={{ borderRadius: '10px' }}>
        <MenuItem value="">Todos</MenuItem>
        <MenuItem value="Somente os meus">Somente os meus</MenuItem>
        <MenuItem value="Somente os que estou participando">Somente os que estou participando</MenuItem>
      </Select>
      <Button variant="contained">Adicionar novo evento</Button>
    </div>
  );
}
