import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Grid, Typography, CardMedia, CardContent, Chip, Button } from '@mui/material'
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
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        alt={characterDetail.name}
                        height="240"
                        image={characterDetail.image}
                    />
                </Grid>
                <Grid item xs={6} >
                    <CardContent sx={{
                        height: "85%", display: "flex", flexDirection: "column", alignItems: "stretch",
                        justifyContent: "space-evenly"
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 30px", textAlign: "center" }}>
                            {characterDetail.name}
                        </Typography>
                        <Chip label={characterDetail.status} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                        <Chip label={characterDetail.species} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                        <Chip label={characterDetail.gender} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                        <Link to={`/`}>
                            <Button variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }}>Home     </Button>
                        </Link>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}
