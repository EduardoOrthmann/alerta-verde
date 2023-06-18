import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventCard() {
  return (
    <Card>
      <CardHeader
        sx={{ bgcolor: '#04D361', color: '#fff' }}
        avatar={<Avatar />}
        action={
          <IconButton>
            <LoginIcon />
          </IconButton>
        }
        title="Juntar lixo do parque Ramiro"
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent className="card-content">
        <Typography variant="body2">
          Há muito lixo se acumulando no parque Ramiro, sendo assim quero criar esse evento para evitar que os animais
          da área morram por comer o lixo sendo jogado lá.
        </Typography>
        <div className="address">
          <LocationOnIcon style={{ color: '#CB3434' }} />
          <Typography variant="caption">
            Parque Ramiro Ruediger - R. Alberto Stein, 416 - Velha, Blumenau - SC, 89036-200
          </Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className="card-actions">
        <Typography variant="caption" color="text.secondary">
          1 Pessoa(s) participando
        </Typography>
        <div>
          <Typography variant="caption" color="text.secondary">
            28/05/2023
          </Typography>
          <Typography variant="caption" color="text.secondary">
            09:00-13:30
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}
