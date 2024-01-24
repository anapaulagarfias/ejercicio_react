import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardImage from "../../assets/paula.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";

export default function MyCard() {
  return (
    <Card className="card" sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="Foto de Paula"
        height="500"
        image={CardImage}
      />
      <CardContent sx={{ background: "#66b3c6" }}>
        <Typography gutterBottom variant="h5" component="div">
          Ana Paula Garfias
        </Typography>
        <div>
          <p>Desarrolladora Java Full Stack</p>
          <p>Morelia, Mich</p>
          <p>paulagarfias4@gmail.com</p>
        </div>
        <Typography variant="body2" color="text.secondary">
          Me considero una persona proactiva, con grandes interenses en seguirme
          preparando para el futuro. A la par tengo una gran afición por las
          tecnologías y su funcionalidad en el mundo actual por ello estoy
          estudiando y preparandome para desenvolverme como ingeniera software
          con amplios conocimientos en ciencia de datos.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "black" }}
          size="small"
          target="_blank"
          href="https://github.com/anapaulagarfias"
        >
          <GitHubIcon fontSize="large"></GitHubIcon>
        </Button>
        <Button
          sx={{ color: "black" }}
          size="small"
          target="_blank"
          href="https://www.linkedin.com/in/paulagarfias"
        >
          <LinkedInIcon fontSize="large"></LinkedInIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
