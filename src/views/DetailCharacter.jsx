import React from 'react'
import { useEffect } from 'react'
import { IconButton, Box, Grid, Typography, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useCharacters from '../hooks/useCharacters'

export default function DetailCharacter() {

  const { characterDetail, getDetail } = useCharacters()

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <>
      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', margin: "20px" }}>
        <Grid item xl={8} >
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            alt={characterDetail.name}
            height="auto"
            image={characterDetail.image}
          />
        </Grid>
        <Grid item xl={4}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "5px" }}>
            <IconButton onClick={() => addFavorites(character)}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
          <Typography gutterBottom variant="h2" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 50px", textAlign: "center" }}>
            {characterDetail.name}
          </Typography>
          <Typography variant="h5" sx={{ padding: "5px", margin: "5px", backgroundColor: "gray", fontSize: "20px", border: "1px solid white", borderRadius: '10px', fontFamily: "Roboto Mono" }}> Status: {characterDetail.status}
          </Typography>
          <Typography variant="h5" sx={{ padding: "5px", margin: "5px", backgroundColor: "gray", fontSize: "20px", border: "1px solid white", borderRadius: '10px', fontFamily: "Roboto Mono" }}> Specie: {characterDetail.species}
          </Typography>
          <Typography variant="h5" sx={{ padding: "5px", margin: "5px", backgroundColor: "gray", fontSize: "20px", border: "1px solid white", borderRadius: '10px', fontFamily: "Roboto Mono" }}> Gender: {characterDetail.gender}
          </Typography>
          <Link to={'/'}>
            <Typography variant="h5" sx={{ padding: "5px", margin: "5px", backgroundColor: "#adff2f", fontSize: "20px", border: "1px solid white", borderRadius: '10px', color: 'black', fontFamily: "Roboto Mono" }}>
              Back...
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
