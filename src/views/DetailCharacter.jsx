import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Grid, Typography, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'

export default function DetailCharacter() {

  const { idCharacter } = useParams()

  const [characterDetail, setCharacterDetail] = useState({})

  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/${idCharacter}`)
      .then(({ data }) => {
        setCharacterDetail(data)
      })
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
