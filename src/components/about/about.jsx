import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardImage from "../../assets/paula.png";

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Foto de Paula"
        height="500"
        image={CardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ana Paula Garfias
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Me considero una persona proactiva, con grandes interenses en seguirme
          preparando para el futuro. A la par tengo una gran afición por las
          tecnologías y su funcionalidad en el mundo actual por ello estoy
          estudiando y preparandome para desenvolverme como ingeniera software
          con amplios conocimientos en ciencia de datos.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
