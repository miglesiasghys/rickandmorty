import { useContext } from 'react'
import { Box, Chip, Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Cards({ character }) {

  const { addFavorites, removeFavorites, isFavorite } = useContext(FavoritesContext)

  return (
    <Card sx={{ display: "flex", width: 400, margin: "10px", backgroundColor: "#2b2b66", boxShadow: "rgb(92,88,86) 0px 2px 5px" }}>
      <Grid container>
        <Grid item xs={6}>
          <Link to={`/detail/${character.id}`}>
            <CardMedia
              component="img"
              alt={character.name}
              height="240"
              image={character.image}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "5px" }}>
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
            height: "80%", display: "flex", flexDirection: "column", alignItems: "stretch"
          }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 30px", textAlign: "center" }}>
              {character.name}
            </Typography>
            <Chip label={character.status} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
            <Chip label={character.species} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
            <Chip label={character.gender} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto Mono", fontSize: "15px" }} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
