import * as React from 'react';
import { useContext } from 'react';
import { Box, Chip, Grid, Card, CardContent, CardMedia, Typography, IconButton, Grow } from '@mui/material';
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Cards({ character }) {
  const { addFavorites, removeFavorites, isFavorite } = useContext(FavoritesContext)

  //TRANSICION DE LAS CARDS
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}>
        <Card sx={{ display: "flex", width: 410, margin: "10px", backgroundColor: "#2b2b66", boxShadow: "#adff2f 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }} onLoad={handleChange}>
          <Grid container>
            <Grid item xs={6}>
              <Link to={`/detail/${character.id}`}>
                <CardMedia
                  component="img"
                  alt={character.name}
                  height="267"
                  image={character.image}
                  sx={{ backgroundPosition: "center", backgroundSize: "cover" }}
                />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "5px 5px 0px 0px" }}>
                {isFavorite(character.id) ? (
                  <IconButton onClick={() => removeFavorites(character.id)}>
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => addFavorites(character)}>
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
              </Box>
              <CardContent sx={{
                height: "90%", display: "flex", flexDirection: "column", alignItems: "stretch"
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 30px", textAlign: "center" }}>
                  {character.name}
                </Typography>
                <Chip label={character.status} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "13px" }} />
                <Chip label={character.species} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "13px" }} />
                <Chip label={character.gender} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "13px" }} />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grow>
    </>
  )
}
