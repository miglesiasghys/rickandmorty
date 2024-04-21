import React from 'react'
import { Chip, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Cards({
  id,
  name,
  status,
  species,
  gender,
  image
}) {

  return (
    <Link to={`/detail/${id}`} sx={{ "&:hover": { border: "10px solid red" } }}>
      <Card sx={{ display: "flex", width: 400, margin: "10px", backgroundColor: "#2b2b66", boxShadow: "rgb(92,88,86) 0px 2px 5px" }}>
        <Grid container>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt={name}
              height="240"
              image={image}
            />
          </Grid>
          <Grid item xs={6} >
            <CardContent sx={{
              height: "85%", display: "flex", flexDirection: "column", alignItems: "stretch",
              justifyContent: "space-evenly"
            }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 30px", textAlign: "center" }}>
                {name}
              </Typography>
              <Chip label={status} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
              <Chip label={species} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
              <Chip label={gender} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Link>
  )
}
